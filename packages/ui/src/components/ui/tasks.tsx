export function Task({taskDetail}:any){
    return <div className="bg-white p-2 m-1 rounded-md shadow-md">
        <div className="text-xl font-bold">Title:  {taskDetail.taskTitle}</div>
        <div>Description:{taskDetail.taskDescription}</div>
        <div>Status:{taskDetail.taskStatus}</div>
        <div className="flex justify-between">
            <button className="bg-slate-100 p-1 rounded-md active:bg-slate-400
         hover:bg-blue-200">Incomplete</button>
            <button className="bg-slate-100 p-1 rounded-md active:bg-slate-400
         hover:bg-blue-200">in progress</button>
            <button className="bg-slate-100 p-1 rounded-md active:bg-slate-400
         hover:bg-blue-200">complete</button>
        </div>
        
    </div>
}