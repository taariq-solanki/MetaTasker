import { NextRequest, NextResponse } from "next/server";
import { client } from "../../../components/client";
//import { client } from "../../auth/[...nextauth]/route";

export async function POST(req:NextRequest){
    const data=await req.json()
    console.log(data)
    const dbData=await client.task.create({
        data:{
            teamId:data.teamId,
            taskTitle:data.taskTitle,
            taskDescription:data.taskDescription
        }
    })
    if(dbData){
        return NextResponse.json({msg:"done"},{status:200})
    }else{
        return NextResponse.json({msg:"some err occured"})
    }
    
}