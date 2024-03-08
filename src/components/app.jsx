import React , { useEffect, useState }from 'react';
import { Route} from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider, BottomNavigation, Icon} from 'zmp-ui'; 
import { RecoilRoot } from 'recoil';
import HomePage from '../pages';
import DetailPage from '../pages/detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const MyApp = () => {
  const [products, setProducts]= useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [dynamicRoutes, setDynamicRoutes] = useState([]);

  const fetchProduct = async () => {
   axios({
     method: 'get',
     headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'skip-browser-warning'
    },
     baseURL: 'https://3376-115-79-209-221.ngrok-free.app/api/zalo-mini-app/get-product',
     params: {
       pwd: '1234'
     },
   })
     .then( async function (response) {
      console.log(response)
       setProducts(response['data']['data'])
       setIsLoading(false); // Mark fetch as complete
      }).catch(function (error){
       console.log(error);
     })
 }

 useEffect(() => {
  // Định nghĩa hàm hoặc logic để tạo mảng routes dựa trên biến động d
  const routes = products.map((item) => (
    <Route path={`/${item.slug}`} element={<DetailPage data={item}></DetailPage>}>
      {/* Component tương ứng với mỗi item trong mảng d */}
    </Route>
  ));

  // Set state với mảng routes đã tạo
  setDynamicRoutes(routes);
}, [products]); // useEffect sẽ được gọi lại mỗi khi biến động d thay đổi

 useEffect( () => {
     fetchProduct()
 },[])

  return (
    <RecoilRoot>
      <App >
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
          {!isLoading && <Route path="/" element={<HomePage data={products}></HomePage>}></Route>}
          {dynamicRoutes}
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
}
export default MyApp;