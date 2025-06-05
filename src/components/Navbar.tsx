import { useContext } from 'react'

//Icons
import { Menu } from 'lucide-react'
import YoutubeIcon from '/icons/youtube-music.svg'

//Components
import { DrawerContext } from '../context/drawer'

function NavBar() {
  const {isExpanded, setIsExpanded} = useContext(DrawerContext)

  return (
    <header className='absolute flex-col p-8 text-white z-10'>
      {/* Logo y menú */}
      <div className='flex gap-4'>
        <button className='cursor-pointer' onClick={() => setIsExpanded(!isExpanded)}>
          <Menu />
        </button>

        <img src={YoutubeIcon} alt='Yotube Music Logo' />
      </div>

      {/* Buscador */}
      <div>

      </div>

      {/* Perfil */}
      <div>

      </div>
    </header>
  )
}

export default NavBar