import React from 'react'

export default function ToolboxUtils() {
    const [isToolboxHidden, setIsToolboxHidden] = React.useState(window.blocklyMain.toolbox_.isVisible_)
    let isFirstTime = true
    function HideToolbox() {
        setIsToolboxHidden(!isToolboxHidden)
        window.blocklyMain.toolbox_.setVisible(isFirstTime ? !isToolboxHidden : isToolboxHidden)
        if(isFirstTime) isFirstTime = false
    }

    return (
        <div className="w-full h-full pt-2">
            <div 
            className="w-[60%] h-7 cursor-pointer font-bold rounded-md select-none hover:border-2 hover:border-cyan-500 transition-all mx-auto bg-orange-600 flex items-center justify-center"
            onClick={HideToolbox}
            >Toggle Toolbox</div>
        </div>
    )
}
