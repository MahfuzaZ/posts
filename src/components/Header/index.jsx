import React from 'react'
import sass from "../layout.module.scss"
import logo from "../../pages/img/post.png"
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { themeContext } from '../Context'
function Header() {
  const {darkMode, setdarkMode} = useContext(themeContext)
  const change = ()=>{
       setdarkMode(!darkMode)
  }
  return (
    <div className={darkMode ? `dark ${sass.header}`  : ` ${sass.header}`}>
        <div className={darkMode ? `dark ${sass.head}`  : `${sass.head}`}>
        <div className={darkMode ? `dark ${sass.logo}`  : ` ${sass.logo}`}>
          <NavLink to={"/"}><img src={logo} alt="" /></NavLink>
        </div>
        <div className={darkMode ? `dark ${sass.menu}`  : `${sass.menu}`}>
             <ul className={darkMode ? `dark ${sass.ul}` : `${sass.ul}`}>
              <NavLink  className={darkMode ? `dark ${sass.a}` : `${sass.a}`} to={"/"}><li>Home</li></NavLink>
              <NavLink className={darkMode ? `dark ${sass.a}` : `${sass.a}`} to={"/about"}><li>About</li></NavLink>
              <NavLink className={darkMode ? `dark ${sass.a}` : `${sass.a}`} to={"/posts"}><li>Posts</li></NavLink>
              <NavLink className={darkMode ? `dark ${sass.a}` : `${sass.a}`} to={"/contact"}><li>Contact</li></NavLink>
              <div onClick={change} className={sass.icon}>
                <i class="fa-solid fa-moon"></i>
              </div>
             </ul>
        </div>
        </div>
    </div>
  )
}

export default Header