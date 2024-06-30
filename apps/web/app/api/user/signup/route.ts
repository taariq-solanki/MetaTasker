import { NextRequest, NextResponse } from "next/server";
import { client } from "../../auth/[...nextauth]/route";


export async function POST(req:NextRequest,res:NextResponse){
    const userDetails:{userName:string,
        userEmail:string,userPassword:string
    }=await req.json()

    //if user exist return err
    const userExist= await client.user.findFirst({
        where:{userEmail:userDetails.userEmail}
    })
    if(userExist){
        return NextResponse.json({msg:"user already exists"},{status:500})
    }
    else{
        const newUser= await client.user.create({
            data:{
                userEmail:userDetails.userEmail,
                userName:userDetails.userName,
                userPassword:userDetails.userPassword
            },
            select:{
                userEmail:true,
                userId:true,
                userName:true
            }
        })

        console.log(newUser)
        return NextResponse.json({msg:"user created"},{status:200})

    } 
}