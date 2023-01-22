import { AiFillFolder } from "react-icons/ai"

export default function Command() {
    return (
        <div className="flex justify-center cursor-pointer">
            <div className="w-full pl-3 font-bold flex items-center h-7 hover:shadow-lg hover:border-2 transition-all">
                <div className="h-[70%] mr-1">
                    <AiFillFolder className="h-full w-full" />
                </div>
                commands
            </div>
        </div>
    )
}
