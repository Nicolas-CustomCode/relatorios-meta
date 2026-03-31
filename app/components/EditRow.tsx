import { pgAccount } from '@/src/types/business'
import { useState } from 'react'

export default function Row({ data, onChange }: { data: pgAccount, onChange: (updated: pgAccount) => void }) {
    const [minimum, setMinimum] = useState<number | ''>(data.minimum ?? '')
    const [type, setType] = useState<string>(data.type ?? '')
    const [show, setShow] = useState<boolean>(data.show ?? true)

    const handleMinimumChange = (value: number | '') => {
        setMinimum(value)
        onChange({ ...data, minimum: value === '' ? null : value, type, show })
    }

    const handleTypeChange = (value: string) => {
        setType(value)
        onChange({ ...data, minimum: minimum === '' ? null : minimum, type: value, show })
    }

    const handleShowChange = (value: boolean) => {
        setShow(value)
        onChange({ ...data, minimum: minimum === '' ? null : minimum, type, show: value }) 
    }

    return (
        <tr className="hover:bg-surface-container-high transition-colors">
            <td className="px-6 py-5 font-mono text-xs text-on-surface-variant font-medium">{data.id}</td>
            <td className="px-6 py-5 text-sm font-semibold text-on-surface">{data.name}</td>
            <td className="px-6 py-5 text-right">
                <input
                    type="number"
                    className="w-full max-w-[150px] px-3 py-2 text-sm bg-surface-container-lowest border border-outline-variant/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-right"
                    value={minimum}
                    placeholder='Valor'
                    onChange={(e) => handleMinimumChange(e.target.value === '' ? '' : Number(e.target.value))}
                />
            </td>
            <td className="px-6 py-5 text-center">
                <select
                    name="type"
                    id="type"
                    className="px-3 py-2 text-sm bg-surface-container-lowest border border-outline-variant/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-on-surface"
                    value={type}
                    onChange={(e) => handleTypeChange(e.target.value)}
                >
                    <option value="" disabled>Selecione</option>
                    <option value="Pix">Pix</option>
                    <option value="Cartão">Cartão</option>
                </select>
            </td>
            <td className="px-6 py-5 text-center">
                <input 
                    type="checkbox" 
                    name="show" 
                    id={`show-${data.id}`} 
                    checked={show} 
                    onChange={(e) => handleShowChange(e.target.checked)} 
                    className="w-5 h-5 rounded border-outline-variant/30 accent-primary cursor-pointer"
                />
            </td>
        </tr>
    )
}
