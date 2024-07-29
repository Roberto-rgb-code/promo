import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <Row>
      {products.map((product, index) => (
        <Col key={index} md={4} className="mb-3">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;