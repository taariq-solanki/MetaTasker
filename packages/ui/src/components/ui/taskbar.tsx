"use client"
import { useEffect, useState } from "react";
import { Task } from "./tasks";
//import { WebSocket } from "ws";
import { useRecoilState } from "recoil";
import { taskArrayAtom } from "@repo/store/src/atoms/tasksDetail";
import { teamIdAtom } from "@repo/store/src/atoms/teamId"
import axios from "axios";

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
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [reloader,setReloader]=useState(true)


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

    }, [teamId,reloader])
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
            <div> 
                <div className="font-black border-2 border-black text-2xl shadow-md
             rounded-md m-1 bg-white ">
                <div className="bg-red-500 rounded-2xl w-full h-1"></div>
                <div className="p-1">Tasks</div>
                </div>
                
                
                <div>
                    <div className="bg-white p-4 m-1 border border-black rounded-md border ">
                        <div className="flex justify-between m-1">
                            <div className="text-xl font-bold  
                             p-1 ">Title:  </div>
                            <input onChange={function(i){
                                setTaskTitle(i.target.value)
                            }} className="shadow-inner
                             p-1" type="text" placeholder="Todo" />
                        </div>
                        <div className="flex justify-between m-1">
                            <div className="text-xl font-bold  
                             p-1 ">Description:  </div>
                            <input onChange={function(i){
                                setTaskDescription(i.target.value)
                            }} className="shadow-inner  
                             p-1" type="text" placeholder="go to gym" />
                        </div>
                       
                        <div>    
                            <button onClick={async function(i){
                                const createdTask=await axios({
                                    url:"http://localhost:3000/api/task/create",
                                    data:{
                                        teamId:teamId,
                                        taskTitle:taskTitle,
                                        taskDescription:taskDescription
                                    },
                                    method:"POST"})
                                console.log(createdTask)
                                
                            }} className="bg-white border border-black  
                            m-1 p-1 w-full  rounded-md active:bg-slate-400
                                hover:bg-blue-200">Create Task</button>
                            
                        </div>
                    </div>
                </div>




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
            <div>
            <div className="font-black border-2  border-black text-2xl shadow-md
             rounded-md m-1 bg-white ">
                <div className="bg-yellow-300 rounded-full w-full h-1"></div>
                <div className="p-1 ">Task in Proggress</div>
                </div>

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
            <div>
            <div className="font-black border-2 border-black text-2xl shadow-md
             rounded-md m-1 bg-white ">
                <div className="bg-green-500 rounded-2xl w-full h-1"></div>
                <div className="p-1">Task Completed</div>
                </div>

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