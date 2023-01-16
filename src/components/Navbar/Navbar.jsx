export default function Navbar() {
    return (
      <div className="top-0 left-0 bg-black w-screen h-[8vh] absolute flex items-center">
        <img src="https://scratch-for-discord.netlify.app/scratch.png" draggable={false} alt="s4d-logo" className="h-[6vh] px-5 select-none" />
        <p className="text-2xl text-white font-bold select-none">Scratch For Discord</p>
      </div>
    )
}
