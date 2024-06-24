import axios from "axios";
import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import { authOption } from "../../../components/authoption";

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }