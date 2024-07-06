"use client"

export function Appbar({userName}:any){
    return <div className=" border-black border sticky top-0 flex justify-between
     items-center bg-white p-2 pt-1 pl-7 pr-7 border-2 ">
        <div className="text-4xl font-bold	"><h1>MetaTASKER</h1></div>
        <div className="text-xl font-bold"> <button className="rounded-full pl-4 pr-4 min-w-full
         bg-slate-200 hover:ring hover:ring-slate-500 active:bg-white
         p-2" onClick={function(){

        }}>{userName[0].toUpperCase()}</button></div>
    </div>
}