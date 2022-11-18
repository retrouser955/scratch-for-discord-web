import Blockly from "blockly/core"

const themeObj = {
    base: Blockly.Themes.Classic,
    'componentStyles': {
        'workspaceBackgroundColour': '#404258',
        'toolboxBackgroundColour': '#474E68',
        'toolboxForegroundColour': '#fff',
        'flyoutBackgroundColour': '#50577A',
        'flyoutForegroundColour': '#ccc',
        'flyoutOpacity': .5,
        'scrollbarColour': '#797979',
        'insertionMarkerColour': '#fff',
        'insertionMarkerOpacity': 0.3,
        'scrollbarOpacity': 0.4,
        'cursorColour': '#d0d0d0',
        "toolboxOpacity": 0.6
    },
}

export default Blockly.Theme.defineTheme("discord-dark", themeObj)