import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container>
        <Row>
          <Col className="text-center">
            <span className="text-muted">Based on https://app.soos.io/research/packages/CFamily/-/libtiff/</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
