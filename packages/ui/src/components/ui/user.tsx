import { useRecoilState } from "recoil"
import {userArrayAtom} from "@repo/store/src/atoms/userarray"

export function User({userDetail}:any){
    const [userArray,setUserArray]=useRecoilState(userArrayAtom)
    return <div className="flex justify-around w-full text-xl">
        <div>{userDetail.userName}</div>
        <div><button>+</button></div>
    </div>

}