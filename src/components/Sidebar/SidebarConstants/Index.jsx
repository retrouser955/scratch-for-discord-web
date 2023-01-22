import { SiJavascript } from "react-icons/si"
import switchFiles from "../../../utils/switchFiles"

export default function Index() {
    return (
        <div className="flex justify-center cursor-pointer" onClick={() => {
            switchFiles("index")
        }}>
            <div className="w-full pl-3 font-bold flex items-center h-7 hover:shadow-lg hover:border-2 transition-all">
                <div className="h-[70%] mr-1">
                    <SiJavascript className="h-full w-full bg-white rounded-sm text-yellow-600" />
                </div>
                index.js
            </div>
        </div>
    )
}
