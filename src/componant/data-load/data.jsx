import { element } from 'prop-types';
import { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Product from '../Product/Product';
import './data.css'
const Data = ({handleMarkAsRead, handlebookmark}) => {
    const [value, setValue] = useState([])

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=> res.json())
        .then(data => setValue(data))
    },[])

    return (
        <div>
            {/* {
                value.map(element2 => <Bookmark key={element2.id} element ={element2}></Bookmark>)
            } */}
            {
                value.map(element => <Product
                    key={element.id}
                    element ={element} 
                    handleMarkAsRead = {handleMarkAsRead}
                    handlebookmark ={handlebookmark}
                    ></Product>)
            } 
            
            <div>

            </div>
        </div>
    );
};

export default Data;