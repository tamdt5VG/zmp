import React , { useState, useEffect }from 'react';
import {
  Page, BottomNavigation, Text , Icon
} from 'zmp-ui';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DetailPage = ({data}) => {
  const [product, setProduct] = useState([])

  return (
    <Container>
      <Row>
          <img src={data.image} alt="" width="400vh" />
        <Col>
          <h2>
            {data.name}
          </h2>
        <Text>
          Nội dung: {data.description}
        </Text>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailPage;