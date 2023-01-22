import React from 'react'
import { AiFillFolder } from 'react-icons/ai'
import { BsFileEarmarkCodeFill } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'

export default function SidebarTabs({ setActiveState, activeState }) {
    return (
        <>
            <div className="w-full mx-auto py-2 px-1">
                <AiFillFolder
                    className={`text-white h-full w-[90%] block mx-auto cursor-pointer transition-all ${activeState === 0 ? "text-orange-500" : ""}`}
                    onClick={() => setActiveState(0)}
                />
            </div>
            <div className="w-full mx-auto border-t-2 py-2 px-1 border-orange-900">
                <BsFileEarmarkCodeFill
                    className={`text-white h-full w-[90%] block mx-auto cursor-pointer transition-all ${activeState === 1 ? "text-orange-500" : ""}`}
                    onClick={() => setActiveState(1)}
                />
            </div>
            <div className="w-full mx-auto border-y-2 py-2 px-1 border-orange-900">
                <BiUserCircle
                    className={`text-white h-full w-[90%] block mx-auto cursor-pointer transition-all ${activeState === 2 ? "text-orange-500" : ""}`}
                    onClick={() => setActiveState(2)}
                />
            </div>
        </>
    )
}
