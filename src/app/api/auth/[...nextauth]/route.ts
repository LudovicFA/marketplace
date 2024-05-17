import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOCLE_CLIENT_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
