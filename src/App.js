import { useState, useEffect } from 'react';
import './App.css';
import { UserProvider } from './backend/metamask_connection';
import Header from './frontend/components/Header/header';
import UserNftList from './frontend/components/UserProfile/user_nft_list';
import CreateNftPage from './frontend/components/Create/create_page';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ExplorePage from './frontend/components/Explore/explore';
import WelcomePage from './frontend/components/Welcome/welcome_page';
import Item from './frontend/components/ItemPage/Item';


function App() {
  

  return (
    <Router>    
      <UserProvider>
      
      <Header />
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route exact path="/explore" element={<ExplorePage />} />
        <Route exact path="/create" element={<CreateNftPage />} />
        <Route exact path="/profile" element={<UserNftList />} />
        <Route path="/assets/:type" element={<Item />} />
      </Routes>
      
    </UserProvider>
    </Router>

  );
}

export default App;
