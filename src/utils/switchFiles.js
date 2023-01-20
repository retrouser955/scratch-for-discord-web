import Blockly from "blockly"

const switchFiles = (key) => {
    const currentFile = window.currentFile
    const lastData = Blockly.serialization.workspaces.save(window.blocklyMain)

    const data = JSON.parse(localStorage.getItem(key))

    Blockly.serialization.workspaces.load(data, window.blocklyMain)

    localStorage.setItem(currentFile, JSON.stringify(lastData))

    window.currentFile = key
}

export default switchFiles