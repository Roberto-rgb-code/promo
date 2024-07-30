import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import ProductList from './components/ProductList';
import { searchProduct } from './services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await searchProduct();
        if (result.success) {
          const decodedProducts = result.response.map((product) => ({
            ...product,
            nombrePadre: decodeHtmlEntities(product.nombrePadre),
            descripcion: decodeHtmlEntities(product.descripcion),
            material: decodeHtmlEntities(product.material),
          }));
          setProducts(decodedProducts);
        } else {
          alert('No se encontraron resultados');
        }
      } catch (err) {
        alert('Hubo un error al buscar el producto');
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = async (name) => {
    setCurrent(
      products.filter(item => item.nombrePadre.toLowerCase().includes(name.toLowerCase())));
  };

  return (
    <Container>
      <h1 className="my-4">Catálogo de Productos</h1>
      <SearchForm onSearch={handleSearch} />
      <ProductList products={current} />
    </Container>
  );
}

const decodeHtmlEntities = (text) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<!doctype html><body>${text}</body>`, 'text/html');
  return doc.body.textContent || "";
};

export default App;