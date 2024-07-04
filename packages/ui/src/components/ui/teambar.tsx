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
            url:"http://localhost:3000/api/team/get"
        })
        console.log(teamDetails.data.Teams)
        setTeamsArray(teamDetails.data.Teams)
    }
    run()
    },[])
    
    return <div className="p-1">
        <div className="flex justify-between"><h1 className="p-3 w-full bg-white text-2xl font-bold">Teams</h1>
            <div>< button onClick={function(){
                router.push('/addTeam')
            }} 
            className="p-3 bg-slate-100 active:bg-slate-200 hover:bg-slate-300 
            bg-white text-2xl font-bold">+</button>
            
            </div>
        </div>
        {teamsArray.map(function(i:any){
            console.log(i.teamName)
            return <Teams key={i.teamId} teamName={i.teamName} teamIdd={i.teamId}></Teams>
        })}
    </div>
}