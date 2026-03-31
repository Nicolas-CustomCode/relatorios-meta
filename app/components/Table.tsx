import { pgAccount } from "@/src/types/business";
import Row from "./Row";

export default function Table({ data }: { data: pgAccount[] }) {
    return (
        <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
                <tr className="bg-surface-container-low/30 text-on-surface-variant">
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Id da Conta</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Nome da Campanha</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-right">Mínimo</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-right">Saldo Atual</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-center">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Atualizado</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest">Tipo</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
                {data.map((account) => (
                    account.show && <Row key={account.id} data={account}></Row>
                ))}
            </tbody>
        </table>
    )
}
