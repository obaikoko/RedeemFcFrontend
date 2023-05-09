import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add more providers here
  ],

  // Add optional custom options
  // For example, to customize the authentication flow
  callbacks: {
    async signIn(user, account, profile) {
      // You can perform custom actions here after successful sign-in
      return true;
    },
    async redirect(url, baseUrl) {
      // You can modify the redirect URL here
      return baseUrl;
    },
    // Add more callback functions as needed
  },

  // You can configure other options here

  // For example, to specify a database for storing user sessions
  // session: {
  //   // Set custom session options if needed
  //   // e.g., session.maxAge = 60 * 60 // 1 hour
  // },
});
