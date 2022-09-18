import React from 'react'
import './nft_card.css'
const NftCard = ({ nft }) => {
    return ( 
        <div className='nft-card'>
            <div className='nft-img'>
                <img className='img' src={nft.meta.content[0].url} />
            </div>
            <div>
                {nft.meta.name}
            </div>
            
            
        </div>
     );
}
 
export default NftCard;