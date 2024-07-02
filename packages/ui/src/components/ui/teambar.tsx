"use client "
import { useEffect } from "react";
import { Teams } from "./teams";
import { useRecoilState } from "recoil";
import {teamsArrayAtom} from"@repo/store/src/atoms/teamDetail"
import axios from "axios";



export function Teambar(){
    
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
        <div><h1 className="p-3 bg-white text-2xl font-bold">Teams</h1></div>
        {teamsArray.map(function(i:any){
            console.log(i.teamName)
            return <Teams key={i.teamId} teamName={i.teamName} teamIdd={i.teamId}></Teams>
        })}
    </div>
}