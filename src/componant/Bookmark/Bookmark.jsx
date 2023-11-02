import React from 'react';
import './Bookmark.css'
const Bookmark = (props) => {
    console.log(props.element)

    /* -------
    ei code ta uncomment korlei error ashe + shob chole jay display theke
            // console.log(props.element.id) 
    ----------*/ 



    const handle2 = ()=> {
        // console.log(blogs)
    }
    return (
        <div className='bookmark'>
            <h3>Spent time on read: min</h3>
            <div>
                
            </div>
        </div>
    );
};

export default Bookmark;