import React from 'react'
import ImageOne from '../images/egg1.jpg'
import ImageTwo from '../images/egg2.jpg'

function Content() {
    return (
    <>
    <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
    <img src={ImageOne} className="h-full rounded mb-20" alt="Some Image"/>
        <div className="flex flex-col justify-center items-center"> 
            <h2 className="text-2xl mb-2">Egg Muffins</h2>
            <p className="mb-2">Crispy, nutritious and delicious</p>
            <span>$16</span>
        </div>
    </div>
    <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
    <img src={ImageTwo} className="h-full rounded mb-20" alt="Some Image"/>
        <div className="flex flex-col justify-center items-center"> 
            <h2 className="text-2xl mb-2">Eggs and more eggs</h2>
            <p className="mb-2">The best eggs yet!</p>
            <span>$11</span>
        </div>
    </div>
    </>

    )
}

export default Content
