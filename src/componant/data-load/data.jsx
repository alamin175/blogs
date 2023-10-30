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
    return (
        <div>
            {
                value.map(element => <Product key={element.id} element ={element} ></Product>)
            }
        </div>
    );
};

export default Data;