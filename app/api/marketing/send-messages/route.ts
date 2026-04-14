import { listRdStationLeads } from "@/src/repositories/listRdStationLeads";
import { formatRdStationMessage } from "@/src/services/formatRdStationMessage";
import { sendMessage } from "@/src/services/sendMessage";
import { DbLeadRes } from "@/src/types/rdStation";
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    const now = new Date()
    const day = now.getDate()
    const month = now.getMonth()

    if (day !== 14 || month !== 3) return NextResponse.json({ success: false, error: "Hoje não é 14 de abril" });

    const { data.message: message }: string = await formatRdStationMessage(day)

    const leads: DbLeadRes[] = await listRdStationLeads()

    for (const lead of leads) {
        const dataToSend = {
            phone: lead.phone,
            message: message
        }
        sendMessage(dataToSend)
    }

    return NextResponse.json({ success: true });
}
