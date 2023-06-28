import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: REACT_APP_GITHUB_ID.toString(),
      clientSecret: REACT_APP_GITHUB_PW.toString(),
    }),
  ],
  secret : 'qwer1234'
};
export default NextAuth(authOptions); 