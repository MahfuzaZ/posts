import React from 'react'
import sass from "../layout.module.scss"
import logo from "../../pages/img/post.png"
import { themeContext } from '../../components/Context'
import { useContext } from 'react'

function Footer() {
  const {darkMode, setdarkMode} = useContext(themeContext)
  return (
    <div className={darkMode ? `dark ${sass.footer}` : `${sass.footer}`}>
       <div className={sass.foot}>
            <ul>
              <li><img src={logo} alt="" />  </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti quas aliquam harum atque a, modi nesciunt doloremque pariatur temporibus illo. </li>
              <li>postcompany@gmail.com</li>
              <li>postcompany2@gmail.com</li>
            </ul>
            <ul>
              <li>About</li>
              <li>Home</li>
              <li>Posts</li>
              <li>Contact</li>
            </ul>
            <ul>
              <li>About</li>
              <li>Home</li>
              <li>Posts</li>
              <li>Contact</li>
            </ul>
            <ul>
              <li>8743294</li>
              <li>3244890</li>
              <li>2438938</li>
              <li>1238193</li>
            </ul>
       </div>
    </div>
  )
}

export default Footer