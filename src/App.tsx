import { useContext } from 'react';

import Main from './components/Main';
import NavBar from './components/NavBar';
import { DrawerContext } from './context/drawer.tsx';
import SidebarOpen from './components/SidebarOpen.tsx';
import SidebarClose from './components/SidebarClose.tsx';
import PlayerBar from './components/PlayerBar.tsx';

export default function App() {
  const {isExpanded} = useContext(DrawerContext)

  return (
    <div className='app-container w-full text-white'>
      {/* Encabezado */}
      <NavBar />

      {/* Contenido */}
      <div className='flex'>
        {
          isExpanded ? <SidebarOpen /> : <SidebarClose />
        }
        <Main />
      </div>

      {/* Reproductor de música */}
      <PlayerBar />
      

      {/* fondo */}
      <div className='absolute w-full h-full top-0 left-0 -z-30'>
        <div className="ym-background-gradient absolute w-full h-full -z-20"></div>
        <div className="ym-background-black absolute w-full h-full -z-10"></div>
        <div className="ym-background-blur absolute w-full h-full -z-10"></div>
      </div>
    </div>
  );
}
