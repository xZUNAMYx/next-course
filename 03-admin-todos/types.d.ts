// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT }  from "next-auth/jwt";

interface IUser extends DefaultUser {
  /**
   * Roles del usuario
   */
  roles?: string[];
  id: string;
  /**
   * Agregar cualquier otro campo que tu manejas
   */
}

declare module "next-auth" {
  interface User extends IUser {}

  interface Session {
    user?: User;
  }
}



// declare module "next-auth/jwt" {
//     interface JWT extends IUser {}
//   }
declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
    interface JWT {
      /** OpenID ID Token */
      idToken?: string
    }
  }