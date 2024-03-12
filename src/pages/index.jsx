import React from 'react';
import Navbar from '../pages/partials/navbar';
import Body from '../pages/partials/body';
import Container from 'react-bootstrap/Container';
import Footer from '../pages/partials/footer'

const HomePage = () => {
  return (
    <Container fluid="xs">
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </Container>
  );
}

export default HomePage;