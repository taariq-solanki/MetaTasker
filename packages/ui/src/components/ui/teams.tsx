import { useRecoilState } from "recoil"
import { taskArrayAtom } from "@repo/store/src/atoms/tasksDetail";
import { teamIdAtom } from "@repo/store/src/atoms/teamId"
import axios from "axios";

export function Teams({ teamIdd, teamName }: any) {
    const [teamId, setTeamId] = useRecoilState(teamIdAtom)
    const [taskArray, setTaskArray] = useRecoilState(taskArrayAtom)
    return <div>
        <div ><button onClick={async function () {
            setTeamId(teamIdd)
            const taskDetail: any = await axios({
                method: "GET",
                url: `http://localhost:3000/api/task/get?teamId=${teamIdd}`
            })

            setTaskArray(taskDetail.data.tasks)
            console.log(taskDetail.data.tasks)

        }} className="active:bg-slate-200 focus:ring focus:ring-black focus:ring-1
         hover:bg-blue-100 mt-1 text-xl font-normal grid justify-items-start p-3
         bg-white  rounded-md min-w-full text-xl">{teamName}{teamIdd}</button></div>
    </div>
}