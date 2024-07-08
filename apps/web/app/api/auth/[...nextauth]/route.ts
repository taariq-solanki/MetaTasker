
import NextAuth from "next-auth/next";

import { authOption } from "../../../components/client";







const handler = NextAuth(authOption)

export { handler as GET, handler as POST }