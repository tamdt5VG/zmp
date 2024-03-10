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
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './productCard';

const Navbar = () => {

  return (
    <Container fluid>
        <div style={{marginTop:'20px'}}>
            <Row>
                <img src="https://tec-ftu.com/wp-content/uploads/2021/07/1.jpg" alt="" style={{borderRadius:'40px'}} />
            </Row>
        </div>
        <div style={{marginTop:'20px'}}>
            <Row>
                <img src="https://media.coolmate.me/image/June2022/mceclip0_79.png" alt="" style={{borderRadius:'40px'}} />
            </Row>
        </div>
            <Row  style={
            {
                backgroundImage:'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://static.toiimg.com/photo/msid-81554562,width-96,height-65.cms)',
                backgroundAttachment: 'fixed',
                backgroundPosition: '70%',
                borderRadius: '50px'}
            }>
                <Col>
                <img src="https://vn-test-11.slatic.net/p/cf3e0a22532f96f0565cf2842858fcd1.jpg" alt="" style={{
                    width:'100%',
                    height:'100%',
                    padding:'10px',
                    borderRadius:'50px'
                }}/>
                </Col>
                <Col style={{color:'white',padding:'20px',fontSize:'14px'}}>
                    <h2>Coolmate's CLEAN DENIM</h2>
                    <p>Một chiếc quần Jeans đầu tiên tại Coolmate được sử dụng chất liệu là Cotton Tái sinh (Regenerative Cotton) - loại Cotton chất lượng và trồng bằng qquy trình sạch, bền vững</p>
                  <Button variant='light'>Tìm hiểu thêm</Button>
                </Col>
            </Row>
            <Row style={{padding:'30px'}}>
              <Col xs={8} style={{
                background:'yellow',
                borderRadius:'50px',
                padding:'30px'
              }}>
                <h2>Dòng sản phẩm công nghệ EXCOOL</h2>
                <p>Công nghệ Việt cho người Việt</p>
                <Button> Tìm hiểu thêm </Button>
              </Col>
              <Col xs={4}
                style={{
                  background:'white',
                  borderRadius:'50px',
                  position:'relative',
                  right:'50px'
                }}
              >
                <img src="https://i.pinimg.com/originals/f7/1c/5c/f71c5c1e89dbb27a7e840b6fb60932eb.png"
                    alt="" 
                    style={{
                      width:'130%',
                      height:'100%',
                      position:'relative',
                      left:'10px',
                      bottom:'30px',
                      transform:'rotate(5deg)',
                    }}/>
              </Col>
                
            </Row>
    </Container>
  );
}

export default Navbar;