import axios from "axios";
import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOption={

    
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          name: { label: 'name', type: 'text', placeholder: 'name' },
          email: { label: 'email', type: 'text', placeholder: 'email' },
          password: { label: 'password', type: 'password', placeholder: 'password' },
        },
        async authorize(credentials: any) {
          //console.log(credentials)
          try {
            console.log(10)
            //console.log(credentials)
            const res = await axios({
              method: 'POST',
              url: process.env.NEXTAUTH_URL,
              data: JSON.stringify(credentials)
            })
  
            //console.log(res.data.status)
            if (res.data.status == 200) {
  
              console.log("1")
              return credentials
  
            }
            else {
  
              console.log("2")
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
        async signIn({ user, account, profile, email, credentials }:any) {
            return true
          },
    },
  }