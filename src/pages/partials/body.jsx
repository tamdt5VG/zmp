import React , { useEffect, useState }from 'react';
import {
  Page, BottomNavigation, useNavigate , Button, Box, Text
} from 'zmp-ui';
import '../../css/navbar.css'
import '../../css/countdown.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './productCard';

const Navbar = () => {
  const [menu,setMenu] = useState('flashsale1');

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

  return (
    <Container fluid>
        <div style={{marginTop:'20px'}}>
            <Row>
                <img src="../../../public/1.jpg" alt="" style={{borderRadius:'40px'}} />
            </Row>
        </div>
        <div style={{marginTop:'20px'}}>
            <Row>
                <img src="../../../public/2.webp" alt="" style={{borderRadius:'40px'}} />
            </Row>
        </div>
                <div style={
                    {
                        backgroundImage:'url(https://static.toiimg.com/photo/msid-81554562,width-96,height-65.cms)',
                        height:'350px',
                        backgroundAttachment: 'fixed',
                        backgroundPosition: '70%',
                        borderRadius: '50px'}
                    }>
                    <Row>
                        <Col>
                        <img src="../../../public/3.jpg" alt="" style={{
                            width:'100%',
                            marginTop:'35px',
                            borderRadius:'50px'
                        }}/>
                        </Col>

                        <Col>
                            <Text>ABC</Text>
                        </Col>
                    </Row>
                </div>
    </Container>
  );
}

export default Navbar;