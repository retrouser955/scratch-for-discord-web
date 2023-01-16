import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Blockly from "blockly"
import FileSelector from "./components/File-Selector/FileSelector"
import { useCallback, useState } from "react"
import createBlocklyWorkspace from "./utils/createBlocklyWorkspace"
import toolbox from "./toolbox"
import "./index.css"

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const cb = useCallback((element) => {
    if(element == null) return
    let currentXML, X, Y, isToolboxHidden

    if(window.blocklyMain) {
      currentXML = Blockly.Xml.workspaceToDom(window.blocklyMain)
      X = window.blocklyMain.scrollX
      Y = window.blocklyMain.scrollY
      isToolboxHidden = window.blocklyMain.toolbox_.isVisible_
    }

    element.innerHTML = ""

    const blocklyDiv = document.createElement("div")
    blocklyDiv.classList.add("h-full")
    blocklyDiv.classList.add("w-full")

    element.append(blocklyDiv)

    const blocklyMainWorkspace = createBlocklyWorkspace(blocklyDiv, toolbox)

    if(currentXML) {
      Blockly.Xml.domToWorkspace(currentXML, blocklyMainWorkspace)
      blocklyMainWorkspace.scroll(X, Y)
    }
    
    window.blocklyMain = blocklyMainWorkspace

    blocklyMainWorkspace.getToolbox().setVisible(isToolboxHidden ? true : false)
  })

  return (
    <div className="h-screen w-screen flex">
      <Sidebar collapsed={[isCollapsed, setIsCollapsed]} />
      <Navbar />
      <div className={`bottom-0 right-0 bg-slate-900 ${isCollapsed ? "w-[97vw]" : "w-[83vw]"} h-[92vh] absolute`}>
        <FileSelector />
        <div className="w-full h-[95%] bg-neutral-900" ref={cb}></div>
      </div>
    </div>
  )
}

export default App
