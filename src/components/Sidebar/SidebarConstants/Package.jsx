import { SiJson } from "react-icons/si"

export default function Package() {
    return (
        <div className="flex justify-center cursor-pointer">
            <div className="w-full pl-3 font-bold flex items-center h-7 hover:shadow-lg hover:border-2 transition-all">
                <div className="h-[70%] mr-1">
                    <SiJson className="h-full w-full text-yellow-600" />
                </div>
                package.json
            </div>
        </div>
    )
}
