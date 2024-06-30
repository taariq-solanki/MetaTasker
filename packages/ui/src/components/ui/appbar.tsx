"use client"

export function Appbar({userName}:any){
    return <div className="flex justify-between items-center p-3 pl-7 pr-7 border-2 rounded-md">
        <div className="text-4xl font-bold	"><h1>MetaTASKER</h1></div>
        <div className="text-xl font-bold"> <button className="rounded-full pl-4 pr-4 min-w-full
         bg-slate-200 hover:ring hover:ring-slate-500 active:bg-white
         p-2" onClick={function(){

        }}>{userName[0].toUpperCase()}</button></div>
    </div>
}