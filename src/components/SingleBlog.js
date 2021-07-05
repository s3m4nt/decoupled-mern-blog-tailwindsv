import React from 'react'
import { useLocation } from 'react-router-dom'

function SingleBlog(props) {
    const location = useLocation()

    return (
        <div className="mx-10 h-auto bg-white min-h-full mb-10">
            <div className="text-5xl font-black mb-5 pt-8">
                {location.state.name}
            </div>
            <div>
                {location.state.content}
            </div>
            <div className="text-right text-xs text-gray-400">
                title: {location.state.title}
            </div>
            <div className="text-right text-xs text-gray-400">
                _id: {location.state._id}
            </div>
            {/* <div>
            <nobr><span className="font-bold">Back to BLOG.</span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg></nobr>
            </div> */}
        </div>
    )

}

export default SingleBlog
