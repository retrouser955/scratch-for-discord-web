import "./selector.css"

export default function FileSelector() {
    return (
        <div className="w-full h-[5%] bg-stone-900 flex justify-start items-center">
            <div className="items">
                <div className="h-full w-[60%]">Ping</div>
            </div>
            <div className="items">
                <div className="h-full w-[60%]">Avatar</div>
            </div>
            <div className="items">
                <div className="h-full w-[60%]">userInfo</div>
            </div>
        </div>
    )
}
