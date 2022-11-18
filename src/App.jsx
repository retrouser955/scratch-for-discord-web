import './App.css'
import Blockly from "blockly"
import { useCallback, useState } from "react"
import toolbox from './toolbox'
import createBlocklyWorkspace from './utils/createBlocklyWorkspace'
import SideNavIcon from "./components/SidebarIcon"
import SideNavIconSettings from "./components/DarkIcon"
import { IoLogoOctocat, IoLogoJavascript } from "react-icons/io"
import { Link } from "react-router-dom"

function App() {
  const [isDark, setIsDark] = useState(window.document.body.classList.contains("dark"))

  const callback = useCallback((div) => {
    if(div == null) return
    let currentXML, X, Y
    if(window.blocklyMain) {
      currentXML = Blockly.Xml.workspaceToDom(window.blocklyMain)
      X = window.blocklyMain.scrollX
      Y = window.blocklyMain.scrollY
    }
    div.innerHTML = ""
    const blocklyDiv = document.createElement("div")
    blocklyDiv.classList.add("h-full")
    blocklyDiv.classList.add("w-full")
    div.append(blocklyDiv)
    const blocklyMainWorkspace = createBlocklyWorkspace(blocklyDiv, toolbox, isDark)
    if(currentXML) {
      Blockly.Xml.domToWorkspace(currentXML, blocklyMainWorkspace)
      blocklyMainWorkspace.scroll(X, Y)
    }
    window.blocklyMain = blocklyMainWorkspace
  }, [isDark])
  return (
    <>
      <div className="h-screen w-screen flex">
        <div className="w-[5vw] h-full dark:bg-gray-700 transition-all bg-gray-300">
          <SideNavIcon icon={<IoLogoOctocat size="28" className="group-hover:text-white transition-all text-green-900" />} text="Scratch For Discord" />
          <Link to="/javascript">
            <SideNavIcon icon={<IoLogoJavascript size="28" className="group-hover:text-white transition-all text-green-900" />} text="Generate Javascript" />
          </Link>
          <div onClick={() => {
            setIsDark(!isDark)
            !window.document.body.classList.contains("dark") ? window.document.body.classList.add("dark") : window.document.body.classList.remove("dark")
          }}>
            <SideNavIconSettings />
          </div>
        </div>
        <div className="w-[95vw] h-full" ref={callback}></div>
      </div>
    </>
  )
}

export default App