import React from 'react';
import { Container, Navbar, Nav, Card, Button, Row, Col, Carousel } from 'react-bootstrap';
import './App.css'; // Make sure this is imported to apply styles

function App() {
  return (
    <div>
      {/* Header */}
      <header className="bg-light py-3 mb-4">
        <Container>
          <h1 className="display-4">My Bootstrap Website</h1>
          <Navbar expand="lg" bg="light" variant="light">
            <Container>
              <Navbar.Brand href="#">Navbar</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link href="#">Services</Nav.Link>
                  <Nav.Link href="#">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </header>

      {/* Carousel */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt="Exquisite cuisine"
            />
            <Carousel.Caption>
              <h3>Exquisite Cuisine</h3>
              <p>Discover the taste of luxury.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://images.unsplash.com/photo-1532581291347-9c39cf10a73c"
              alt="Adventure Awaits"
            />
            <Carousel.Caption>
              <h3>Adventure Awaits</h3>
              <p>Join us to explore the wild sides of nature.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
              alt="City Night Life"
            />
            <Carousel.Caption>
              <h3>City Night Life</h3>
              <p>Experience the vibrant nightlife in the bustling cities.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Main Content */}
      <Container className="main-content mb-5">
      <Row>
          {/* Card 1 */}
          <Col md={6} className="mb-2">
            <Card>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img src="https://via.placeholder.com/150x250" className="img-fluid rounded-start" alt="..."/>
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                    <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          {/* Card 2 */}
          <Col md={6} className="mb-2">
            <Card>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img src="https://via.placeholder.com/150x250" className="img-fluid rounded-start" alt="..."/>
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                    <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <div className="callout bg-info text-white p-3 rounded">
              <h4>Special Offer!</h4>
              <p>Don't miss out on our limited-time offer. Click here to learn more!</p>
              <Button variant="light">Learn More</Button>
            </div>
          </Col>
        </Row>          
        <Row>
          {/* Card 1 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Card Title 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Card 2 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Card Title 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Card 3 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Card Title 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer py-4">
        <Container>
          <p className="text-center mb-0">&copy; 2024 My Website. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
