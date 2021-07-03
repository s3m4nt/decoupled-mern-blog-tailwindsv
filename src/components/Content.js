import axios from 'axios'
import React from 'react'
import SingleBlog from './SingleBlog'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Content() {

    const [data, setData] = useState([])
    const [blog, setBlog] = useState({})

    const getBlogs = () =>{
        const blogStuff = axios.get('http://localhost:3001/blog')
        .then(res  =>{
    // console.log(res)
    setData(res.data)
console.log(data)
        }).catch(err=> {
          console.log(err)
        })
      }
      useEffect(() => {
        getBlogs()
      }, [])
const mapData = data.map(blog => {
    return <div>
        <h1>{blog.name}</h1>
        <h1>{blog.title}</h1>
        <p>
            {blog.content}
        </p>
        <p>
        <button onClick={()=> getBlogs()}>CLick</button>
        </p>
    </div>
})

const getBlogById = (id) => {
    // const oneBlog = axios.get(`http://localhost:3001/blog/${id}`)
    // .then()
    setBlog(id)
    
}

let thisBlog = blog.map((b, id)=>{
    return (
        <SingleBlog key={id} 
            b = {b}
            getBlogById = {getBlogById}
        />
    )
})
 



    return (
    <>

{mapData}

        <div className="h-auto bg-white min-h-full flex flex-col items-center border-b-4 border-t-4">
            <h1 className="text-5xl font-black mb-5 pt-8">TITLE OF SOMETHING</h1>
            <p className="ml-25 mr-25">





            </p>
            <div className="mt-12">
                        <Link className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex intems-center animate-bounce">
            View BLOG.
            <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
            </Link>
            <hr className="mt-8 divide-x-0" />
            </div>
        </div>
        <div className="h-auto bg-white min-h-full flex flex-col items-center">
            <h1 className="text-5xl font-black mb-5 pt-8">NEW POST</h1>
            <p className="ml-25 mr-25">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    </>

    )
}

export default Content
