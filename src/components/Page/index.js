import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import Hero from 'src/components/Hero';
import Profile from 'src/components/Profile';
import './styles.scss';

const Page = ({ hero }) => (
  <div className="page">
    <h1>Liste des supers héros</h1>
    <Row>
      <Col xs={12} md={6} lg={4}>
        <Card>
          {hero.map((heros) => (
            <div className="page-container">
              <Hero {...heros} key={heros.id} />
            </div>
          ))}
        </Card>
        <Profile />
      </Col>
    </Row>
  </div>
);

export default Page;
