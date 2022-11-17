import SideNavIcon from "./SidebarIcon"
import SideNavIconSettings from "./DarkIcon"
import React, { useEffect } from 'react'
import { IoLogoOctocat, IoLogoJavascript } from "react-icons/io"
import { Link } from "react-router-dom"
import { javascriptGenerator } from 'blockly/javascript';
import 'prismjs/themes/prism-tomorrow.css'
import * as Prism from 'prismjs'

export default function Javascript() {
    const [isDark, setIsDark] = React.useState(window.document.body.classList.contains("dark"))
    const [javascriptCode, setJavascriptCode] = React.useState(null)
    useEffect(() => {
        console.log(window.blocklyMain)
        setJavascriptCode(javascriptGenerator.workspaceToCode(window.blocklyMain))
    }, [])
    return (
        <div className="h-screen w-screen flex">
            <div className="w-[5vw] h-full dark:bg-gray-700 transition-all bg-gray-300">
                <SideNavIcon icon={<IoLogoOctocat size="28" className="group-hover:text-white transition-all text-green-600" />} text="Scratch For Discord" />
                <Link to={"/"}>
                    <SideNavIcon icon={<IoLogoJavascript size="28" className="group-hover:text-white transition-all text-green-600" />} text="Generate Javascript" />
                </Link>
                <div onClick={() => {
                  setIsDark(!isDark)
                  !window.document.body.classList.contains("dark") ? window.document.body.classList.add("dark") : window.document.body.classList.remove("dark")
                }}>
                <SideNavIconSettings />
                </div>
            </div>
            <div className="w-[95vw] h-full dark:bg-gray-900 bg-gray-400 flex justify-center items-center">
                {javascriptCode ? <div className="w-[85vw] h-[90%] bg-slate-300 dark:bg-gray-600 rounded-lg flex justify-center items-center">
                    <div className="w-[80vw] h-[89%]">
                        <pre data-example-id="customHtml" data-codepen-css-external="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" class="code">
                            <code className="lang-javascript hljs language-javascript" dangerouslySetInnerHTML={{ __html: Prism.highlight(javascriptCode, Prism.languages.javascript, 'javascript')}}></code>
                        </pre>
                    </div>
                </div> : 
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                      <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}