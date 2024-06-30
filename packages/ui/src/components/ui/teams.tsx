export function Teams({teamName}:any){
    
    return  <div>
        <div ><button className="active:bg-slate-200 hover:bg-blue-100 mt-1 text-xl font-normal grid justify-items-start p-3
         bg-white  rounded-md min-w-full text-xl">{teamName}</button></div>
    </div>
}