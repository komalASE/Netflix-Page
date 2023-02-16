import React, { useState } from 'react'
import '../components/Page.css'

const Page = (props) => {

    const [text, setText] = useState("watch now")

    const handleChange = () => {
        setText("abhi to nhi ho sakta hai");
    }

    return (
        <>
            <div className='container'>
                <div className='card'>
                    <div className='img-box'>
                        <img alt='' src={props.image} />
                    </div>
                    <div className='card-body'>
                        <h4 className='card-title'>{props.sname}</h4>
                        <p className='card-text'> {props.title} </p>
                        <button onClick={handleChange}>{text}</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Page;




