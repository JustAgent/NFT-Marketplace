import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';


const Item = () => {
    
  const { id } = useParams();

console.log(id);
    return ( 
        <>
            <div className='container'>
                <button className='button'>Maker Offer</button>
                <button className='button'>Sell</button>
                <button className='button'>Transfer</button>

                <div className='data'>
                    <div className='main-image'>
                        {/* <img src={props.image}></img> */}
                        <div>123 {id} 123</div>
                    </div>
                    <div className='properties'></div>

                </div>
            </div>
        </>
     );
}
 
export default Item;