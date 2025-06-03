import { ITEMS } from '../consts/Items'

function SidebarClose() {
  return (
    <div className='absolute text-white pl-4 pt-4 '>
      <div className='relative max-w-[500px] w-full'>
        <ul className="flex flex-col gap-y-6 mt-20 max-w-[300px] w-full">
          {
            ITEMS.map(({ icon, name }) => (
              <div className='flex flex-col items-center'>
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