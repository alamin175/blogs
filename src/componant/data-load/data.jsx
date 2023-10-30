import { element } from 'prop-types';
import { useEffect, useState } from 'react';
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
        console.log(props.element )
    }
    return (
        <div>
            {
                value.map(element => <Product key={element.id} element ={element} handle = {handle} ></Product>)
            }
        </div>
    );
};

export default Data;