import React from 'react'
import { faker } from '@faker-js/faker'


function CommentDetail(props) {
    return (
        <>
            <div className='comment'>
                <a className='avatar' href="/">
                    <img src={props.avatar} alt="avatar" />
                </a>
                <div className='content'>
                    <a href='/' className='author'>
                        <h2>{props.name}</h2>
                    </a>
                    <div className='metadata'>
                        <span className='date'> {props.date}</span>

                    </div>
                    <div className='text'>
                        <p>{props.comment}</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CommentDetail