import { element } from 'prop-types';
import { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Product from '../Product/Product';
import './data.css'
const Data = () => {
    const [value, setValue] = useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=> res.json())
        .then(data => setValue(data))
    },[])
    const handle =(props)=>{
        console.log(props.element)
    }
    return (
        <div>
            {
                value.map(element => <Product key={element.id} element ={element} handle = {handle} ></Product>)
            }
            {
                value.map(element2 => <Bookmark key={element2.id} element ={element2}></Bookmark>)
            } 
        </div>
    );
};

export default Data;