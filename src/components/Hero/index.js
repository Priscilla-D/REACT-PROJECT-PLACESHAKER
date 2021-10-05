import React from 'react';
import { Card } from 'react-bootstrap';

import './styles.scss';

const Hero = ({ id, images, name }) => (
  <div className="hero">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images.md} />
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Text>{name}</Card.Text>
        <Card.Link href={`/hero/${id}`}>Détails</Card.Link>
      </Card.Body>
    </Card>
  </div>
);

export default Hero;
