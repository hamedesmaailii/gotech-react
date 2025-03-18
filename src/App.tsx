import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Product from './pages/Product.tsx';
import Career from './pages/Career.tsx';

function App () {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path='/product' element={<Product />}/>
            <Route path='/Career' element={<Career />}/>
        </Routes>
    </Router>
  )
}

export default App;