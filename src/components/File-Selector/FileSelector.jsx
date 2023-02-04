import "./selector.css"
import { useState, useEffect } from "react"
import switchFiles from "../../utils/switchFiles"

export default function FileSelector({ tabs }) {
    const [tabEle, setTabEle] = useState([])

    useEffect(() => {
        const reactTabs = tabs.map((value) => {
            return <>
                <div className="items my-auto" onClick={() => {
                    switchFiles(value)
                }}>
                    <div className="h-full w-full flex">
                        {value}.js
                    </div>
                </div>
            </>
        })

        setTabEle(reactTabs)
    }, [])

    return (
        <div className="w-full h-[5%] overflow-x-auto bg-stone-900 flex">
            {tabEle}
        </div>
    )
}
