import './App.css';
import { Reset } from 'styled-reset';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import * as S from "./styles/common";
import MainLayout from './components/MainLayout/MainLayout';
import Today from './pages/Today/Today';
import Calender from './pages/Calender/Calender';

function App() {
  return (
    <>
      <Reset />
      <Global styles={S.GSCommon} />
      <MainLayout>
        <Routes >
          <Route path="/today" element={ <Today /> }/>
          <Route path="/upcoming" />
          <Route path="/calender" element={ <Calender /> }/>
          <Route path="/stickywall" />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;







