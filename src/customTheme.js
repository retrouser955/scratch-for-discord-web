import Blockly from "blockly/core"

const themeObj = {
    base: Blockly.Themes.Classic,
    'componentStyles': {
        'workspaceBackgroundColour': '#6c8eb4',
        'toolboxBackgroundColour': '#505f77',
        'toolboxForegroundColour': '#fff',
        'flyoutBackgroundColour': '#505f80',
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