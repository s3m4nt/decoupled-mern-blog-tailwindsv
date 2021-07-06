import React from 'react'
import { useLocation } from 'react-router-dom'

function SingleBlog(props) {
    const location = useLocation()

    return (

        <div className="mx-10 h-auto bg-white min-h-full mb-10">
            <div className="singleHeadlineBold-tw">
                {location.state.name}
            </div>
            <div>
                {location.state.content}
            </div>
            <div className="graySm-tw">
                title: {location.state.title}
            </div>
            <div className="graySm-tw">
                _id: {location.state._id}
            </div>
        </div>

    )
}

export default SingleBlog
