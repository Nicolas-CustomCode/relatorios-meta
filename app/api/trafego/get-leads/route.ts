import { insertLeads } from "@/src/repositories/insertLeads";
import { listBusinesses } from "@/src/repositories/listBusinesses";
import { listMessaging } from "@/src/repositories/listMessaging";
import { formatMetaLeadsMessage } from "@/src/services/formatMetaLeadsMessage";
import { getAdAccounts } from "@/src/services/getAdAccounts";
import { getDailyLeads } from "@/src/services/getDailyLeads";
import { sendMessage } from "@/src/services/sendMessage";
import { AdAccounts, BmLead } from "@/src/types/business";
import { NextResponse } from "next/server";

export async function GET() {
    const businesses = await listBusinesses()
    const { combined: messagingConfigs } = await listMessaging()

    for (const business of businesses) {
        const accounts: AdAccounts[] = await getAdAccounts(business)

        let leadCount: number = 0

        for (const account of accounts) {
            const leads = await getDailyLeads(account.id)

            leadCount += Number(leads.data?.[0]?.actions?.[0]?.value ?? 0)
        }

        const businessLeads: BmLead = {
            id: business.id,
            bm: business.name,
            total: leadCount
        }

        await insertLeads(businessLeads)

        const config = messagingConfigs.find(c => c.id === business.id)
        if (config) {
            const data = await formatMetaLeadsMessage(config, leadCount)
            if (data.success && data.data) {
                await sendMessage(data.data)
            }
        }
    }

    return NextResponse.json({ ok: true })
}
