import * as z from "zod";

export const NewPasswordSchema = z.object({
    password: z.string().min(8),
})
export const ResetSchema = z.object({
    email: z.string().email(),
})
export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
})
export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(1, {
        message: "Name is required"
    })
})