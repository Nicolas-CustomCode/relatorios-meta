import { pool } from "../lib/db";
import { QueryResult } from "pg";
import { DbLeadRes } from "../types/rdStation";

export async function listRdStationLeads(): Promise<DbLeadRes[]> {
    const data: QueryResult<DbLeadRes> = await pool.query(`
        SELECT * FROM rdstation.leads
    `)

    return data.rows
}
