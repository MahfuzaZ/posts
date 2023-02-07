import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import img from "../img/img2.png"
import sass from "../main.module.scss"
import { themeContext } from '../../components/Context'
import { useContext } from 'react'

function Info() {
    const {id} = useParams()
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(res => res.json())
          .then(data => setPost(data))
      }, [id])
  return (
    <div className={sass.info}>
         <div className={sass.left}>
            <img src={img} alt="" />
         </div>
         <div className={sass.right}>
            <h1>{`Id: ${post.id}`}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}/comments`}>Comments</Link>
         </div>
    </div>
  )
}

export default Info