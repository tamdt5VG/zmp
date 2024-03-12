import React from 'react';
import {
  Icon
} from 'zmp-ui';
import '../../css/navbar.css'
import '../../css/countdown.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './productCard';
import NavbarFooter from './navbarFooter';

const Footer = () => {

  return (
    <Container fluid style={{
        background:'black',
        color:'white',
        height:'max-content'
    }}>
        <Row style={{
            padding:'15px',
            marginTop:'10px',
            fontSize:'10px'
        }}>
            <Col xs={7} style={{
                display:'flex'
            }}>
                <div>
                    <Icon icon="zi-call" size={50}></Icon>
                </div>
                <div style={{
                    marginTop:'10px'
                }}>
                    <b style={{margin:'0'}}>Hotline {`\n`}1900.273232(028.1231.1231)</b>
                </div>
            </Col>
            <Col xs={5} style={{
                display:'flex'
            }}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg>
                </div>
                <div  style={{
                    marginTop:'10px',
                    marginLeft:'10px'
                }}>
                    <b style={{margin:'0'}}>Email : {`\n`} tam@mail.com</b>
                </div>
            </Col>
            <hr style={{
                marginTop:'2vh',
                border:'solid white 1px',
                opacity:'1'
        }}/>
        </Row>
        <Row>
            <h5>COOLMATE lắng nghe bạn!</h5>
            <p style={{
                fontSize:'12px'
            }}>Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.</p>
            <div>
                <Button style={{
                    borderRadius:'30px',
                    width:'30vw',
                    fontSize:'13px',
                }}>Gửi Ý Kiến</Button>
                <svg style={{
                    marginLeft:'15px'
                }} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" height="30px" width="30px" version="1.1" id="Layer_1" viewBox="0 0 310 310" xml:space="preserve">
                    <g id="XMLID_834_">
                        <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064   c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996   V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545   C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703   c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
                    </g>
                </svg>
                <svg style={{
                    marginLeft:'15px'
                }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="35px" width="35px" fill="white" viewBox="0 0 50 50">
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
                <svg style={{
                    marginLeft:'15px'
                }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="45px" width="45px" fill="white" viewBox="0 0 50 50">
                    <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"></path>
                </svg>
            </div>
        </Row>
        <NavbarFooter ></NavbarFooter>
        <hr style={{
            border:'solid white 1px',
            opacity:'1'
        }}/>
        <Row style={{
            marginBottom:'5vh'
        }}>
            <b>Công ty TNHH ABCDEF</b>
            <p>Mã số doanh nghiệp: 01234567: Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đàu tư TP Hà Nội cấp lần đầu ngày 20/02/2019</p>
        </Row>
    </Container>
  );
}

export default Footer;