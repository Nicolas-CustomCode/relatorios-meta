export async function sendMessage(data: { phone: string, message: string }) {
    const url: string = 'https://baseservidor-evolution-api.kwlyqm.easypanel.host/message/sendText/RD';

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": `${process.env.EVOLUTION_API_KEY}`
            },
            body: JSON.stringify({
                "number": `${data.phone}`,
                "text": `${data.message}`
            })
        });

        if (!res.ok) {
            throw new Error(`Erro na API Evolution: ${res.statusText}`);
        }

        return { success: true };
    } catch (error) {
        return { success: false, error: (error as Error).message };
    }
}
