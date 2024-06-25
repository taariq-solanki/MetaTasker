import { getServerSession } from "next-auth";

import { NextRequest, NextResponse } from "next/server";
import { use } from "react";
import { authOption, client } from "../../auth/[...nextauth]/route";

export  async function GET(req:any,res:any){
    const session=await getServerSession(authOption)
    // console.log(session.user.email)
    // console.log(session?.user.id)
    if(session){//check if session engage find all users in db

        console.log("1")
        
        const users=await client.user.findMany({select:{
            userName:true
        }})
        console.log(users)
        return NextResponse.json(users)
    }else{
        console.log("2")

        return NextResponse.json({msg:"not signed in"})
    }
} 