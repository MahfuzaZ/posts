import React from 'react'
import sass from "../main.module.scss"
import { useState, useEffect} from 'react'
import img1 from "../img/img2.png"
import { Link, NavLink } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import Info from '../Info'
import { useParams } from 'react-router-dom'
import { themeContext } from '../../components/Context'
import { useContext } from 'react'

function Posts() {
  const {darkMode, setdarkMode} = useContext(themeContext)
  const [post, setPost] = useState([])
  const{ id} = useParams()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  return (
    <div className={darkMode ? `dark ${sass.posts}` : `${sass.posts}`}>
        <ul className={sass.ul}>
          {post?.map((elem) => (
            <li  key={elem.id}><img src={img1} alt="" /><h3>{elem.title}</h3><Link to={`/posts/${elem.id}`}>Learn more</Link></li>
          ))}
        </ul>
    </div>
  )
}


export default Posts