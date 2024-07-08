import { Appbar } from "@repo/ui/components/ui/appbar";

import { getServerSession } from "next-auth";
import {AddTeamDash} from "@repo/ui/components/ui/addTeamDash"
import { authOption } from "../../components/client";

export default async function(){
    const session:any=await getServerSession(authOption)
    return <div>
        <div><Appbar userName={session.user.name}></Appbar></div>
        <div><AddTeamDash></AddTeamDash></div>
    </div>
   
}