import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
export const client=new PrismaClient()


export async function POST(req:any,res:NextResponse){
    console.log("4")
    
     const body:{email:string,name:string,password:string} = await req.json();
     console.log(body);

    // const browserUser= await req.body
    // console.log(req.body.credentials)

   
    const user=await client.user.findFirst({   //db call to find if user exists
        where:{ userEmail:body.email

        },
        select:{
            userName:true,
            userId:true,
            userEmail:true,
            userPassword:true
        }
    })

    //check if email and passsword matches
    let userValid=false
    if(body.email ==user?.userEmail && body.password==user?.userPassword){
        userValid=true
    }

    // console.log(userValid)
    // console.log(body.email,user?.userEmail)


    if(userValid){
        return NextResponse.json({msg:"done",status:200})
    }
    else{
        return NextResponse.json({error:"db not found",status:500})
    }



   
}