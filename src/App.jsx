import './App.scss'
import Test from './components/Test/Test';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>

    <BrowserRouter>
      <Header />  
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
