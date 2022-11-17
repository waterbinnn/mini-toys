import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './containers/Header';
import { ProductListing } from './containers/ProductListing';
import { ProductDetail } from './containers/ProductDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>Not Found</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
