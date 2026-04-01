import LeadsRow from "./LeadsRow";
import type { LeadData } from "@/src/types/business";

export default function LeadsTable({ data }: { data: LeadData[] }) {
    return (
        <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
                <tr className="bg-surface-container-low/30 text-on-surface-variant">
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest w-1/4">Id da Conta</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest w-1/3">Nome da Conta</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-center">Total de Leads</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-right">Data de Consulta</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
                {data.map((lead, index) => (
                    <LeadsRow key={`${lead.id}-${index}`} data={lead} />
                ))}
                {data.length === 0 && (
                    <tr>
                        <td colSpan={4} className="px-6 py-8 text-center text-on-surface-variant text-sm">
                            Nenhum lead encontrado para os filtros selecionados.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
