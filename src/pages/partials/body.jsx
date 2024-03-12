import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CategoryCard from './categoryCard'
import 'react-multi-carousel/lib/styles.css';

const Body = () => {

  return (
    <Container fluid>
        <div style={{marginTop:'20px'}}>
            <Row>
                <img src="https://tec-ftu.com/wp-content/uploads/2021/07/1.jpg" alt="" style={{borderRadius:'40px'}} />
            </Row>
        </div>
        <div style={{marginTop:'20px',
      height:'max-content'}}>
            <Row style={{
                backgroundImage:'url(https://r.ipsearch.vn/trademarks/2022/4202238661.jpg)',
                backgroundPosition: '70%',
                backgroundSize: '100%',
                backgroundRepeat:'no-repeat',
                marginBottom:'50px'
            }} >
              <div >
                <img src="https://freecutout.com/wp-content/uploads/2015/03/free_cutpeople_28.png" alt="" style={{
                  position:'relative',
                  left:'100px',
                  width:'20vh',
                }}/>
                <Button variant='light' style={{
                  position:'relative',
                  right:'40px',
                  top:'110px',
                }}>KHÁM PHÁ</Button>
              </div>
             
            </Row>
        </div>
            <Row  style={
            {
                backgroundImage:'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://static.toiimg.com/photo/msid-81554562,width-96,height-65.cms)',
                backgroundPosition: '70%',
                backgroundAttachment: 'fixed',
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
            <Row style={{marginTop:'20px'}}>
              <Col xs={7} style={{
                background:'yellow',
                borderRadius:'50px',
                padding:'30px'
              }}>
                <h2>Dòng sản phẩm công nghệ EXCOOL</h2>
                <p>Công nghệ Việt cho người Việt</p>
                <Button variant='light'> Tìm hiểu thêm </Button>
              </Col>
              <Col xs={5} 
                style={{
                  background:'white',
                  borderRadius:'50px',
                  position:'relative',
                  right:'50px'
                }}
              >
                <img src="https://i.pinimg.com/originals/f7/1c/5c/f71c5c1e89dbb27a7e840b6fb60932eb.png"
                    alt="" 
                    width={'250px'}
                    height={'270px'}
                    style={{
                      position:'relative',
                      right:'30px',
                      transform:'rotate(5deg)',
                    }}/>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <CategoryCard></CategoryCard>
              </Col>
              <Col xs={6}>
                <CategoryCard></CategoryCard>
              </Col>
              <Col xs={6}>
                <CategoryCard></CategoryCard>
              </Col>
              <Col xs={6}>
                <CategoryCard></CategoryCard>
              </Col>
            </Row>
            <Row  style={{
                marginTop:'10px',
                marginLeft:'0.5vw',
                marginRight:'0.5vw',
                position:'relative',
              }}>
              <Col xs={7}  style={
              {
                  backgroundImage:'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://style-republik.com/wp-content/uploads/2022/11/POSTER-COMING-SOON-BEHIND-THE-LABEL.png)',
                  backgroundPosition: '70%',
                  backgroundSize: 'cover',
                  borderRadius: '30px'}
              }>
               
              </Col>
              <Col xs={5} style={{
                right:'20px',
                background:'yellow',
                borderRadius:'30px',
                zIndex:'-1',
                fontSize:'13px',
                padding:'20px'
              }}>
                
                <div style={{
                  width:'90%',
                  float:'right'
                }}>
                      <b>Trải nghiệm mua sắm hài lòng với #Coolmate</b>
                      <div style={{
                        margin:'2vh 0'
                      }}>
                        <p style={{margin:'0'}}>Giá cả hợp lý</p>
                        <p style={{margin:'0'}}>Dịch vụ 100% hài lòng</p>
                        <p style={{margin:'0'}}>60 ngày đổi trả</p>
                        <p style={{margin:'0'}}>Tự hào sản xuất tại Việt Nam</p>
                      </div>
                      
                      <Button variant='light' style={{
                        borderRadius:'30px',
                        width:'max-content',
                        fontSize:'10px'
                      }}>Tìm hiểu thêm</Button>
                </div>
              </Col>
              <Row style={{
                position:'absolute',
                height:'100%',
                width:'50%',
                zIndex:'-2',
                background:'yellow',
                left:'45vw',
                borderRadius:'30px'
              }}>
              </Row>
            </Row>
            <Row style={{
              marginTop:'10px',
              position:'relative',
              borderRadius:'50px',
              background:'black',
              height:'5vh'
            }}>
                <marquee style={{
                  width:'70%',
                  color:'white',
                  padding:'1%'
                }} behavior="" direction="">
                  <div style={{
                    marginTop:'5px'
                  }}>
                    <b>CoolClub</b>- Ưu đãi <b>nhiều hơn</b>, mua sắm vui hơn. Nhận ngay <b>ưu đãi 7%</b> cho lần mua sắm tiếp theo
                  </div>
                  </marquee>
                <Button style={{
                  position:'absolute',
                  width:'30%',
                  right:'0vw',
                  height:'5vh',
                  borderRadius:'30px',
                  fontSize:'13px'
                }}> Gia nhập ngay </Button>
            </Row>
            <Row style={{
              position:'relative',
              height:'150px',
              marginTop:'10px',
              backgroundSize: 'cover',
              backgroundPosition:'80% 50%',
              borderRadius:'30px',
              backgroundImage:'url(https://photo2.tinhte.vn/data/attachment-files/2021/05/5467613_cover_coolmate.jpg)',
            }}>
                <Button variant='dark' style={{
                position:'absolute',
                top:'7.5vh',
                borderRadius:'30px',
                left:'25vw',
                backgroundColor: 'rgba(0,0,0,0.5)',  
                width:'max-content'
              }}>Câu chuyện Coolmate</Button> 
            </Row>
            <Row style={{
             position:'relative',
             height:'150px',
             marginTop:'10px',
             backgroundSize: 'cover',
             backgroundPosition:'80% 20%',
             borderRadius:'30px',
             backgroundImage:'url(https://mcdn.coolmate.me/image/October2022/van-phong-cu-don-so-coolmate-ha-noi.jpg)',
            }}>
            
              <Button variant='dark' style={{
                position:'absolute',
                top:'7.5vh',
                borderRadius:'30px',
                left:'25vw',
                backgroundColor: 'rgba(0,0,0,0.5)',  
                width:'max-content'
              }}>Dịch vụ hài lòng 100%</Button>
            </Row>
    </Container>
  );
}

export default Body;