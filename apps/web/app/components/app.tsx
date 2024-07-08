"use client"

import { getServerSession } from "next-auth"
import { signIn, signOut, useSession } from "next-auth/react"

import { Button } from "@repo/ui/components/ui/button"

export function Appbar() {


    const session = useSession()
    console.log(session)
    if (session.data) {
        return <div>
            <Button onClick={function () {
                signOut()
            }} variant="outline">sign out</Button>
           
        </div>
    }
    else{
        return <div>
            <Button onClick={function () {
                signIn()
            }} variant="outline">sign in</Button>
           
        </div>
    }

} 
