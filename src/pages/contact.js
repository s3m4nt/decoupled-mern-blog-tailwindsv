import React from 'react'
import {Button} from 'react'

function Contact() {

    const sendMail = () => {
        const mailto: string =
          "mailto:mail@gmail.com?subject=Test subject&body=Body content";
        window.location.href = mailto;
      }

    return (
        <>
            
            <div className="flex justify-center items-top">
                <h1 className="headlineBlog-tw">CONTACT.</h1>
            </div>
            <div className="text-center mb-14">
<a href="mailto:brianyoungdev@protonmail.com">brianyoungdev@protonmail.com</a>
            </div>
            
        </>
    )
}

export default Contact
