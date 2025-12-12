const url = "/api"


export async function getUser(telegramId: any) {
    const response = await fetch(
        `${url}/get_user?telegram_id=${telegramId}`
    )

    if (!response.ok) {
        return {}
    } else {
        return await response.json()
    }
}
