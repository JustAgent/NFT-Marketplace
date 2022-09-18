import React from 'react'
import './nft_card.css'
import '../../../assets/assets_links'
import { ether_sign } from '../../../assets/assets_links';
const NftCard = ({ nft }) => {
    return ( 
        <div className='nft-card'>

            <div className='nft-img'>
                <img className='img' src={nft.meta.content[0].url} />
            </div>

            <div>
                {nft.meta.name}
            </div>
            <div>
                {nft.creators[0].account.replace("ETHEREUM:", "")}
            </div>
            <div >
                {nft.lastSale!=undefined ? nft.lastSale.price : "Haven't sold yet"}
                <img className='ether_svg' src='https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg'></img>
            </div>
            
            
            
        </div>
     );
}
 
export default NftCard;