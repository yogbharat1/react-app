import React from 'react';

import './App.scss';

import { Container, Row, Col } from 'react-bootstrap';

import CardSection from './Components/CardSection';


function App() { 
  return (
	<div>
   <Container className="mt-4">
      <Row>
        <Col sm={12} md={12} lg={9}>
          <h1 className="text-danger">Related Articles</h1>
          <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
	</Col>
	</Row>
	<Row className="mt-4">
	<Col sm={12} md={12}>
	<CardSection />
	</Col>
      </Row>

    </Container>
</div>
  );
}

export default App;
