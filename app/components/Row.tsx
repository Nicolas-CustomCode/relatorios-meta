import { pgAccount } from '@/src/types/business'

export default function Row({ data }: { data: pgAccount }) {
    const brl = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(data.balance)

    const date = new Date(data.updated).toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })

    const status = data.balance >= data.minimum ? 'Ok' : 'Atenção'

    return (
        <tr>
            <td><p>{data.id}</p></td>
            <td><p>{data.name}</p></td>
            <td><p>{data.minimum ?? '-'}</p></td>
            <td><p>{brl}</p></td>
            <td><p>{status}</p></td>
            <td><p>{date}</p></td>
            <td><p>{data.type ?? '-'}</p></td>
        </tr>
    )
}
