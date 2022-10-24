import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';


const Item = (props) => {
    
    const {type} = useParams();
    const nft = useLocation().state.stateParam;


    return ( 
        <>
            <div className='container'>
                <button className='button'>Maker Offer</button>
                <button className='button'>Sell</button>
                <button className='button'>Transfer</button>

                <div className='data'>
                    <div className='main-image'>
                        <image src={props.image}></image>
                    </div>
                    <div className='properties'></div>

                </div>
            </div>
        </>
     );
}
 
export default Item;