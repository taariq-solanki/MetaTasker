"use client"
import { getServerSession } from "next-auth"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { Button } from "@repo/ui/components/ui/button"


export function Signup(){
    const router = useRouter()
    return <Button onClick={function(){
        router.push('/signup')
    } } variant="outline">Sign Up</Button>
}