import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.Material}</Card.Title>
        <Card.Text>Stock: {product.Stock}</Card.Text>
        <Card.Text>Almacén: {product.Planta}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;