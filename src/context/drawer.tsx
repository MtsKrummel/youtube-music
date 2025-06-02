import { createContext, useState } from "react";

export const DrawerContext = createContext({
  
})

export function DrawerProvider ({ children }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <DrawerContext.Provider value={{
      isExpanded,
      setIsExpanded
    }}>
      {children}
    </DrawerContext.Provider>
  )
}
