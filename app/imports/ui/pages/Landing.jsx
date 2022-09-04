import React from 'react';
import { Col, Container, Image, Row, Card } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id={PAGE_IDS.LANDING} className="py-3">
    <Row className="align-middle text-center">
      <Col xs={4}>
        <Image roundedCircle src="https://www.hsta.org/wp-content/uploads/2020/11/img-DOE-logo-4x3-1.jpg" width="200px" />
      </Col>

      <Col xs={8} className="d-flex flex-column justify-content-center">
        <h1>Welcome to Alahele</h1>
        <p>Let us help you on find your alahele through the legislative process.</p>
      </Col>
    </Row>

    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <Card.Text>
                  <p> "Alahele": Route, Way. </p>

                  Aloha our team is comprised of overworked and underpaid UH Manoa students. Please donate and we will be sure to provide you a 'alahele' to facilitate the legislative process.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      ))}

      {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Helpful Tips</Card.Title>
                <Card.Text>
                  <h6>Adding Bills To Your Workspace</h6>
                  <p>Blah blah blah</p>
                  <p>Blah blah blah</p>
                  <p>Blah blah blah</p>
                  <p>Picture Here</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      ))}

      {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Users Questions & Answers</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      ))}

      {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Ask Our Team</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      ))}


    </Row>

  </Container>

);



export default Landing;

