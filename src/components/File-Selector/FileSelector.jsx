import "./selector.css"
import { useState, useEffect } from "react"
import switchFiles from "../../utils/switchFiles"

export default function FileSelector({ tabs }) {
    const [tabEle, setTabEle] = useState([])

    useEffect(() => {
        const reactTabs = tabs.map((value) => {
            return <>
                <div className="items" onClick={() => {
                    switchFiles(value)
                }}>
                    <div className="h-full w-[60%]">{value}</div>
                </div>
            </>
        })

        setTabEle(reactTabs)
    }, [])

    return (
        <div className="w-full h-[5%] bg-stone-900 flex justify-start items-center">
            {tabEle}
        </div>
    )
}
