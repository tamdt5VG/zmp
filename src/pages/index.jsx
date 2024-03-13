import React from 'react';
import Navbar from './partials/index/navbar';
import Body from './partials/index/body';
import Container from 'react-bootstrap/Container';
import Footer from './partials/index/footer'

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