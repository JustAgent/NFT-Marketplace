import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../backend/metamask_connection";


const UserNftList = () => {
    const {currentAccount, currentBalance, initAccount, accountChangeHandler, chainChangeHandler, connectWalletHandler} = useContext(UserContext);
    
    return (
    <div>
        <button onClick={connectWalletHandler}>Connect Wallet</button>
        <h1>{currentAccount}</h1>
        <h1>{currentBalance}</h1>
    </div>
    )
}

export default UserNftList;