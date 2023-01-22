import { AiFillFileAdd } from "react-icons/ai"
import { useState } from "react"
import { CgFormatIndentDecrease } from "react-icons/cg"
import { SiJavascript } from "react-icons/si"
import User from "./User/User"
import Swal from "sweetalert2"
import ToolboxUtils from "./ToolboxUtils/ToolboxUtils"
import switchFiles from "../../utils/switchFiles"
import { useEffect } from "react"
import exportData from "./SidebarConstants/export"

const { Package, Command, Index, SidebarTabs } = exportData

export default function Sidebar({ collapsed }) {
  const [activeState, setActiveState] = useState(0)
  const [currentCommands, setCurrentCommands] = useState([])
  const [isCollapsed, setIsCollapsed] = collapsed

  useEffect(() => {
    const localStorageKeys = Object.keys(localStorage).filter((val) => val !== "index")
    setCurrentCommands(localStorageKeys.map((val) => {
      return <div className="flex justify-center cursor-pointer ml-3" onClick={() => switchFiles(val)} key={val}>
        <div className="w-full pl-3 font-bold flex items-center h-7 hover:shadow-lg hover:border-2 border-l-2 transition-all">
          <div className="h-[70%] mr-1">
            <SiJavascript className="h-full w-full bg-white rounded-sm text-yellow-600" />
          </div>
          {val}.js
        </div>
      </div>
    }))
  }, [])

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
                <SidebarTabs setActiveState={setActiveState} activeState={activeState} />
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
                    <Command />
                    {currentCommands ? currentCommands : ""}
                    <Index />
                    <div className="w-[90%] h-[1px] rounded-lg mx-auto bg-white my-1"></div>
                    <Package />
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
