import React, { useState } from 'react';
import './App.css';
import AppModule from './Components/AppModule';
import { Line, UserTypeContainer } from './Components/Global.Style';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [userType1,] = useState('Broker');
  const [userType2,] = useState('User');

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <div >
                <UserTypeContainer>
                  {userType1?.toUpperCase()} OVERVIEW <Line />
                </UserTypeContainer>
              </div>
              <div className='container'>
                <AppModule />
              </div>
            </>
          } />
          <Route path="user" element={
            <>
              <div >
                <UserTypeContainer>
                  {userType2?.toUpperCase()} OVERVIEW <Line />
                </UserTypeContainer>
              </div>
              <div className='container'>

              </div>
            </>
          } />


        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
