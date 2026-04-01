import { pool } from "@/src/lib/db"

export async function getBalances() {
    const res = await pool.query(
        `SELECT * FROM meta.balances`
    )

    return res.rows
}
