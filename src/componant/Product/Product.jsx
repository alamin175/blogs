import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './product.css'
import Bookmark from './Bookmark/Bookmark';

const Product = (props) => {
    const {blogs, image_url1,image_url2, user,published_date, read, reading_time} = props.element
    const {handle}= props
    // console.log(props.element)
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
            <p><span>{read} </span>{reading_time} <button><FontAwesomeIcon icon={faBookmark} /></button></p>
        </div>
            <h1>{blogs} </h1>
            {/* <p> Reading Time: {time.length} </p> */}
            <button onClick={handle} >Mark as read</button>
    </div>
);
};

export default Product;