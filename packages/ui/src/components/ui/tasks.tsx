export function Task({incompleteonclick,inprogressonclick,completeonclick,taskDetail}:any){

    if(taskDetail.taskStatus=="incomplete"){
        return <div className="bg-white p-2 m-1 rounded-md shadow-md">
        <div className="text-xl font-bold">Title:  {taskDetail.taskTitle}{taskDetail.taskId}</div>
        <div>Description:{taskDetail.taskDescription}</div>
        <div>Status:{taskDetail.taskStatus}</div>
        <div className="flex justify-between ">
            {/* <button onClick={incompleteonclick} className="bg-slate-100 p-1 rounded-md active:bg-slate-400
         hover:bg-blue-200">Incomplete</button> */}
            <button onClick={inprogressonclick} className="bg-slate-100 m-1 p-1 w-full  rounded-md active:bg-slate-400
         hover:bg-blue-200">Start</button>
            <button  onClick={completeonclick} className="bg-slate-100 p-1 m-1 rounded-md active:bg-slate-400
         hover:bg-blue-200">Complete</button>
        </div>
        
    </div>
    }
    else if(taskDetail.taskStatus=="inprogress"){
        return <div className="bg-white p-2 m-1 rounded-md shadow-md">
        <div className="text-xl font-bold">Title:  {taskDetail.taskTitle}{taskDetail.taskId}</div>
        <div>Description:{taskDetail.taskDescription}</div>
        <div>Status:{taskDetail.taskStatus}</div>
        <div className="flex justify-between">
            <button onClick={incompleteonclick} className="bg-slate-100 p-1 w-full m-1 rounded-md active:bg-slate-400
         hover:bg-blue-200">Stop</button>
            {/* <button onClick={inprogressonclick} className="bg-slate-100 p-1 rounded-md active:bg-slate-400
         hover:bg-blue-200">in progress</button> */}
            <button  onClick={completeonclick} className="bg-slate-100 p-1 m-1 rounded-md active:bg-slate-400
         hover:bg-blue-200">Complete</button>
        </div>
        
    </div>
    }else if(taskDetail.taskStatus=="completed"){
        return <div className="bg-white p-2 m-1 rounded-md shadow-md">
        <div className="text-xl font-bold">Title:  {taskDetail.taskTitle}{taskDetail.taskId}</div>
        <div>Description:{taskDetail.taskDescription}</div>
        <div>Status:{taskDetail.taskStatus}</div>
        <div className="flex justify-between">
            <button onClick={incompleteonclick} className="bg-slate-100 p-1 m-1 w-full rounded-md active:bg-slate-400
         hover:bg-blue-200">Stop</button>
            <button onClick={inprogressonclick} className="bg-slate-100 p-1  m-1 w-full rounded-md active:bg-slate-400
         hover:bg-blue-200">Start</button>
            {/* <button  onClick={completeonclick} className="bg-slate-100 p-1 rounded-md active:bg-slate-400
         hover:bg-blue-200">complete</button> */}
        </div>
        
    </div>
    }





    // return <div className="bg-white p-2 m-1 rounded-md shadow-md">
    //     <div className="text-xl font-bold">Title:  {taskDetail.taskTitle}{taskDetail.taskId}</div>
    //     <div>Description:{taskDetail.taskDescription}</div>
    //     <div>Status:{taskDetail.taskStatus}</div>
    //     <div className="flex justify-between">
    //         <button onClick={incompleteonclick} className="bg-slate-100 p-1 rounded-md active:bg-slate-400
    //      hover:bg-blue-200">Incomplete</button>
    //         <button onClick={inprogressonclick} className="bg-slate-100 p-1 rounded-md active:bg-slate-400
    //      hover:bg-blue-200">in progress</button>
    //         <button  onClick={completeonclick} className="bg-slate-100 p-1 rounded-md active:bg-slate-400
    //      hover:bg-blue-200">complete</button>
    //     </div>
        
    // </div>
}