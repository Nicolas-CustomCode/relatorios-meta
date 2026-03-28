'use client'

import { pgAccount } from "@/src/types/business"
import { useEffect, useState } from "react"

export default function Dashboard() {
    const [businessList, setBusinessList] = useState<pgAccount[]>([])

    useEffect(() => {
        fetch('/api/get-balances')
        .then((r) => (r.json()))
        .then(setBusinessList)
    }, [])

    return(
        <main>
            <div>
                {businessList.map((bm: pgAccount) => (
                    <div key={bm.id}>
                        <p>{bm.name}</p>
                        <p>{bm.minimum}</p>
                        <p>{bm.balance}</p>
                        <p>{bm.status}</p>
                        <p>{bm.updated}</p>
                    </div>
                ))}
            </div>
            <button onClick={() => fetch('/api/sync-balances')}>Aaaa</button>
        </main>
    )
}
