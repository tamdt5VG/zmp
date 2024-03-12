import React , { useEffect, useState }from 'react';
import '../../css/carousel-product-cart.css'
import Button from 'react-bootstrap/Button';

const CategoryCard = () => {
  const [menu,setMenu] = useState('flashsale1');

  return (
    <div style={{
        position:'relative',
        marginTop:'15px',
        width:'max-content',
    }}>
        <img width={'180vw'} height={'300vh'} 
        style={{
            borderRadius:'30px'
        }}
        src="https://media.fashionnetwork.com/m/8298/19e5/c8e6/830e/12b2/78f9/3ada/e887/c999/6f2a/6f2a.jpg"  />
        <Button variant='light' style={{
                        margin:'auto',
                        position:'absolute',
                        top:'15vh',
                        left:'7vw',
            }}>Đồ mặc trong</Button>
    </div>
  );
}

export default CategoryCard;