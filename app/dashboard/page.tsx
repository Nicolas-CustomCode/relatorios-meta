'use client'

import { pgAccount } from "@/src/types/business"
import { useEffect, useState } from "react"
import { Button } from "../components/Buttons"
import styles from '@/src/styles/pages/dashboard.module.css'
import Table from "../components/Table"

export default function Dashboard() {
    const [businessList, setBusinessList] = useState<pgAccount[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const sortedList: pgAccount[] = [...businessList].sort((a, b) => (
        a.name.localeCompare(b.name)
    ))

    async function getBalances() {
        const res = await fetch('/api/get-balances')
        const data = await res.json()
        setBusinessList(data)
    }

    useEffect(() => {
        getBalances()
    }, [])

    async function updateBalances() {
        try {
            setLoading(true)

            await fetch('/api/sync-balances')
            await getBalances()
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <h1>RELATÓRIO DE SALDOS</h1>
                <p>Veja os saldos mais recentes das contas de anúncio que possui acesso!</p>
            </header>

            <section className={styles.tableSection}>
                <div className={styles.tableContainer}>
                    <Table data={sortedList}></Table>
                </div>
                <Button variant="primary" onClick={updateBalances} disabled={loading}>{loading ? 'Atualizando...' : 'Atualizar'}</Button>
            </section>
        </main>
    )
}
