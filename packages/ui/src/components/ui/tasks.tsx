export function Task({incompleteonclick,inprogressonclick,completeonclick,taskDetail}:any){
    return <div className="bg-white p-2 m-1 rounded-md shadow-md">
        <div className="text-xl font-bold">Title:  {taskDetail.taskTitle}{taskDetail.taskId}</div>
        <div>Description:{taskDetail.taskDescription}</div>
        <div>Status:{taskDetail.taskStatus}</div>
        <div className="flex justify-between">
            <button onClick={incompleteonclick} className="bg-slate-100 p-1 rounded-md active:bg-slate-400
         hover:bg-blue-200">Incomplete</button>
            <button onClick={inprogressonclick} className="bg-slate-100 p-1 rounded-md active:bg-slate-400
         hover:bg-blue-200">in progress</button>
            <button  onClick={completeonclick} className="bg-slate-100 p-1 rounded-md active:bg-slate-400
         hover:bg-blue-200">complete</button>
        </div>
        
    </div>
}