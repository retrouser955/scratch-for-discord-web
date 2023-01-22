import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Blockly from "blockly"
import FileSelector from "./components/File-Selector/FileSelector"
import { useCallback, useState } from "react"
import createBlocklyWorkspace from "./utils/createBlocklyWorkspace"
import toolbox from "./toolbox"
import "./index.css"

// development: unload localstorage on leave
window.onunload = () => {
  localStorage.clear()
}

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const storageData = localStorage.getItem("index")

  window.currentFile = "index"

  if(storageData == null) {
    localStorage.setItem("index", "{}")
    localStorage.setItem("ping", "{}")
    localStorage.setItem("avatar", "{}")
  }

  const cb = useCallback((element) => {
    if(element == null) return
    let currentJSON, X, Y, isToolboxHidden

    if(window.blocklyMain) {
      currentJSON = Blockly.serialization.workspaces.save(window.blocklyMain)
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

    if(currentJSON) {
      Blockly.serialization.workspaces.load(currentJSON, blocklyMainWorkspace)
      blocklyMainWorkspace.scroll(X, Y)
    }
    
    window.blocklyMain = blocklyMainWorkspace

    if(currentJSON)
      return blocklyMainWorkspace.getToolbox().setVisible(isToolboxHidden)
      
    if(localStorage.getItem('index')) {
      Blockly.serialization.workspaces.load(JSON.parse(localStorage.getItem("index")), blocklyMainWorkspace)
    }
  })

  return (
    <div className="h-screen w-screen flex">
      <Sidebar collapsed={[isCollapsed, setIsCollapsed]} />
      <Navbar />
      <div className={`bottom-0 right-0 bg-slate-900 ${isCollapsed ? "w-[97vw]" : "w-[83vw]"} h-[92vh] absolute`}>
        <FileSelector tabs={["index", "ping", "avatar"]} />
        <div className="w-full h-[95%] bg-neutral-900" ref={cb}></div>
      </div>
    </div>
  )
}

export default App
