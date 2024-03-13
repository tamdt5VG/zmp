import React , { useEffect, useState }from 'react';
import { Route} from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider, BottomNavigation, Icon} from 'zmp-ui'; 
import { RecoilRoot } from 'recoil';
import HomePage from '../pages';
import DetailPage from '../pages/detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import BottomNavigationPage from '../pages/partials/bottomNavigation';
import MarQuee from '../pages/partials/marquee';
import Cart from '../pages/cart';

const MyApp = () => {

  return (
    <RecoilRoot>
      <App >
      <SnackbarProvider>
        <ZMPRouter>
          <MarQuee></MarQuee>
          <AnimationRoutes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
          </AnimationRoutes>
          <BottomNavigationPage></BottomNavigationPage>
        </ZMPRouter>
      </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
}
export default MyApp;