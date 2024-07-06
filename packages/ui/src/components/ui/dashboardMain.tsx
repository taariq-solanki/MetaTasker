
"use client"
import { Taskbar } from "./taskbar";
import { Teambar } from "./teambar";

export function DashboardMain(){
    return <div>
        <div className="grid bg-zinc-50 grid-cols-5">
        <div className="col-span-1 border min-h-screen rounded-md"><Teambar></Teambar></div>
        <div className="col-span-4 border min-h-screen rounded-md"><Taskbar></Taskbar></div>

        </div>
        
    </div>
}