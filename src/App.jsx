import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import CategoryPage from './pages/CategoryPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import AccountPage from './pages/AccountPage';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/:category' element={<CategoryPage/>}/>
        <Route path='/:category/:id' element={<ProductDetailsPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/myAccount' element={<AccountPage/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
