import "../App.css"

const SideNavIcon = ({ icon, text }) => {
    return (
        <div className="sidebar-icon group my-2">
            <div>
                {icon}
            </div>
            <span className="absolute w-auto p-2 m-2 min-w-max left-[70px] rounded-md dark:bg-gray-700 dark:text-white bg-gray-300 scale-0 group-hover:scale-100 transition-all origin-left">
                <p>{text}</p>
            </span>
        </div>
    )
}
export default SideNavIcon