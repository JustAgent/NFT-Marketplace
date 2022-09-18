import React, { useEffect, useState } from "react";
import {ethers} from 'ethers';
import Web3 from "web3";


const UserNftList = () => {

    const [account, setaccount] = useState(null);
    const [balance, setbalance] = useState(null);
    
    useEffect(() => {
    if (window.ethereum) {  
        try {
            window.ethereum.request({ method: 'eth_accounts' }).then(result => {
                accountChangeHandler(result[0]);
            })  
        } catch (error) {}
    }
})
    

    const connectWalletHandler = () => {
        if(window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(result => {
                accountChangeHandler(result[0]);
            })
        }
    }
    const accountChangeHandler = (newAccount) => {
        setaccount(newAccount);
        getUserBalance(newAccount.toString());
    }
    const chainChangeHandler = () => {
        window.location.reload()
    }
    const getUserBalance = (address) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [address, 'latest'] })
        .then(balance => {  
            setbalance(ethers.utils.formatEther(balance));
        })
    }
    window.ethereum.on('accountsChanged', accountChangeHandler)
    window.ethereum.on('chainChanged', chainChangeHandler)

    return (
    <div>
        <button onClick={connectWalletHandler}>Connect Wallet</button>
        <h1>{account}</h1>
        <h1>{balance}</h1>
    </div>
    )
}

export default UserNftList;