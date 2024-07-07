import { useRecoilState } from "recoil"
import { taskArrayAtom } from "@repo/store/src/atoms/tasksDetail";
import { teamIdAtom, teamNameAtom } from "@repo/store/src/atoms/teamId"
import axios from "axios";
const beUrl=`${process.env.BACKEND_URL}`

export function Teams({ teamIdd, teamName }: any) {
    const [teamId, setTeamId] = useRecoilState(teamIdAtom)
    const [teamNamee, setTeamName] = useRecoilState(teamNameAtom)
    const [taskArray, setTaskArray] = useRecoilState(taskArrayAtom)
    return <div>
        <div ><button onClick={async function () {
            setTeamId(parseInt(teamIdd))
            setTeamName(teamName)
            const taskDetail: any = await axios({
                method: "GET",
                url: `http://localhost:3000/api/task/get?teamId=${teamIdd}`
            })

            setTaskArray(taskDetail.data.tasks)
            console.log(taskDetail.data.tasks)

        }} className="active:bg-zinc-800 hover:bg-black hover:text-white
         focus:ring shadow-md focus:ring-black focus:ring-1
           mt-1 text-xl font-normal grid justify-items-start p-3
         bg-white rounded-sm min-w-full text-xl border-black border">{teamName}</button></div>
    </div>
}