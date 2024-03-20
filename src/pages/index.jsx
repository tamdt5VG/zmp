import React from 'react';
import Navbar from './partials/components/navbar.jsx';
import Body from './partials/components/body';
import Container from 'react-bootstrap/Container';
import Footer from './partials/components/footer'

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