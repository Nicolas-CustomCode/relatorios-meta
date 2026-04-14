import 'dotenv/config'
import type { Business, BusinessResponse } from '../types/business.js'

export async function pullData(): Promise<Business[]> {
    const url: string = 'https://graph.facebook.com/v25.0/me/businesses?limit=200'
    const token: string | undefined = process.env.BEARER_TOKEN

    try {
        const response: Response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const json: BusinessResponse = await response.json()

        return json.data
    }
    catch (error) {
        console.error((error as Error).message)
        throw error
    }
}
