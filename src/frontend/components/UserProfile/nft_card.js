import React from 'react'
import './nft_card.css'
import '../../../assets/assets_links'
import { ether_sign } from '../../../assets/assets_links';
import ethers from 'ethers'
import { Link } from 'react-router-dom';
const NftCard = ({ nft }) => {

    const Open = () => {
        <Link to="/assets/test1" state={{type: nft}}>My account</Link>
    }
     

    return ( 
        <div className='nft-card' onClick={Open} >

            <div className='nft-img'>
                <img className='img' src={nft.image_preview_url} />
            </div>

            <div>
                {nft.name}
            </div>
            <div>
                {nft.creator!=null ? nft.creator.address : "123"}
            </div>
            <div >
                 {nft.last_sale!=null ? nft.last_sale.total_price / 1000000000000000000 : "Haven't sold yet"} 
                <img className='ether_svg' src='https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg'></img> 
            </div>
            
            
            
        </div>
     );
}
 
export default NftCard;