import React , { useEffect, useState }from 'react';
import {
  Page, BottomNavigation, useNavigate , Button, Box, Text
} from 'zmp-ui';
import Navbar from '../pages/partials/navbar';
import Body from '../pages/partials/body';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const HomePage = () => {
  return (
    <Container fluid>
      <Navbar></Navbar>
      <Body></Body>
    </Container>
  );
}

export default HomePage;