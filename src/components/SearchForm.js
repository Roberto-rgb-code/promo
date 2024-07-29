import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = ({ onSearch }) => {
  const [sku, setSku] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(sku);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Ingrese SKU"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Buscar
      </Button>
    </Form>
  );
};

export default SearchForm;