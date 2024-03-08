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
      <Row>
          <h2 style={{textAlign:'center'}}>Mặc Ngay, Yêu Luôn</h2>
      </Row>
      <Row>
        <ul className='headerAttention'>
          <li onClick={()=>{setMenu("flashsale1")}}>Flashsale {menu==='flashsale1' ?<hr/> : <></>}</li>
          <li onClick={()=>{setMenu("flashsale2")}}>Flashsale {menu==='flashsale2' ?<hr/> : <></>}</li>
          <li onClick={()=>{setMenu("new")}}>Sản phẩm mới   {menu==='new' ?<hr/> : <></>}</li>
        </ul>
      </Row>
      
      <Carousel responsive={responsive}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </Carousel>
      
    </Container>
  );
}

export default Navbar;