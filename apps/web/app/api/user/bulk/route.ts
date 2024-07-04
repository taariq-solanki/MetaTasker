import { getServerSession } from "next-auth";

import { NextRequest, NextResponse } from "next/server";
import { use } from "react";
import { authOption, client } from "../../auth/[...nextauth]/route";

export  async function GET(req:NextRequest,res:any){
    const session=await getServerSession(authOption)
    // console.log(session.user.email)
    // console.log(session?.user.id)
   //check if session engage find all users in db
    const filter:any=req.nextUrl.searchParams.get("filter") || ""
    

        console.log("1")
        
        const users=await client.user.findMany({
            where:
            {OR:[{userName:{contains:filter,
                mode:'insensitive'}}]
                
            }
            ,select:{
            userName:true,
            userEmail:true,
            userId:true
        }})
        console.log(users)
        return NextResponse.json(users)
   
        
   
} 