import React from 'react'
import Sidebar from './SidebarOpen'

function Drawer() {
    const [isExpanded, setIsExpanded] = useState(false)
  return (
    <>
    {
      isExpanded && <Sidebar />
    }
    </>
  )
}

export default Drawer