import saveUserDb from "@/libs/db/saveUserDb";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
  callbacks: {
    async signIn({ user }) {
      const state: boolean = await saveUserDb(user);
      return state;
    }
  }
});