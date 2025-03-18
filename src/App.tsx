import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Product from './pages/Product.tsx';

function App () {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path='/product' element={<Product />}/>
        </Routes>
    </Router>
  )
}

export default App;