import React from 'react'

import BookImg from '../images/Book.png'

const Group = (props) => {
    return (
        <div style={{ textAlign: "center", border: "2px solid black", margin: "10px", width: "200px", height: "300px" }}>
            {props.book.image
                    ?
                    <img src={props.book.image} alt={props.book.title} style={{ height: "200px" }} />
                    :
                    <img src={BookImg} alt="none" style={{ height: "120px", margin: "40px auto" }} />
            }
            <h2>{props.book.title}</h2>
        </div>
    )
}

export default Group