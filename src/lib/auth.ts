import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import {Adapter} from "next-auth/adapters";
import Github from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma) as Adapter,
    trustHost: true,
    providers: [Github],
})