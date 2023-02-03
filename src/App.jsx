import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Blockly from "blockly"
import FileSelector from "./components/File-Selector/FileSelector"
import { useCallback, useState } from "react"
import createBlocklyWorkspace from "./utils/createBlocklyWorkspace"
import toolbox from "./toolbox"
import "./index.css"

// load the blocks

import "./blockly/blocks/discord/base/index"

// development: unload localstorage on leave
window.onunload = () => {
  localStorage.clear()
}

console.log(
  "%cSTOP!!!!",
  "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
)

console.log("You are now viewing the developer tools! This is a section built for website developers. If someone told you to paste something in here, we recommand you to not do that as it may expose sensitive information. If you do not know what you are doing, we recommand you to close this immediately. If you do know what you are doing, join our Discord server https://discord.gg/3ufAFFw9xR and contribute to our work!")

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [commands, setCommands] = useState(Object.keys(localStorage).filter(val => typeof val != 'function' && val != "token"))

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
    blocklyMainWorkspace.addChangeListener(Blockly.Events.disableOrphans)
    window.blocklyMain = blocklyMainWorkspace

    if(currentJSON)
      return blocklyMainWorkspace.getToolbox().setVisible(isToolboxHidden)
      
    if(localStorage.getItem('index')) {
      Blockly.serialization.workspaces.load(JSON.parse(localStorage.getItem("index")), blocklyMainWorkspace)
    }
  })

  return (
    <div className="h-screen w-screen flex">
      <Sidebar collapsed={[isCollapsed, setIsCollapsed]} cmds={[commands, setCommands]} />
      <Navbar />
      <div className={`bottom-0 right-0 bg-slate-900 ${isCollapsed ? "w-[97vw]" : "w-[83vw]"} h-[92vh] absolute`}>
        <FileSelector tabs={commands} />
        <div className="w-full h-[95%] bg-neutral-900" ref={cb}></div>
      </div>
    </div>
  )
}

export default App
