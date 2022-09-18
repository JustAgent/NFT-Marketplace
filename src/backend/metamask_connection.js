import { ethers } from "ethers";
import React, { useEffect, useState } from 'react'

export const UserContext = React.createContext();
export const UserProvider = ({children}) => {
  
  const [currentAccount, setcurrentAccount] = useState(null)
  const [currentBalance, setcurrentBalance] = useState(null)

  useEffect(() => {
    initAccount()
  }, [])
  
 

  const connectWalletHandler = () => {
    if(window.ethereum) {
        window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
            accountChangeHandler(result[0]);
        })
    }
  }
  const accountChangeHandler = (newAccount) => {
    if (newAccount) {
      getUserBalance(newAccount.toString());
    }
  }
  const chainChangeHandler = () => {
    window.location.reload()
  }
  const getUserBalance = (address) => {
    window.ethereum.request({ method: 'eth_getBalance', params: [address, 'latest'] })
    .then(balance => {  
        setcurrentAccount(address);
        setcurrentBalance(ethers.utils.formatEther(balance))
        //console.log(currentAccount,currentBalance)
        
    })
  }
  const initAccount = () => {
    if (window.ethereum) {  
      try {
          window.ethereum.request({ method: 'eth_accounts' }).then(result => {
              accountChangeHandler(result[0]);
          })  
      } catch (error) {}
  }
  }
  window.ethereum.on('accountsChanged', accountChangeHandler)
  window.ethereum.on('chainChanged', chainChangeHandler)

  return <UserContext.Provider value={{currentAccount, currentBalance, initAccount, connectWalletHandler, accountChangeHandler, chainChangeHandler, connectWalletHandler}}>
           {children}
         </UserContext.Provider>

}


