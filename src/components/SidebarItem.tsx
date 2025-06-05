function SidebarItem({ icon, name }) {
  return (
    <li className="relative flex items-center p-2 hover:bg-white/20 rounded transition-all">
      <a className={`flex p-2 gap-4`} href="/">
        <img
          src={`/icons/${icon}.svg`} 
          alt="" 
          height={24}
          width={24}
        />
        {name}
      </a>
    </li>
  )
}

export default SidebarItem