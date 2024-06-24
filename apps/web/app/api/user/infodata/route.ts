// import { getServerSession } from "next-auth";
// import { authOption } from "../../../components/authoption";
// import { client } from "../route";
// import { NextResponse } from "next/server";
// import { use } from "react";

// export async function GET(){
//     const session=await getServerSession(authOption);
//     console.log()
//     if(session?.user?.email){
//         const user=await client.user.findFirst({
//             where:{userEmail:session.user?.email},
//             select:{
//                 userEmail:true,
//                 userId:true,
//                 userName:true
//             }
//         })

//         NextResponse.json(user)
        
//     }else{
//         NextResponse.json({msg:"codnt find email in session",status:400})



//     }
// }