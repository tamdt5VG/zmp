import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Box, Text, Picker, Page } from "zmp-ui";

const Cart = () => {
    const [cities,setCities] = useState('')
    const [districts,setDistricts] = useState('')
    const [city,setCity] = useState('')
    const [district,setDistrict] = useState('')
    const [cityURL,setCityURL] = useState('')
    const [mounted,setMounted] = useState(false)

    useEffect(() => {
        if(mounted != true ){
            var data = [];
            axios({
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                },
                baseURL: 'https://cdn.jsdelivr.net/gh/thien0291/vietnam_dataset@1.0.0/Index.json',
                })
            .then( async function (response) {
                for (const [key, value] of Object.entries(response['data'])) {
                    data.push({
                        value: value['code'],
                        displayName: key,
                        path: value['file_path'],
                        });
                    }
            }).catch(function (error){
                console.log(error);
            })
            setCities(data);
            setMounted(true)
        }
        
    },[])

    useEffect(() => {
        let URL = cityURL.slice(1)
        var data = [];
        
        if(cities && cityURL){
            axios({
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                },
                baseURL: `https://cdn.jsdelivr.net/gh/thien0291/vietnam_dataset@1.0.0${URL}`,
                })
            .then( async function (response) {
                for (const [key, value] of Object.entries(response['data']['district'])) {
                    data.push({
                        value: key,
                        displayName: value['name'],
                        });
                    }
            }).catch(function (error){
                console.log(error);
            })
        }
        setDistricts(data);
    }, [cityURL])

    const changeCity = async (value) => {
        if(value['city']){
            setCity(value['city']['value'])
            setCityURL(value['city']['path'])
        }
    }

    const changeDistrict = async (value) => {
        if(value['districts']){
            setDistrict(value['districts']['displayName'])
        }
    }

  return (
    <Container fluid>
      <Row>
        <h2>Giỏ hàng</h2>
    </Row>
    <hr />
    <Row>
        <Col xs={8}>
            <p>Tạm tính</p>
            <p>Giảm giá</p>
            <p>Phí giao hàng</p>
        </Col>
        <Col xs={4} style={{
            textAlign:'right'
        }}>
            <p>0đ</p>
            <p>0đ</p>
            <p>Miễn phí</p>
        </Col>
    </Row>
        <hr />
    <Row>
        <Col xs={8}>
            <p>Tổng</p>
        </Col>
        <Col xs={4}  style={{
            textAlign:'right'
        }}>
            <p>0đ</p>
        </Col>
    </Row>
    
    <Row>
    </Row>
    <Row>
        <p>Bạn đã có tài khoản? Đăng nhập ngay</p>
    </Row>
    <Row>
        <Col xs={6} style={{
            paddingRight:'0'
        }}>
            <Form.Control
                style={{
                    borderRadius:'15px'
                }}
                type="text"
                placeholder='Họ tên'
            />
        </Col>
        <Col xs={6}>
            <Form.Control
                style={{
                    borderRadius:'15px',
                }}
                type="number"
                placeholder='Số điện thoại'
            />
        </Col>
        <Col xs={12} style={{
            marginTop:'10px'
        }}>
            <Form.Control
                style={{
                    borderRadius:'15px',
                }}
                type="email"
                placeholder='Email'
            />
        </Col>
        <Col xs={12} style={{
            marginTop:'10px'
        }}>
            <Form.Control
                style={{
                    borderRadius:'15px',
                }}
                type="text"
                placeholder='Địa chỉ(ví dụ: 123 Bạch Đằng, Phường 15)'
            />
        </Col>
        <Col xs={12} style={{
                marginTop:'2vh'        
            }}>
        <Picker
            label="Thành Phố"
            placeholder="Placeholder"
            mask
            maskClosable
            title="Thành Phố"
            action={{
                text: "Close",
                close: true,
            }}
            onChange={
                async (value) => {
                    changeCity(value)
                }
            }
            // disabled
            data={[
              {
                options: cities,
                name: "city",
              },
            ]}
          />

          <Picker
            label="Quận / Huyện"
            placeholder="Placeholder"
            mask
            maskClosable
            title="Quận / Huyện"
            action={{
              text: "Close",
              close: true,
            }}
            onChange={
                (value) => changeDistrict(value)
            }
            // disabled
            data={[
              {
                options: districts,
                name: "districts",
              },
            ]}
          />
        </Col>
    </Row>
    <hr />
    </Container>
  );
}

export default Cart;