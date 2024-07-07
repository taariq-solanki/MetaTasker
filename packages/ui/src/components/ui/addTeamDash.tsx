"use client"


import { constSelector, useRecoilState } from "recoil";
import { searchUserAtom } from "@repo/store/src/atoms/searchUSer"
import { User } from "./user";
import { useEffect, useState } from "react";
import axios from "axios";
import { userArrayAtom } from "@repo/store/src/atoms/userarray";
import { meiAtom } from "@repo/store/src/atoms/me"
import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth"
import { useRouter } from 'next/navigation'


export function AddTeamDash() {
    const [searchUser, setSearchUser] = useRecoilState(searchUserAtom)
    const [user, setUser] = useState([])
    const [teamName, setTeamName] = useState("")
    const [me, setMe]: any = useRecoilState(meiAtom)
    const [removeUser, setRemoveUser]: any = useState()
    const [userArray, setUserArray]: any = useRecoilState(userArrayAtom)
    const [sendUsers, setSendUsers] = useState([])
    const router = useRouter()

    const session: any = useSession()

    const arra = [{ userName: "hello" }, { userName: "hello" }]

    useEffect(function () {
        async function res() {
            // const session:any=await getServerSession()
            const response: any = await axios({
                method: "GET",
                url: "/api/user/bulk?filter=" + searchUser
            })
            setUser(response.data)
            console.log(response.data)
            setUserArray([])
        }
        res()


    }, [searchUser])

    setMe(session.data?.user?.id)
    //console.log(typeof me)

    return <div>




        <div className="text-8xl flex justify-center bg-zinc-50 shadow-xl shadow-black font-medium"><h1>Create Team</h1></div>
        <div className="flex items-center justify-center p-1 bg-zinc-100">
            <input className="border-slate-500 shadow-md shadow-zinc-200 rounded-xl p-2 w-1/2"
                placeholder="SEARCH USERS" type="text" onChange={function (i) {
                    setSearchUser(i.target.value)
                }} />
            <input className="border-slate-500 m-1 shadow-md shadow-zinc-200 rounded-xl p-2 w-1/4"
                placeholder="Team Name" type="text" onChange={function (i) {
                    setTeamName(i.target.value)
                }} />

            <div><button className="bg-white p-2 shadow-md rounded-md
                 hover:bg-zinc-900 hover:text-white m-1 active:bg-zinc-700" onClick={
                    async function (i) {
                        const arraytemp: number[] = []
                        userArray.map(function (e: any) {
                            arraytemp.push(e.userId)
                        })
                        arraytemp.push(parseInt(me))

                        console.log(arraytemp)
                        // setSendUsers(arraytemp)

                        const tempObj = { teamName: teamName, users: arraytemp }
                        console.log(tempObj)

                        const team = await axios({
                            url: "/api/team/create",
                            method: "POST",
                            data: tempObj
                        })
                        if (team) {
                            console.log("done")
                            router.push('/dashboard')
                        }
                    }
                }>CREATE</button></div>
        </div>
        <div className="flex justify-center bg-zinc-50">
            <div className=" ml-20 w-1/2   m-1 pr-1 ">

                {user.map(function (i: any) {
                    return <User click={
                        function () {

                            setUserArray([...userArray, { userId: i.userId, userName: i.userName }])
                            console.log(userArray)
                        }
                    } userDetail={i} key={i.userId}></User>
                })}
            </div>
            <div className=" text-xl m-2 p-1 w-1/4  "> {userArray.map(function (i: any) {
                return <div onClick={function () {
                    setRemoveUser(i.userId)
                    setUserArray((l: any) => l.filter((item: any) => item.userId !== removeUser));


                }} className="flex shadow-md w-max justify-between pl-2"><div>{i.userName}</div> <button className="bg-zinc-900 text-white
                pl-2 pr-2 m-1 rounded-md">X</button></div>
            })}</div>
        </div>

    </div>
}