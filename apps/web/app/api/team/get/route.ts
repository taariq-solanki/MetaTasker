import { copyFileSync } from "fs";

import { authOption, client } from "../../../components/client";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";



export async function GET(){
    const session =await getServerSession(authOption)

    if(session){
        const teams=await client.user.findFirst({
            where:{
                userId:parseInt(session.user.id)
            },
            select:{
                Teams:true
            }
        })
    
        //console.log(teams)
        return NextResponse.json(teams)
    }else{
        return NextResponse.json({msg:"not logined",status:400})
    }


    
}