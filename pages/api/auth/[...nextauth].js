import { connectDB } from "@/utils/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.REACT_APP_GITHUB_ID,
      clientSecret: process.env.REACT_APP_GITHUB_PW,
    }),
  ],
  secret : 'qwer1234',
  adapter : MongoDBAdapter(connectDB)

};
export default NextAuth(authOptions); 