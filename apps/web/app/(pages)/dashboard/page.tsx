import { getServerSession } from "next-auth"
import { authOption } from "../../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { Appbar } from "@repo/ui/components/ui/appbar"
import {DashboardMain} from "@repo/ui/components/ui/dashboardMain"
export default async function(){



    const session:any=await getServerSession(authOption)
    
    return <div>
        <Appbar userName={session.user.name}></Appbar>
        <DashboardMain></DashboardMain> 

    </div>
}