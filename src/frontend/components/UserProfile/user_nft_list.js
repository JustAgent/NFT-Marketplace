import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../backend/metamask_connection";
import { Network, Alchemy } from 'alchemy-sdk';
import { API_KEY_ALCHEMY } from "../../../constants/secrets";
import { NETWORK } from "../../../constants/constants";
import "./user_nft_list.css"
import NftCard from "./nft_card";

let flag = false

const UserNftList =  () => {
    const {currentAccount, currentBalance, connectWalletHandler} = useContext(UserContext);
    const [nfts, setnfts] = useState([])
    const test = "0x55fe0C55359F02292E95b67763d41d0181399188"
    //const test = currentAccount
    const fetchNFTs = async (currentAccount) => {
        if (currentAccount!= null && flag == false) {
                const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${test}&blockchains=ETHEREUM`);
                const data = await response.json()
                console.log(data.total);
                setnfts(data.items)
                console.log(nfts);
                flag = true
            }
    }
    
    fetchNFTs(currentAccount);
    return (
    <div className="nft-list">
        <button onClick={connectWalletHandler}>Connect Wallet</button>
        <h1>{currentAccount}</h1>
        <h1>{currentBalance}</h1>
        <h1>{nfts.length}</h1>
        <div className="wrapper">
            {nfts.map((nft, index)=> {
                return <NftCard nft={nft} key={index}/>
            })}
        </div>
    </div>
    )
}

export default UserNftList;