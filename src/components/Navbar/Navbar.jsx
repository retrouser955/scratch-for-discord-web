import { BiPlay } from 'react-icons/bi'

export default function Navbar() {
  return (
    <div className="top-0 left-0 bg-black w-screen h-[8vh] absolute flex items-center">
      <div className="flex items-center">
        <img src="https://scratch-for-discord.netlify.app/scratch.png" draggable={false} alt="s4d-logo" className="h-[6vh] px-5 select-none" />
        <p className="text-2xl text-white font-bold select-none">Scratch For Discord</p>
      </div>
      <div className="text-white ml-auto mr-3 h-full flex items-center">
        <input className="h-[5vh] w-[10vw] rounded flex bg-stone-900 justify-center items-center hover:border-2 transition-all cursor-pointer p-2 mx-3" type="text" placeholder="Name your project" />
        <div
          className="h-[5vh] w-[5vh] rounded flex bg-stone-900 justify-center items-center hover:border-2 transition-all cursor-pointer"
          onClick={() => {}}
        >
          <BiPlay className="h-[95%] w-[95%] text-zinc-400" />
        </div>
      </div>
    </div>
  )
}
