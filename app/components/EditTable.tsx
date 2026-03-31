import { pgAccount } from "@/src/types/business";
import EditRow from "./EditRow";

export default function EditTable({ data, onChange }: { data: pgAccount[], onChange: (updated: pgAccount[]) => void }) {
    const handleRowChange = (updatedRow: pgAccount) => {
        const newData = data.map(d => d.id === updatedRow.id ? updatedRow : d)
        onChange(newData)
    }

    return (
        <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
                <tr className="bg-surface-container-low/30 text-on-surface-variant">
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Id</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Nome</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-right">Mínimo</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-center">Tipo</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-center">Mostrar</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
                {data.map((account) => (
                    <EditRow key={account.id} data={account} onChange={handleRowChange}></EditRow>
                ))}
            </tbody>
        </table>
    )
}
