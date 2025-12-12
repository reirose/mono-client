const url = "/api/users"

export async function addUser(telegramId: any, username: any) {
    const response = await fetch(
        `${url}/add_user?telegram_id=${telegramId}&username=${username}`
    )

    if (!response.ok) {
        return false
    } else {
        return true
    }
}