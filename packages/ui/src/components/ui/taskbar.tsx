"use client"
import { useEffect, useState } from "react";
import { Task } from "./tasks";
//import { WebSocket } from "ws";
import { useRecoilState } from "recoil";
import { taskArrayAtom } from "@repo/store/src/atoms/tasksDetail";
import { teamIdAtom } from "@repo/store/src/atoms/teamId"

enum statusS {
    incomplete = "incomplete",
    inprogress = "inprogress",
    completed = "completed"
}

export function Taskbar() {
    let [taskArray, setTaskArray]: any = useRecoilState(taskArrayAtom)
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [teamId, setTeamId] = useRecoilState(teamIdAtom)
    const [status, setStatus] = useState(statusS.incomplete)
    const [taskId, setTaskId] = useState(0)


    useEffect(() => {

        const newSocket = new WebSocket(`ws://localhost:8080/?teamId=${teamId}`);
        newSocket.onopen = (function () {
            console.log("connection done")
            //newSocket.send(JSON.stringify("from client-connected"))
        })

        newSocket.onmessage = (async (data: any) => {
            //setTaskArray(event.data)
            const newdata: any = await JSON.parse(data.data);
            //console.log(newdata,"auvwuvbwvubwvbwvw")

            //console.log(typeof newdata)
            //console.log(typeof JSON.parse(newdata),"blueee")
            setTaskArray(
                newdata
            );
            //console.log(taskArray,"after settask")




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
        setSocket(newSocket);
        return () => {
            newSocket.close();
        }

    }, [teamId])
    //console.log(taskArray)
    console.log(teamId)
    // const taskss:{taskname:string,status:string}[]=[{taskname:"1",status:"incomplete"},{taskname:"2",status:"complete"},
    // {taskname:"3",status:"incomplete"}]

    // setTimeout(function(){
    //     taskss[2].status="complete"
    // },2000)
    return <div className="p-1">
        {/* <div className="flex justify-between"><h1 className="p-3 w-full bg-white 
        text-2xl font-bold">Tasks</h1>
            <div>< button className="p-3 active:bg-slate-200 hover:bg-slate-300 
            bg-white text-2xl font-bold">+</button></div>
        </div> */}
        <div className="grid grid-cols-3">
            <div> <div className="font-black text-2xl  m-1 bg-white pl-1">Tasks</div>

                {taskArray.map(function (i: any) {
                    if (i.taskStatus == "incomplete") {
                        return <Task completeonclick={
                            function () {
                                setTaskId(i.taskId)
                                socket?.send(JSON.stringify({ taskId: i.taskId, status: "completed" }))

                            }
                        }
                            inprogressonclick={
                                function () {
                                    setTaskId(i.taskId)
                                    socket?.send(JSON.stringify({ taskId: i.taskId, status: "inprogress" }))

                                }
                            }
                            key={i.taskId} taskDetail={i}></Task>
                    }

                })}

            </div>
            <div><div className="font-black text-2xl m-1 bg-white pl-1">Tasks in progress</div>
                {taskArray.map(function (i: any) {
                    if (i.taskStatus == "inprogress") {
                        return <Task completeonclick={
                            async function () {
                                setTaskId(i.taskId)
                                socket?.send(JSON.stringify({ taskId: i.taskId, status: "completed" }))

                            }
                        }
                        incompleteonclick={
                            function () {
                                setTaskId(i.taskId)
                                socket?.send(JSON.stringify({ taskId: i.taskId, status: "incomplete" }))

                            }
                        }
                        key={i.taskId} taskDetail={i}></Task>
                    }
                })}
            </div>
            <div><div className="font-black text-2xl  m-1 bg-white pl-1">Tasks completed</div>
                {taskArray.map(function (i: any) {
                    if (i.taskStatus == "completed") {
                        return <Task incompleteonclick={
                            function () {
                                setTaskId(i.taskId)
                                socket?.send(JSON.stringify({ taskId: i.taskId, status: "incomplete" }))

                            }
                        }
                            inprogressonclick={
                                function () {
                                    setTaskId(i.taskId)
                                    socket?.send(JSON.stringify({ taskId: i.taskId, status: "inprogress" }))

                                }
                            }
                            key={i.taskId} taskDetail={i}></Task>
                    }
                })}
            </div>

        </div>
    </div>
}