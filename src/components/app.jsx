import React , { useEffect, useState }from 'react';
import { Route} from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider, BottomNavigation, Icon} from 'zmp-ui'; 
import { RecoilRoot } from 'recoil';
import HomePage from '../pages';
import DetailPage from '../pages/detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const MyApp = () => {

  return (
    <RecoilRoot>
      <App >
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
}
export default MyApp;