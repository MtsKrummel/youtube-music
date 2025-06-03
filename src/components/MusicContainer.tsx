import React from 'react'

function MusicContainer({ children }: { children: React.ReactNode }) {
  return (
    <li>
      {children}
    </li>
  )
}

export default MusicContainer