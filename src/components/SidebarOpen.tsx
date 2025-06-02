import { ITEMS } from "../consts/Items"
import SidebarItem from "./SidebarItem"

function SidebarOpen() {
  return (
    <aside className="sidebar">
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

export default SidebarOpen