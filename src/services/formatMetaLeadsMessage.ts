import { dbBusinessMessaging } from '@/src/types/evolution';
import { sumLeadsByPeriod } from '@/src/repositories/sumLeadsByPeriod';

export async function formatMetaLeadsMessage(data: dbBusinessMessaging, initialLeads: number): Promise<{ success: boolean, data?: { phone: string, message: string }, error?: string }> {
    if (!data.active || !data.phone || data.weekdays.length === 0 || !data.message || !data.message.includes('{{leads}}')) {
        console.log(`[formatMetaLeadsMessage] Skipping BM ${data.id}: Invalid configuration or inactive.`);
        return { success: false, error: "Dados inválidos" };
    }

    const today = new Date().getDay();

    if (!data.weekdays.includes(today)) {
        console.log(`[formatMetaLeadsMessage] Skipping BM ${data.id}: Today is not a scheduled day.`);
        return { success: false, error: "Hoje não é dia de envio para esta conta" };
    }

    let leads = initialLeads;

    if (data.format === 'semanal') {
        const now = new Date();
        const lastSaturday = new Date();
        lastSaturday.setDate(now.getDate() - now.getDay() - 1);

        const previousSunday = new Date();
        previousSunday.setDate(lastSaturday.getDate() - 6);

        const startDate = previousSunday.toISOString().split('T')[0];
        const endDate = lastSaturday.toISOString().split('T')[0];

        leads = await sumLeadsByPeriod(data.id, startDate, endDate);
    }

    const messageToSend = leads > 0
        ? data.message.replace('{{leads}}', leads.toString()).replace(/\\n/g, '\n')
        : data.format === 'semanal'
            ? `Bom dia, pessoal!

Nas última semana não tivemos entrada de novos leads no sistema.

Poderiam confirmar, por gentileza, se realmente não houve entrada de novos contatos para vocês nesse período?

Esse retorno nos ajuda a acompanhar o desempenho da conta e identificar oportunidades de melhoria na geração de novos leads.`
            : `Bom dia, pessoal!

Nas últimas 24 horas não tivemos entradas de novos leads no sistema.

Poderiam confirmar, por gentileza, se realmente não houve entrada de novos contatos para vocês nesse período?

Esse retorno nos ajuda a acompanhar o desempenho da conta e identificar oportunidades de melhoria na geração de novos leads.`;

    const dataToSend = {
        phone: data.phone,
        message: messageToSend
    }

    return { success: true, data: dataToSend }
}
