import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { themeContext } from '../../components/Context'
import { useContext } from 'react'

function Comments() {
  const {darkMode, setdarkMode} = useContext(themeContext)
    const [comment, setComment] = useState([])
    const {comments} = useParams()
    console.log(comment)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
         .then(res => res.json())
         .then(data => console.log(data))
    })
  return (
    <div className={darkMode ? `dark` : `light`}>
        {comment.map(elem => (
            <div className="comment">
                <h1>{elem.name}</h1>
            </div>
        ))}
    </div>
  )
}

export default Comments