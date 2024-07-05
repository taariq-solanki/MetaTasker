import { useRecoilState } from "recoil"
import {userArrayAtom} from "@repo/store/src/atoms/userarray"

export function User({userDetail,click}:any){
    //const [userArray,setUserArray]=useRecoilState(userArrayAtom)
    return <div className="flex justify-between  bg-white shadow-md mt-1 p-2 w-full text-xl ">
        <div>{userDetail.userName}</div>
        <div><button onClick={click} className="bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-500 focus:ring 
        text-white pl-4 pr-4 rounded-md font-bold">+</button></div>
    </div>

}