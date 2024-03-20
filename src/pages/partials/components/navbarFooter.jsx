import React , { useEffect, useState }from 'react';
import '../../../css/carousel-product-cart.css'
import Button from 'react-bootstrap/Button';
import '../../../css/navbarfooter.css';
import { Col, Container, Row } from 'react-bootstrap';

const NavbarFooter = () => {
  const [navbar,setNavbar] = useState('');

  return (
    <Container style={{
        marginTop:'2vh'
    }}>
        <Row>
            <Col xs={11} onClick={() => {
                setNavbar('khampha')

                if(navbar === 'khampha') {
                    setNavbar('')
                }
            }}>
            <b>Khám phá COOLMATE</b>  
            </Col>
            <Col xs={1}>
            { navbar === 'khampha' ? '-' : '+' }
            </Col>
            { navbar === 'khampha' ? (
            <Col className="listNavbar">
                <ul >
                    <li>Áo Polo</li>
                    <li>Áo T-Shirt</li>
                    <li>Áo Sơ mi</li>
                    <li>Quần</li>
                    <li>Quần Lót</li>
                    <li>Tất(Vớ)</li>
                    <li>Mũ(Nón)</li>
                    <li>Phụ Kiện Khác</li>
                </ul>
            </Col>) : '' } 
        </Row>
        <Row style={{
            marginTop:'10px'
        }}>
            <Col xs={11} onClick={() => {
                setNavbar('dvkh')

                if(navbar === 'dvkh') {
                    setNavbar('')
                }
            }}>
            <b>Dịch vụ khách hàng</b>  
            </Col>
            <Col xs={1}>
                { navbar === 'dvkh' ? '-' : '+' }
            </Col>
            { navbar === 'dvkh' ? (<Col className="listNavbar">
                <ul >
                    <li>Hỏi đáp - FAQs</li>
                    <li>Chính sách đổi trả 60 ngày</li>
                    <li>Liên hệ</li>
                    <li>Thành viên Coolclub</li>
                    <li>Khách hàng hài lòng 100%</li>
                    <li>Chính sách khuyến mãi</li>
                    <li>Chính sách giao hàng</li>
                </ul>
            </Col>) : '' } 
        </Row>
        <Row style={{
            marginTop:'10px'
        }}>
            <Col xs={11} onClick={() => {
                setNavbar('ktmd')

                if(navbar === 'ktmd') {
                    setNavbar('')
                }
            }}>
            <b>Kiến thức mặc đẹp</b>  
            </Col>
            <Col xs={1}>
                { navbar === 'ktmd' ? '-' : '+' }
            </Col>
            { navbar === 'ktmd' ? (<Col className="listNavbar">
                <ul >
                    <li>Hướng dẫn chọn size</li>
                    <li>Blog</li>
                    <li>Group mặc đẹp sống chất</li>
                </ul>
            </Col>) : '' } 
        </Row>
        <Row style={{
            marginTop:'10px'
        }}>
            <Col xs={11} onClick={() => {
                setNavbar('tltd')

                if(navbar === 'tltd') {
                    setNavbar('')
                }
            }}>
            <b>Tài liệu tuyển dụng</b>  
            </Col>
            <Col xs={1}>
                { navbar === 'tltd' ? '-' : '+' }
            </Col>
            { navbar === 'tltd' ? (<Col className="listNavbar">
                <ul >
                    <li>Tuyển dụng</li>
                    <li>Đăng ký bản quyền</li>
                </ul>
            </Col>) : '' } 
        </Row>
        <Row style={{
            marginTop:'10px'
        }}>
            <Col xs={11} onClick={() => {
                setNavbar('dclh')

                if(navbar === 'dclh') {
                    setNavbar('')
                }
            }}>
            <b>Địa chỉ liên hệ</b>  
            </Col>
            <Col xs={1}>
                { navbar === 'dclh' ? '-' : '+' }
            </Col>
            { navbar === 'dclh' ? (<Col className="listNavbar">
                <ul >
                    <li>HUB Hà Nội : 123 Đường ABC, Quận Thanh Đa, Thành Phố Hà Nội</li>
                    <li>HUB Tp.HCM : 456 Đường DEF, Quận 3, Phường GHJ, Thành Phố Hồ Chí Minh</li>
                </ul>
            </Col>) : '' } 
        </Row>
    </Container>
    
  );
}

export default NavbarFooter;