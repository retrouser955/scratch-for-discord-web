import { AiFillFolder, AiFillFileAdd } from "react-icons/ai"
import { BsFileEarmarkCodeFill } from "react-icons/bs"
import { BiUserCircle } from "react-icons/bi"
import { useState } from "react"
import { CgFormatIndentDecrease } from "react-icons/cg"
import { SiJson, SiJavascript } from "react-icons/si"
import User from "./User/User"
import Swal from "sweetalert2"
import ToolboxUtils from "./ToolboxUtils/ToolboxUtils"

export default function Sidebar({ collapsed }) {
  const [activeState, setActiveState] = useState(0)
  const [isCollapsed, setIsCollapsed] = collapsed

  return (
    <>
      {
        isCollapsed ?
          <div className="h-screen w-[3vw] bg-zinc-900 top-0 left-0 absolute flex justify-center items-center">
            <CgFormatIndentDecrease className="text-white rotate-180 cursor-pointer" onClick={() => setIsCollapsed(false)} size={"50%"} />
          </div> :
          <div className="h-screen w-[17vw] bg-[#0a0a0a] top-0 left-0 absolute flex">
            <div className="h-screen w-[3vw] bg-zinc-900 pt-[7vh]">
              <div>
                <div className="w-full mx-auto py-2 px-1">
                  <AiFillFolder
                    className={`text-white h-full w-[90%] block mx-auto cursor-pointer transition-all ${activeState === 0 ? "text-orange-500" : ""}`}
                    onClick={() => setActiveState(0)}
                  />
                </div>
                <div className="w-full mx-auto border-t-2 py-2 px-1 border-orange-900">
                  <BsFileEarmarkCodeFill
                    className={`text-white h-full w-[90%] block mx-auto cursor-pointer transition-all ${activeState === 1 ? "text-orange-500" : ""}`}
                    onClick={() => setActiveState(1)}
                  />
                </div>
                <div className="w-full mx-auto border-y-2 py-2 px-1 border-orange-900">
                  <BiUserCircle
                    className={`text-white h-full w-[90%] block mx-auto cursor-pointer transition-all ${activeState === 2 ? "text-orange-500" : ""}`}
                    onClick={() => setActiveState(2)}
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-[90%] transition-all text-white pt-[10vh]">
              <div className="flex">
                <CgFormatIndentDecrease className="text-white cursor-pointer" size={"13%"} onClick={() => setIsCollapsed(true)} />
                <p className="font-bold mx-3">Project</p>
                {
                  activeState == 0 ?
                    <AiFillFileAdd className="text-white cursor-pointer" onClick={() => {
                      Swal.fire({
                        title: "File Type",
                        confirmButtonText: "JavaScript",
                        denyButtonText: "JSON",
                        denyButtonColor: "#4287f5",
                        cancelButtonText: "Text",
                        showCancelButton: true,
                        showDenyButton: true,
                        text: "Select the type of file you want to create",
                        icon: "question"
                      })
                    }} size={"13%"} />
                    : ""
                }
              </div>
              {
                activeState === 0 ?
                  <>
                    <div className="flex justify-center cursor-pointer">
                      <div className="w-full pl-3 font-bold flex items-center h-7 hover:shadow-lg hover:border-2 transition-all">
                        <div className="h-[70%] mr-1">
                          <AiFillFolder className="h-full w-full" />
                        </div>
                        commands
                      </div>
                    </div>
                    <div className="flex justify-center cursor-pointer">
                      <div className="w-full pl-3 font-bold flex items-center h-7 hover:shadow-lg hover:border-2 transition-all">
                        <div className="h-[70%] mr-1">
                          <SiJavascript className="h-full w-full bg-white rounded-sm text-yellow-600" />
                        </div>
                        index.js
                      </div>
                    </div>
                    <div className="flex justify-center cursor-pointer">
                      <div className="w-full pl-3 font-bold flex items-center h-7 hover:shadow-lg hover:border-2 transition-all">
                        <div className="h-[70%] mr-1">
                          <SiJson className="h-full w-full" />
                        </div>
                        package.json
                      </div>
                    </div>
                  </>
                  :
                  activeState === 1 ?
                    <><ToolboxUtils /></>
                    : <><User /></>
              }
            </div>
          </div>
      }
    </>
  )
}
