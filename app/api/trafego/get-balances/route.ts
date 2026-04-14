import { upsertBalance } from "@/src/repositories/upsertBalance";
import { listBusinesses } from "@/src/repositories/listBusinesses";
import { getAccountBalance } from "@/src/services/getAccountBalance";
import { getAdAccounts } from "@/src/services/getAdAccounts";
import { AdAccountBalanceResponse, AdAccounts } from "@/src/types/business";
import { NextResponse } from "next/server";

export async function GET() {
    const businesses = await listBusinesses()

    for (const business of businesses) {
        const accounts: AdAccounts[] = await getAdAccounts(business)

        for (const account of accounts) {
            const accountData: AdAccountBalanceResponse = await getAccountBalance(account)

            const brl: number = accountData.is_prepay_account
                ? Number(accountData.funding_source_details.display_string.match(/[\d.,]+/)?.[0]?.replace(/[.,]/g, '')) / 100
                : Number(accountData.balance) / 100

            const data = {
                id: accountData.id,
                name: accountData.name,
                balance: brl
            }

            upsertBalance(data)
        }
    }

    return NextResponse.json({ ok: true })
}
