import { DefaultSession } from "next-auth";

declare module 'next-auth' {
    interface Session {
        user: User & DefaultSession['user'];
    }
}

interface User {
    id: string,
    nam: string,
    email: string,
    emailVerified?: boolean | string | boolean,
    image?: string,
    stripe_customer_id?: string,
    times: string[],
    address?: string,
    phone?: string,
    status: boolean,
    createdAt: String,
    updatedAt: String,
}