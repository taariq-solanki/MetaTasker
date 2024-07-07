export function Task({incompleteonclick,inprogressonclick,completeonclick,taskDetail}:any){

    if(taskDetail.taskStatus=="incomplete"){
        return <div className="bg-white border border-zinc-400 p-4 m-1 rounded-md shadow-md">
        <div className="text-xl font-bold bg-zinc-50  p-1 shadow-inner">{taskDetail.taskTitle}</div>
        <div>Description:{taskDetail.taskDescription}</div>
        <div className="text-zinc-400 select-none">Status:{taskDetail.taskStatus}</div>
        <div className="flex justify-between ">
            {/* <button onClick={incompleteonclick} className="bg-slate-100 p-1 rounded-md active:bg-slate-400
         hover:bg-blue-200">Incomplete</button> */}
            <button onClick={inprogressonclick} className="bg-white border border-black m-1 p-1 w-full  rounded-md 
            active:bg-zinc-800 hover:bg-black hover:text-white">Start</button>
            <button  onClick={completeonclick} className="bg-white border border-black p-1 m-1 rounded-md 
            active:bg-zinc-800 hover:bg-black hover:text-white">Complete</button>
        </div>
        
    </div>
    }
    else if(taskDetail.taskStatus=="inprogress"){
        return <div className="bg-white border border-zinc-400 p-4 m-1 rounded-md shadow-md">
        <div className="text-xl font-bold bg-zinc-50  p-1 shadow-inner">{taskDetail.taskTitle}</div>
        <div>Description:{taskDetail.taskDescription}</div>
        <div className="text-zinc-400 select-none">Status:{taskDetail.taskStatus}</div>
        <div className="flex justify-between">
            <button onClick={incompleteonclick} className="bg-white border border-black m-1 p-1 w-full  rounded-md 
            active:bg-zinc-800 hover:bg-black hover:text-white">Stop</button>
            {/* <button onClick={inprogressonclick} className="bg-slate-100 p-1 rounded-md active:bg-slate-400
         hover:bg-blue-200">in progress</button> */}
            <button  onClick={completeonclick} className="bg-white border border-black p-1 m-1 rounded-md active:bg-zinc-800 hover:bg-black hover:text-white">Complete</button>
        </div>
        
    </div>
    }else if(taskDetail.taskStatus=="completed"){
        return <div className="bg-white border border-zinc-400 p-4 m-1 rounded-md shadow-md">
        <div className="text-xl font-bold bg-zinc-50  p-1 shadow-inner">{taskDetail.taskTitle}</div>
        <div>Description:{taskDetail.taskDescription}</div>
        <div className="text-zinc-400 select-none">Status:{taskDetail.taskStatus}</div>
        <div className="flex justify-between">
            <button onClick={incompleteonclick} className="bg-white border border-black m-1 p-1 w-full  rounded-md 
            active:bg-zinc-800 hover:bg-black hover:text-white">Stop</button>
            <button onClick={inprogressonclick} className="bg-white border border-black p-1  m-1 w-full rounded-md
             active:bg-zinc-800 hover:bg-black hover:text-white">Start</button>
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