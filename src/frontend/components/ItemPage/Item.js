import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';


const Item = () => {
    
// const { id } = useParams();
const nft = useLocation().state;
console.log(nft)
    return ( 
        <>
            <div className='container'>
                <button className='button'>Maker Offer</button>
                <button className='button'>Sell</button>
                <button className='button'>Transfer</button>

                <div className='data'>
                    <div className='main-image'>
                        <img src={nft.image_preview_url}></img> 
                    </div>
                    <div>
                        <div>{nft.asset_contract['address']}</div>
                        <div>{nft.token_id}</div>
                        <div>{nft.description}</div>
                        <div>{nft.last_sale!=null ? nft.last_sale.total_price / 1000000000000000000 : "Haven't sold yet"} </div>
                    </div>
                    <div className='properties'></div>

                </div>
            </div>
        </>
     );
}
 
export default Item;