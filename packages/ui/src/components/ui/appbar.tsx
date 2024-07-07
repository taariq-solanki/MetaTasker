"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@repo/ui/components/ui/dropdown-menu"
  import { signOut } from "next-auth/react";
import { Button } from "./button"
  

export function Appbar({userName,onclickappbar}:any){
    return <div className=" border-black border sticky top-0 flex justify-between
     items-center bg-white p-2 pt-1 pl-7 pr-7 border-2 ">
        <div className="text-4xl font-bold	"><h1>MetaTASKER</h1></div>
        <div > <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full p-2 pl-4 pr-4 
         bg-zinc-700 text-white " >{userName[0].toUpperCase()}</DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={function(){
            signOut()
          }}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </div>
}