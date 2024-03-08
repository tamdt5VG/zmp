import React , { useEffect, useState }from 'react';
import {
  Page, BottomNavigation, useNavigate , Button, Box, Text
} from 'zmp-ui';
import '../css/style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const HomePage = ({data}) => {
  const navigate = useNavigate();
  const [products,setProducts] = useState([{}]);

  useEffect(()=> {
      setProducts(data)
  }, [])
  return (
    <Container fluid>
      <Row >
        {products.map((product) => {
          return (
            <Col key={"key"+product.slug} xs="auto" lg="2" style={{width:'50%', height:'50%'}}>
              <Card style={{ width: '100%', margin: 'auto'}}>
                <Card.Img variant="top" src={product.image} width={200} height={200}/>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <Button variant="primary" onClick={() => {
                      navigate(`/${product.slug}`);
                    }}>Chi tiết</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default HomePage;