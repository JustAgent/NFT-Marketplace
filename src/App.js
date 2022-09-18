import { useState, useEffect } from 'react';
import './App.css';
import { UserProvider } from './backend/metamask_connection';
import Header from './frontend/components/Header/header';
import UserNftList from './frontend/components/UserProfile/user_nft_list';

function App() {
  

  return (
    <UserProvider>
      
      <Header />
      <UserNftList />
      
    </UserProvider>
  );
}

export default App;
