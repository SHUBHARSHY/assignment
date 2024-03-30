
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';

function App() {
  


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={   <Body />}/>
      <Route path="/details/:category/:id" element={<ProductDetails/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
