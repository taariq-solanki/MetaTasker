import { NextRequest, NextResponse } from "next/server";
import { client } from "../../../components/client";



export async function GET(req:NextRequest){
    const teamId:any=req.nextUrl.searchParams.get('teamId')
    const tasks=await client.team.findFirst({
        where:{teamId:parseInt(teamId)},
        select:{
            tasks:true
        }
    })
    if(tasks){
        return NextResponse.json(tasks)
    }else{
        return NextResponse.json({msg:"error"},{status:400})
    }
}