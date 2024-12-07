// import prisma from "@/lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "./prisma"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),

  providers: [ Google],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      
      return true;
    },

    // TODO: Implementar jwt
    // async jwt({ token, user, account, profile }) {
    //   // const dbUser = await prisma.user.findUnique({ where: { email: user.email ?? 'no-email' } });

    //   token.roles = roles ?? ['no-roles'];
    //   // token.id = dbUser?.id ?? 'no-UUid';

    //   return token;
    // },

    // async session({ session, token, user }) {
    //   if ( session && session.user ) {
    //     session.user.roles = token.roles;
    //     session.user.id = token.idToken;

    //   return session;
    // },
  }
})



// import NextAuth from "next-auth";
// // import Google from "next-auth/providers/google"
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";
// import authConfig from "./auth.config";

// const prisma = new PrismaClient()

// export const { auth, handlers, signIn, signOut } = NextAuth({
//     adapter: PrismaAdapter(prisma),
//     session: { strategy: "jwt" },
//     //TODO: Probar desde google o el authCOnfig si es que es necesario
//     ...authConfig,
//     // providers: [
//     //     Google({
//     //         clientId: process.env.GOOGLE_CLIENT_ID || "",
//     //         clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
//     //     })
//     // ],

// })