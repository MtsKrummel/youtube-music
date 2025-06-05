import { ITEMS } from '../consts/Items'

function SidebarClose() {
  return (
    <div className='absolute text-white pl-4 pt-4 z-1 max-w-[100px] w-full'>
      <div className='relative'>
        <ul className="flex flex-col gap-y-6 mt-20">
          {
            ITEMS.map(({ icon, name }) => (
              <div className='flex flex-col items-center py-1 cursor-pointer hover:bg-white/20 rounded transition-all'>
                <img
                  src={`/icons/${icon}.svg`} 
                  alt="" 
                  height={24}
                  width={24}
                />
                <span>{name}</span>
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default SidebarClose