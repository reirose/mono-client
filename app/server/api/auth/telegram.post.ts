import crypto from 'crypto'

function verifyTelegramInitData(initData: string, botToken: string) {
  const params = new URLSearchParams(initData)
  const hash = params.get('hash')
  params.delete('hash')

  const dataCheckString = [...params.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}=${v}`)
    .join('\n')

  const secret = crypto
    .createHash('sha256')
    .update(botToken)
    .digest()

  const computedHash = crypto
    .createHmac('sha256', secret)
    .update(dataCheckString)
    .digest('hex')

  return computedHash === hash
}

export default defineEventHandler(async (event) => {
  const { initData } = await readBody(event)

  if (!initData) {
    throw createError({ statusCode: 400 })
  }

  const isValid = verifyTelegramInitData(
    initData,
    process.env.TG_BOT_TOKEN!
  )

  if (!isValid) {
    throw createError({ statusCode: 401 })
  }

  // достаём user.id
  const params = new URLSearchParams(initData)
  const user = JSON.parse(params.get('user')!)

  // ставим cookie
  setCookie(event, 'tg_user_id', String(user.id), {
    httpOnly: true,
    sameSite: 'lax'
  })

  return { ok: true }
})
