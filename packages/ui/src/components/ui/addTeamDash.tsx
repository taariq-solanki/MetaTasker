"use client"


import { constSelector, useRecoilState } from "recoil";
import { searchUserAtom } from "@repo/store/src/atoms/searchUSer"
import { User } from "./user";
import { useEffect, useState } from "react";
import axios from "axios";
export function AddTeamDash() {
    const [searchUser, setSearchUser] = useRecoilState(searchUserAtom)
    const [user,setUser]=useState([])
    const arra = [{ userName: "hello" }, { userName: "hello" }]

    useEffect(function(){
        async function res(){
         const response=await axios({
             method:"GET",
             url:"http://localhost:3000/api/user/bulk?filter="+searchUser
         })
         setUser(response.data)
         console.log(response.data)

        }
        res()
        
     },[searchUser])
    return <div>




        <div className="text-8xl flex justify-center bg-zinc-50 font-medium"><h1>Create Team</h1></div>
        <div className="flex items-center justify-center p-1 bg-zinc-100">
            <input className="border-slate-500 bg-zinc-200 rounded-xl p-2 w-3/4"
                placeholder="SEARCH USERS" type="text" onChange={function (i) {
                    setSearchUser(i.target.value)
                }} /></div>
        <div className="flex justify-around">
            <div className="w-3/4">

                {user.map(function (i:any) {
                    return <User  userDetail={i } key={i.userId}></User>
                })}
            </div>
            <div className="bg-black w-1/4"> jdddh</div>
        </div>

    </div>
}