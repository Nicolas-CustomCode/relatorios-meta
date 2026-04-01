import { getBalances } from "@/src/services/getBalances"
import { NextResponse } from "next/server"

export async function GET() {
    const res = await getBalances()

    return NextResponse.json(res)
}
