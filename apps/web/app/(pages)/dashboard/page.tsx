import { getServerSession } from "next-auth"
import { authOption } from "../../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { Appbar } from "@repo/ui/components/ui/appbar"
import {DashboardMain} from "@repo/ui/components/ui/dashboardMain"
export default function(){



    const session=getServerSession(authOption)
    
    return <div>
        <Appbar userName={"shaan"}></Appbar>
        <DashboardMain></DashboardMain>

    </div>
}