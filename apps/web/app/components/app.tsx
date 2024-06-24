"use client"

import { signIn, signOut } from "next-auth/react"

export function Appbar(){
    return <div>
        <button onClick={function(){
            signIn()
        }}>sign in </button>
        <button onClick={function(){
            signOut()
        }}>sign out</button>
    </div>
}