import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  const { nombrePadre, descripcion, material, medidas, imagenesPadre, hijos } = product;
  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Img variant="top" src={imagenesPadre[0]} alt={nombrePadre} />
      <Card.Body>
        <Card.Title>{nombrePadre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Card.Text>
          <strong>Material:</strong> {material}
        </Card.Text>
        <Card.Text>
          <strong>Medidas:</strong> {medidas}
        </Card.Text>
        {hijos && hijos.length > 0 && (
          <>
            <Card.Title>Galería</Card.Title>
            <Row>
              {hijos[0].imagenesHijo.map((image, index) => (
                <Col key={index} xs={4} style={{ marginBottom: '10px' }}>
                  <Card.Img variant="top" src={image} alt={`Vista ${index + 1}`} style={{ width: '100%' }} />
                </Col>
              ))}
            </Row>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

/*
const ProductCard = ({ product }) => {
  const { nombrePadre, descripcion, material, medidas, imagenesPadre, hijos } = product;
  
  return (
    <div className="product-card">
      <img src={imagenesPadre[0]} alt={nombrePadre} className="product-image" />
      <h1>{nombrePadre}</h1>
      <p>{descripcion}</p>
      <p>Material: {material}</p>
      <p>Medidas: {medidas}</p>
      {hijos && hijos.length > 0 && (
        <div className="product-gallery">
          {hijos[0].imagenesHijo.map((image, index) => (
            <img key={index} src={image} alt={`Vista ${index + 1}`} className="product-gallery-image" />
          ))}
        </div>
      )}
    </div>
  );
};

*/