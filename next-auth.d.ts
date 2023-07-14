import type { DefaultSession, DefaultUser } from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    error?: "RefreshAccessTokenError";
    user: {
      /** The user's id. */
      id: string;
      createdAt: string;
      updatedAt: string;
      emailVerified: string | null;
      password: string | null;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {}
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    access_token: string;
    expires_at: number;
    refresh_token: string;
    error?: "RefreshAccessTokenError";
  }
}
