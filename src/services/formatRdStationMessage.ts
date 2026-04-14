export async function formatRdStationMessage(day: number): Promise<{ success: boolean, data?: { message: string }, error?: string }> {
    const lipedema_sete_dias = `*⏰ FALTAM 7 DIAS para o evento: Entenda o Mercado Oculto do Lipedema*

Dia *07/05/2026 às 20h* 🔥

Organize sua agenda.

Participe ao vivo.

Não será apenas mais um evento.

Será uma imersão que pode mudar a forma como você conduz seus casos de lipedema, se posiciona na área e estrutura os seus atendimentos.

Se você realmente quer evoluir, este é o momento de decidir estar presente.

Anota aí.

Nos vemos ao vivo. 🚀`

    return { success: true, data: { message: lipedema_sete_dias } }
}
