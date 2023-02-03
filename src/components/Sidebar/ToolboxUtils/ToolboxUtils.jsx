import React from 'react'

export default function ToolboxUtils() {
    const [isToolboxHidden, setIsToolboxHidden] = React.useState(window.blocklyMain.toolbox_.isVisible_)
    const [isPrefix, setIsPrefix] = React.useState(localStorage.getItem("isPrefix") == true)

    let isFirstTime = true
    function HideToolbox() {
        setIsToolboxHidden(!isToolboxHidden)
        window.blocklyMain.toolbox_.setVisible(isFirstTime ? !isToolboxHidden : isToolboxHidden)
        if (isFirstTime) isFirstTime = false
    }

    return (
        <div className="w-full h-full pt-2">
            <div
                className="w-[60%] h-7 cursor-pointer font-bold rounded-md select-none hover:border-2 transition-all mx-auto bg-orange-600 flex items-center justify-center"
                onClick={HideToolbox}
            >Toggle Toolbox</div>
            <div className="w-full h-10 lg:max-w-sm mx-auto">
                <div className="flex justify-center">
                    <div className="mt-4 font-bold">
                        Prefix Command
                        <div className={`h-5 mt-2 w-12 ${isPrefix ? "" : "bg-zinc-500"} p-1 flex items-center duration-300 transition-all bg-white rounded-full cursor-pointer`} onClick={() => {
                            setIsPrefix(!isPrefix)

                            localStorage.setItem("isPrefix", isPrefix)
                        }}>
                            <div className={`${isPrefix ? "" : "translate-x-[220%]"} transition-all duration-300 h-3 w-3 rounded-full bg-black`}></div>
                        </div>
                    </div>
                </div>
                <div className={`flex w-full justify-center mt-3 ${isPrefix ? "opacity-0" : "opacity-100"} transition-all`}>
                    <label htmlFor="prefix" className="mx-4 font-bold">Prefix</label>
                    <input type="text" name="prefix" defaultValue={"!"} maxLength={3} className={`text-white w-[40%] bg-stone-700 rounded-md px-2 border-none`} onChange={(e) => {
                        localStorage.setItem("prefix" ,e.currentTarget.value)
                    }} />
                </div>
            </div>
        </div>
    )
}
