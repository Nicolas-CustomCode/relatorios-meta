import { upsertLead } from "@/src/repositories/upsertLeadInfo"
import type { LeadInfo } from "@/src/types/rdStation"
import type { LeadsReq } from "@/src/types/rdStation"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const res: LeadsReq = await req.json()

    if (!res.leads?.[0]?.personal_phone || !res.leads?.[0]?.name) return NextResponse.json({ success: false, error: 'Dados inválidos' })

    const phone = res.leads[0].personal_phone
    const name = res.leads[0].name

    const data: LeadInfo = {
        phone,
        name
    }

    await upsertLead(data)

    return NextResponse.json({ ok: true })
}
