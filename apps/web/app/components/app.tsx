"use client"

import { getServerSession } from "next-auth"
import { signIn, signOut, useSession } from "next-auth/react"
import { authOption } from "../api/auth/[...nextauth]/route"

export function Appbar() {


    const session = useSession()
    console.log(session)
    if (session.data) {
        return <div>
            <button onClick={function () {
                signOut()
            }}>sign out </button>
        </div>
    }
    else{
        return <div>
            <button onClick={function(){
                signIn()
            }}>sign in</button>
        </div>
    }

} 
