import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Products from './pages/products';
import Cart from './pages/cart';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/*routes */}
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
