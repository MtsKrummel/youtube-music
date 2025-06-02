import Main from './components/Main';
import NavBar from './components/NavBar';
import { useContext } from 'react';
import Footer from './components/Footer.tsx';
import { DrawerContext } from './context/drawer.tsx';
import SidebarOpen from './components/SidebarOpen.tsx';
import SidebarClose from './components/SidebarClose.tsx';

export default function App() {
  const {isExpanded} = useContext(DrawerContext)

  return (
    <>
      <NavBar />
      <div className='flex'>
        {
          isExpanded ? <SidebarOpen /> : <SidebarClose />
        }
      <Main />
      </div>
      <Footer />
    </>
  );
}
