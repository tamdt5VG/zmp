import React , { useEffect, useState }from 'react';
import '../../../css/navbar.css'
import '../../../css/countdown.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './productCard';
const RMCarousel = Carousel.default? Carousel.default: Carousel;

const Navbar = () => {
  const [menu,setMenu] = useState('flashsale');

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

  return (
    <Container fluid="xs">
      <Row>
          <h2 style={{textAlign:'center'}}>Mặc Ngay, Yêu Luôn</h2>
      </Row>

      <Row>
        <ul className='headerAttention'>
          <li onClick={()=>{setMenu("flashsale")}}>Flashsale {menu==='flashsale' ?<hr/> : <></>}</li>
          <li onClick={()=>{setMenu("new")}}>Sản phẩm mới {menu==='new' ?<hr/> : <></>}</li>
          <li onClick={()=>{setMenu("eco")}}>Combo tiết kiệm   {menu==='eco' ?<hr/> : <></>}</li>
        </ul>
      </Row>
      
      <RMCarousel responsive={responsive}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </RMCarousel>
      
    </Container>
  );
}

export default Navbar;