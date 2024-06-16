import { useState } from 'react'
import './App.scss'
import Test from './components/Test/Test';
import Header from './components/Header/Header';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>

    <BrowserRouter>
      <Header />  
      <Routes>
        <Route path="/"/>
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    {/* <Test/> */}
    
    </>
  )
}

export default App
