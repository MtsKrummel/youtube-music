import { ITEMS } from "../consts/Items"
import SidebarItem from "./SidebarItem"

function Sidebar() {
  return (
    <aside className="relative bg-black text-white p-4 hidden md:block h-screen max-w-[200px] w-full transition-all ">
      <nav className="mt-16">
        <div>
          <ul className="flex flex-col gap-y-4">
            {
              ITEMS.map(({ icon, name }) => (
                <SidebarItem icon={icon} name={name}/>
              ))
            }
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar