import React , { useEffect, useState }from 'react';
import '../../css/carousel-product-cart.css'
import 'react-multi-carousel/lib/styles.css';

const ProductCard = () => {
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

  return (
    <div className="card">
        <img src="https://www.seahouseimagery.com/cdn/shop/products/WM_Stock_Photo_Coffee_IMG_6539_15x15_inch_1080x.jpg?v=1574920095" className='product-card-image' />
        <h2>Product</h2>
        <p style={{
          fontSize:'14px'
        }}>100.000đ <strike>199.000đ</strike> <span style={{
          color:'red'
        }}> -100% </span> </p>
    </div>
  );
}

export default ProductCard;