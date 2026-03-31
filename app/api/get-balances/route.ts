import { pool } from "@/src/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
    const res = await pool.query(
        `SELECT * FROM meta.balances`
    )

    return NextResponse.json(res.rows)
}
