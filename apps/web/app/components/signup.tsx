"use client"
import { getServerSession } from "next-auth"
import { signIn, signOut, useSession } from "next-auth/react"

import { Button } from "@repo/ui/components/ui/button"


export function Signup(){
    return <Button  variant="outline">Sign Up</Button>
}