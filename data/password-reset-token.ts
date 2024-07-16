import { db } from "@/lib/db"

export const getPasswordResetTokenByToken = async (token: string) => {
    try {
        const passwordToken = await db.passordResetToken.findUnique({
            where: { token }
        })
        return passwordToken
    } catch (error) {
        return null
    }
}
export const getPasswordResetTokenByEmail = async (email: string) => {
    try {
        const passwordToken = await db.passordResetToken.findFirst({
            where: { email }
        })
        return passwordToken
    } catch (error) {
        return null
    }
}