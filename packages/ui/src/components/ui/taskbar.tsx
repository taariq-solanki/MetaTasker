import { Task } from "./tasks";


export function Taskbar(){

    // const taskss:{taskname:string,status:string}[]=[{taskname:"1",status:"incomplete"},{taskname:"2",status:"complete"},
    // {taskname:"3",status:"incomplete"}]

    // setTimeout(function(){
    //     taskss[2].status="complete"
    // },2000)
    return <div className="p-1">
       <div><h1 className="p-3 bg-white text-2xl font-bold">Tasks</h1></div>
       <div className="grid grid-cols-3">
        <div>1</div>
        <div>2</div>
        <div>3</div>

       </div>
    </div>
}