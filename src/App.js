import { useState, useEffect } from 'react';
import './App.css';
import { onInit, currentAccount, connectMetamask} from './backend/metamask_connection';
import Header from './frontend/components/Header/header';
import UserNftList from './frontend/components/UserProfile/user_nft_list';

function App() {
  

  return (
    <>
      <Header />
      <UserNftList />
      
    </>
  );
}

export default App;
