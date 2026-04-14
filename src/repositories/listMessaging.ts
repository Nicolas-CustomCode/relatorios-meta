import { pool } from "@/src/lib/db"
import { dbBusinessMessaging, FetchGroups } from "../types/evolution"
import { Business } from "../types/business"

export async function listMessaging(): Promise<{ combined: dbBusinessMessaging[], groups: FetchGroups[] }> {
    const [businessesRes, groupsRes, messagingRes] = await Promise.all([
        pool.query(`SELECT * FROM meta.businesses ORDER BY name`),
        pool.query(`SELECT * FROM meta.groups`),
        pool.query(`SELECT * FROM meta.messaging`)
    ])

    const businesses = businessesRes.rows as Business[]
    const groups = groupsRes.rows as FetchGroups[]
    const messaging = messagingRes.rows

    const combined = businesses.map((bm) => {
        const config = messaging.find((m: any) => m.id === bm.id)
        return {
            id: bm.id,
            business: bm.name,
            phone: config?.phone || "",
            message: config?.message || "",
            weekdays: config?.weekdays || [],
            format: config?.format || "diario",
            active: config?.active ?? false
        }
    })

    return { combined, groups }
}
