import { getBusinesses } from "@/src/services/getBusinesses";
import { loopOverBusinesses } from "@/src/services/loopOverBusinesses";
import { BusinessResponse } from "@/src/types/business";
import { NextResponse } from "next/server";

export async function GET() {
    const businesses: BusinessResponse = await getBusinesses()

    await loopOverBusinesses(businesses)

    return NextResponse.json({ ok: true })
}
