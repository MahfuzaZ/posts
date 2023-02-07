import React from 'react'
import { themeContext } from '../../components/Context'
import { useContext } from 'react'
function Contact() {
  const {darkMode, setdarkMode} = useContext(themeContext)
  return (
    <div className={darkMode ? `dark` : `light`}>Contact</div>
  )
}

export default Contact