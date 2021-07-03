import React from 'react'
import {useLocation} from 'react-router-dom'

function SingleBlog(props) {
    const location = useLocation()

    return (
<div>
    Name: {location.state.name}
</div>
    )

}

export default SingleBlog
