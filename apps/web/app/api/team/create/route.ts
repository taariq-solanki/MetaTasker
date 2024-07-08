import { NextRequest, NextResponse } from "next/server";
import { client } from "../../../components/client";

export async function POST(req:NextRequest,res:NextResponse){
    const team =await  req.json()
    //console.log(team)
    const teamUser=team.users || []
    const teamNameReq=team.teamName|| ""
    

    const teamDb=await client.team.create({
        data:{teamName:teamNameReq,
            users:{
                
                connect:teamUser.map(function (i:any){
                    return{
                        
                        userId:i
                    }
                })
            }

        }
    })

    if(teamDb){
        return NextResponse.json(teamDb)
    }
    return NextResponse.json({msg:"done"})
}