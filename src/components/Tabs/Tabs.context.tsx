import React from "react"

export interface TabContextProps {
  activeId: string
  handTabClick: (activeId: string) => void
}

const TabContext = React.createContext<TabContextProps>(undefined as any)

export default TabContext
