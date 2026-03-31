import { pgAccount } from '@/src/types/business'

export default function Row({ data }: { data: pgAccount }) {
    const balanceBrl = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(data.balance)

    const minimumBrl = data.minimum === null ? '-' : new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(data.minimum)

    const date = new Date(data.updated).toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })

    const status = data.minimum !== 0 && Number(data.balance) >= Number(data.minimum) ? 'Ok' : 'Atenção'
    const isError = status === 'Atenção'

    return (
        <tr className={isError ? "hover:bg-error-container/5 transition-colors bg-error-container/10" : "hover:bg-surface-container-high transition-colors"}>
            <td className={`px-6 py-5 font-mono text-xs ${isError ? 'text-on-surface font-medium' : 'text-on-surface-variant'}`}>{data.id}</td>
            <td className="px-6 py-5 text-sm font-semibold text-on-surface">{data.name}</td>
            <td className="px-6 py-5 text-sm text-on-surface-variant text-right">{minimumBrl}</td>
            <td className={`px-6 py-5 text-sm font-bold text-right ${isError ? 'text-error' : 'text-on-surface'}`}>{balanceBrl}</td>
            <td className="px-6 py-5 text-center">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${isError ? 'bg-error text-on-error' : 'bg-tertiary-container text-on-tertiary-container'}`}>
                    {status}
                </span>
            </td>
            <td className="px-6 py-5 text-xs text-on-surface-variant">{date}</td>
            <td className="px-6 py-5">
                <span className="text-xs font-medium bg-surface-container text-on-surface-variant px-2 py-1 rounded">{data.type ?? '-'}</span>
            </td>
        </tr>
    )
}
