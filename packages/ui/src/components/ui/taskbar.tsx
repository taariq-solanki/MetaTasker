"use client"
import { useEffect, useState } from "react";
import { Task } from "./tasks";
//import { WebSocket } from "ws";
import { useRecoilState } from "recoil";
import { taskArrayAtom } from "@repo/store/src/atoms/tasksDetail";
import {teamIdAtom} from "@repo/store/src/atoms/teamId"

export function Taskbar(){
    const [taskArray,setTaskArray]=useRecoilState(taskArrayAtom)
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [teamId,setTeamId]=useRecoilState(teamIdAtom)
    useEffect(()=>{
        async function run(){
            const newSocket = new WebSocket(`ws://localhost:8080/?teamId=${teamId}`);
            newSocket.onopen=(function(){
                console.log("connection done")
                newSocket.send("from client-connected")
            })

            newSocket.onmessage=((event)=>{
                //setTaskArray(event.data)
                //console.log(event)
                //console.log(event.data)
                //console.log("message:%s",data)
            })


            // newSocket.onmessage=(function(data:any){
            //     //const edata = JSON.(data.data);
            //     const messageString = data.data.toString('utf8')

            //     console.log('Message received: ', messageString);
            //     setTaskArray(messageString)
            // })
            newSocket.onclose = () => {
                console.log("WebSocket connection closed");
            };
            //setSocket(newSocket);
            
            setSocket(newSocket);
            
            
            return () => newSocket.close();   
              
        }
        
        run()
    },[])
    //console.log(taskArray)
    console.log(teamId)
    // const taskss:{taskname:string,status:string}[]=[{taskname:"1",status:"incomplete"},{taskname:"2",status:"complete"},
    // {taskname:"3",status:"incomplete"}]

    // setTimeout(function(){
    //     taskss[2].status="complete"
    // },2000)
    return <div className="p-1">
       <div><h1 className="p-3 bg-white text-2xl font-bold">Tasks</h1></div>
       <div className="grid grid-cols-3">
        <div> <div className="font-black text-2xl  m-1 bg-white pl-1">Tasks</div>
            
            {taskArray.map(function(i:any){
                if(i.taskStatus=="incomplete"){
                    return <Task key={i.taskId} taskDetail={i}></Task>
                }
                
            })}

        </div>
        <div><div className="font-black text-2xl m-1 bg-white pl-1">Tasks in progress</div>
            {taskArray.map(function(i:any){
                 if(i.taskStatus=="inprogress"){
                    return <Task key={i.taskId} taskDetail={i}></Task>
                }
            })}
            </div>
        <div><div className="font-black text-2xl  m-1 bg-white pl-1">Tasks completed</div>
            {taskArray.map(function(i:any){
                if(i.taskStatus=="completed"){
                    return <Task key={i.taskId} taskDetail={i}></Task>
                }
            })}
            </div>

       </div>
    </div>
}