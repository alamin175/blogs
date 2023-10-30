import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './product.css'
import { useState } from 'react';
const Product = (props) => {
    const {blogs, image_url1,image_url2, user,published_date, read, reading_time} = props.element
    const [time, setTime] = useState(0)
const readingTime = (read)=>{
    let previousTime = read
    const set = setTime(time + previousTime)
    return(
        console.log(set)
    )
}
return (
    <div className='card'>
        
        <img src={image_url1} alt="" />
        <div className='details'>
            <div className='user'>
                    <img src={image_url2} alt="" />
                    <div className='user-id'>
                        <h4>{user} </h4>
                        <p>Published: {published_date} </p>
                    </div>
            </div>
            <p><span>{read} </span>{reading_time} <a href="Bookmark"><FontAwesomeIcon icon={faBookmark} /></a></p>
        </div>
            <h1>{blogs} </h1>
            <button onClick={()=> readingTime(read)}>Mark as read</button>
        
    </div>
);
};

export default Product;