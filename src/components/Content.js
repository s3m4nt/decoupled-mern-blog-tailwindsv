import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Content() {

    const [data, setData] = useState([])
    const [blog, setBlog] = useState({})

    const getBlogs = () =>{
        const blogStuff = axios.get('http://localhost:3001/blog')
        .then(res  =>{
        setData(res.data)
        console.log(data)
        })
        .catch(err=> {
        console.log(err)
        })
        }
        useEffect(() => {
        getBlogs()
    }, [])
      
const mapData = data.map((blog, idx) => {
    return <div key={idx} className="mx-12 pt-4">
        <hr className="border-4 my-5" />
    <button>
        <Link to={{
        pathname:"./single",
        state: blog
        }}>
        <span className="lg:text-4xl md:text-3xl sm:text-3xl font-black">{blog.name}</span>
        </Link>
        <Link className="mt-12 py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex intems-center animate-bounce">
            View BLOG.
            <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
        </Link>
    </button>

    </div>
})

const getBlogById = (id) => {
    setBlog(id)
}

    return (
    <>

        {mapData}

    </>

    )
}

export default Content
