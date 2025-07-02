import NextAuth, { DefaultSession } from "next-auth";

// NextAuth ke types ko extend karne ke liye module declaration kar rahe hain
declare module "next-auth" {
  // Session interface ko extend kar rahe hain
  interface Session {
    user: {
      id: string; // Har user ke session mein user ki ID lazmi hogi
    } & DefaultSession["user"]; // Baaki default user properties (jaise name, email, image) bhi shamil rahengi
  }
}
