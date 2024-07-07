"use client "
import { useEffect } from "react";
import { Teams } from "./teams";
import { useRecoilState } from "recoil";
import {teamsArrayAtom} from"@repo/store/src/atoms/teamDetail"
import axios from "axios";

import { useRouter } from 'next/navigation'

export function Teambar(){
    
    const router = useRouter()
    const [teamsArray,setTeamsArray]=useRecoilState<any>(teamsArrayAtom)
    useEffect(()=>
    
    {async function run(){
        const teamDetails:any =await axios({
            method:"GET",
            url:"/api/team/get"
        })
        console.log(teamDetails.data.Teams)
        setTeamsArray(teamDetails.data.Teams)
    }
    run()
    },[])
    
    return <div className="p-1 bg-zinc-100 h-full">
        <div className="flex justify-between mb-2 font-black border-4 border-black text-2xl shadow-md
             rounded-md   fixed sticky shadow-md top-16"><h1 className="p-3 w-full bg-white text-2xl font-bold">Teams</h1>
            <div>< button onClick={function(){
                router.push('/addTeam')
            }} 
            className="p-3 bg-slate-100 active:bg-slate-200 hover:bg-black hover:text-white
            bg-white text-2xl font-bold">+</button>
            
            </div>
        </div>
        <div>{teamsArray.map(function(i:any){
            console.log(i.teamName)
            return <Teams key={i.teamId} teamName={i.teamName} teamIdd={i.teamId}></Teams>
        })}</div>
        
    </div>
}