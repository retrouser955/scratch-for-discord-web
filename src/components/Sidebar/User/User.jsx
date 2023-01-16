import { useState } from "react"
import { GoMarkGithub } from "react-icons/go"
import { BiUnlink, BiLink } from "react-icons/bi"
import { SiDiscord } from "react-icons/si"

export default function User() {
    const [github, _setGithub] = useState({
        username: undefined,
        logo: undefined,
        url: undefined
    })
    const [discord, _setDiscord] = useState({
        username: undefined,
        logo: undefined,
        url: undefined
    })
    return (
        <>
            <div className="w-full h-full">
                <div className="w-[70%] h-[40%] bg-amber-900 mx-auto my-3 rounded-lg pt-3">
                    {
                        github.logo ?
                            <img src={github.logo} alt="github logo" className="block mx-auto w-[30%]" />
                            : <GoMarkGithub className="mx-auto" size={"30%"} />
                    }
                    <div className="text-white text-center mt-7 font-bold">
                        {
                            github.username ?
                                github.username :
                                <div className="bg-black rounded-md w-[50%] mx-auto cursor-pointer">
                                    Login
                                </div>
                        }
                    </div>
                    <div>
                        {
                            github.username ?
                                <BiLink className="block mx-auto mt-3" size={"20%"} />
                                :
                                <BiUnlink className="block mx-auto mt-3" size={"20%"} />
                        }
                    </div>
                </div>
                <div className="w-[70%] h-[40%] bg-amber-900 mx-auto my-3 rounded-lg">
                    {
                        discord.logo ?
                            <img src={discord.logo} alt="github logo" className="block mx-auto w-[30%]" />
                            : <SiDiscord className="mx-auto text-blue-600" size={"30%"} />
                    }
                    <div className="text-white text-center mt-7 font-bold">
                        {
                            discord.username ?
                                discord.username :
                                <div className="bg-black rounded-md w-[50%] mx-auto cursor-pointer">
                                    Login
                                </div>
                        }
                    </div>
                    <div>
                        {
                            discord.username ?
                                <BiLink className="block mx-auto mt-3" size={"20%"} />
                                :
                                <BiUnlink className="block mx-auto mt-3" size={"20%"} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
