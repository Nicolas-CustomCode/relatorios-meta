import { listRdStationLeads } from "@/src/repositories/listRdStationLeads";
import { DbLeadRes } from "@/src/types/rdStation";
import { NextResponse } from "next/server";

export async function GET() {
    const data: DbLeadRes[] = await listRdStationLeads()

    return NextResponse.json(data)
}
