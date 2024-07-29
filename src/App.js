import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import ProductList from './components/ProductList';
import { searchProduct } from './services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([]);

  const handleSearch = async (sku) => {
    try {
      const data = await searchProduct(sku);
      if (data.success) {
        setProducts(data.Stocks);
      } else {
        alert('No se encontraron resultados');
      }
    } catch (error) {
      alert('Hubo un error al buscar el producto');
    }
  };

  return (
    <Container>
      <h1 className="my-4">Catálogo de Productos</h1>
      <SearchForm onSearch={handleSearch} />
      <ProductList products={products} />
    </Container>
  );
}

export default App;