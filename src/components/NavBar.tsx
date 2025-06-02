import { useContext } from 'react'

//Icons
import { Menu } from 'lucide-react'
import YoutubeIcon from '/icons/youtube-music.svg'

//Components
import { DrawerContext } from '../context/drawer'

function NavBar() {
  const {isExpanded, setIsExpanded} = useContext(DrawerContext)

  return (
    <header className='absolute flex-col p-6 text-white z-10'>

      {/* drawer section */}
      <div className='flex gap-4 te'>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          <Menu />
        </button>

        <img src={YoutubeIcon} alt='Yotube Music Logo' />
      </div>

      {/* Search Section */}
      <div>

      </div>

      {/* Profile Section */}
      <div>

      </div>
    </header>
  )
}

export default NavBar