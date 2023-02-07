import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const themeContext = createContext()
function Context(props) {
    const [darkMode, setdarkMode] = useState(false)
    console.log(darkMode);
  return (
      <themeContext.Provider value={{darkMode, setdarkMode}}>
        {props.children}
      </themeContext.Provider>
  )
}

export default Context