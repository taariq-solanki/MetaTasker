import axios from "axios";
import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from '@prisma/client'

export const client = new PrismaClient()
export const authOption = {


  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {

        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: { label: 'password', type: 'password', placeholder: 'password' },
      },
      async authorize(credentials: any) {
        console.log(credentials)
        // console.log(credentials.email)
        try {
          //console.log(10)

          const user: any = await client.user.findFirst({   //db call to find if user exists
            where: { userEmail: credentials.email },
            select: {
              userEmail: true,
              userId: true,
              userName: true,
              userPassword: true
            }
          })
          //console.log(user)
          //check if email and passsword matches
          let userValid = false
          if (credentials.email == user?.userEmail && credentials.password == user?.userPassword) {
            userValid = true
            //console.log(10)
            return {
              id: user.userId.toString(),
              email: user.userEmail,
              name: user.userName,
            }


          } else {
            return null
          }




        } catch {

          console.log("3")
          return null

        }
      }


    })
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {

    session: ({ session, token, user }: any) => {
      //console.log(token)
      if (session.user) {

        session.user.id = token.sub
      }
      console.log(session)
      return session
    },
    // redirect: ({ url, baseUrl }: any) => {
      
    //   if (url === '/api/auth/signout') {
    //     console.log(url)
    //     return `${baseUrl}/signin`;
    //   }
    //   // Redirect to dashboard after signin
    //   if (url === '/api/auth/callback/credentials') {
    //     console.log(url)

    //     return `${baseUrl}/dashboard`;
    //   }
    //   // Allows relative callback URLs
    //   if (url.startsWith("/")) {
    //     console.log(url)
    //     return `${baseUrl}${url}`;}
    //   // Allows callback URLs on the same origin
      
    //   else if (new URL(url).origin === baseUrl) return url;
    //   return baseUrl;
    
    // }
  },


}






const handler = NextAuth(authOption)

export { handler as GET, handler as POST }