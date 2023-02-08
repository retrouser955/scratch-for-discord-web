import "./selector.css"
import { useState, useEffect } from "react"
import switchFiles from "../../utils/switchFiles"
import { AiFillCloseCircle } from "react-icons/ai"

export default function FileSelector({ tabs }) {
    const [tabEle, setTabEle] = useState([])

    useEffect(() => {
        const reactTabs = tabs.map((value, i) => {
            return <>
                <div className="items border-r-2 border-stone-900 bg-stone-700" onClick={() => {
                    switchFiles(value)
                }}>
                    <div className="h-full overflow-hidden items-center flex w-[85%]">
                        {value}.js
                    </div>
                    <div className="w-[15%] flex justify-center items-center h-full">
                        <AiFillCloseCircle onClick={() => {
                            tabEle.splice(i, 1)
                            setTabEle(tabEle)
                        }} />
                    </div>
                </div>
            </>
        })

        setTabEle(reactTabs)
    }, [])

    return (
        <div className="w-full h-[5%] border-b-[1px] overflow-x-auto bg-stone-900 flex">
            {tabEle}
        </div>
    )
}
