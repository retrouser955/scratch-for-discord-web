import { useState, useRef } from "react"
import { GoMarkGithub } from "react-icons/go"
import { BiUnlink, BiLink } from "react-icons/bi"
import { SiDiscord } from "react-icons/si"
import Swal from "sweetalert2"
import axios from "axios"

export default function User() {
    const discordId = useRef(null)
    const token = useRef(null)

    const [github, _setGithub] = useState({
        username: undefined,
        logo: undefined,
        url: undefined
    })
    const [discord, setDiscord] = useState({
        username: undefined,
        logo: undefined,
        url: undefined
    })
    return (
        <>
            <div className="w-full h-full">
                <div className="w-[70%] h-[40%] bg-zinc-700 mx-auto my-3 rounded-lg pt-3">
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
                <div className={`w-[70%] h-[40%] bg-zinc-700 mx-auto my-3 rounded-lg ${discord.logo ? "pt-10" : ""}`}>
                    {
                        discord.logo ?
                            <img src={discord.logo} alt="github logo" className="block mx-auto w-[30%] rounded-full" />
                            : <SiDiscord className="mx-auto text-blue-600" size={"30%"} />
                    }
                    <div className="text-white text-center mt-7 font-bold">
                        {
                            discord.username ?
                                discord.username :
                                <div className="bg-black rounded-md w-[50%] mx-auto cursor-pointer" onClick={() => {
                                    Swal.fire({
                                        input: "text",
                                        title: "Enter your bot ID",
                                        inputAttributes: {
                                            autocapitalize: 'off'
                                        },
                                        showCancelButton: true,
                                        confirmButtonText: "Enter",
                                        showLoaderOnConfirm: true,
                                        preConfirm: (login) => {
                                            discordId.current = login
                                            Swal.fire({
                                                input: "text",
                                                title: "Enter your bot Token. (This is not saved)",
                                                inputAttributes: {
                                                    autocapitalize: 'off'
                                                },
                                                showCancelButton: true,
                                                confirmButtonText: "Enter",
                                                showLoaderOnConfirm: true,
                                                preConfirm: async (token) => {
                                                    const data = await axios.get(`https://shy-tan-hare-gown.cyclic.app/user/${discordId.current}`, {
                                                        headers: {
                                                            "Content-Type": "Application/json",
                                                            "Authorization": token
                                                        }
                                                    })

                                                    token.current

                                                    return data.data
                                                }
                                            }).then((data) => {
                                                setDiscord({
                                                    username: `${data.value.username}#${data.value.discriminator}`,
                                                    logo: data.value.avatar ? `https://cdn.discordapp.com/avatars/${discordId.current}/${data.value.avatar}` : "",
                                                    url: undefined
                                                })
                                                
                                                localStorage.setItem("token", token.current)

                                                token.current = undefined
                                            })
                                        },
                                    })
                                }}>
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
