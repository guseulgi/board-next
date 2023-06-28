import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.REACT_APP_GITHUB_ID,
      clientSecret: process.env.REACT_APP_GITHUB_PW,
    }),
  ],
  secret : 'qwer1234'
};
export default NextAuth(authOptions); 