import { Appbar } from "@repo/ui/components/ui/appbar";
import { authOption } from "../../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import {AddTeamDash} from "@repo/ui/components/ui/addTeamDash"

export default async function(){
    const session:any=await getServerSession(authOption)
    return <div>
        <div><Appbar userName={session.user.name}></Appbar></div>
        <div><AddTeamDash></AddTeamDash></div>
    </div>
   
}