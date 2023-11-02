import React from 'react';
import './Bookmark.css'
const Bookmark = ({reading, bookmark}) => {
    return (
        <div className='full-bookmark'>
            <div className='bookmark'>
            <h3>Spent time on read: {reading} min</h3>
            </div>
            <div className='change'>
            <div className='bookmark-save'>
                <h2>{bookmark} </h2>
            </div>
            </div>
        </div>
    );
};

export default Bookmark;