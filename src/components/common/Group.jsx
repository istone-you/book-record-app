import React, { useState, useEffect } from 'react'
import { Storage } from 'aws-amplify'

import BookImg from '../../images/Book.png'

const Group = (props) => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        async function fetchImageUrl() {
            try {
                const url = await Storage.get(props.book.image);
                setImageUrl(url);
            } catch (err) {
                console.log('Error fetching image:', err);
            }
        }

        fetchImageUrl();
    }, []);

    return (
        <div style={{ textAlign: "center", border: "2px solid black", margin: "10px", width: "200px", height: "300px" }}>
            {props.book.image
                ?
                <img src={imageUrl} alt={props.book.title} style={{ width: "120px", maxHeight: "200px", marginTop: "15px" }} />
                :
                <img src={BookImg} alt="none" style={{ height: "120px", margin: "40px auto" }} />
            }
            <h2>{props.book.title}</h2>
        </div>
    )
}

export default Group