import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import InfoPage from './Info';
import MedicinePage from './Medicine';
import ApiCallPage from './Apicall';
import DiseasePage from './diseases';
import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';
import DiseaseApiCallPage from './diseaseapicall';


const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route
        exact path={routes.Info}
        component={() => <InfoPage />}
      />
      <Route exact path={routes.Medicinal} component={() =><MedicinePage />} />
      <Route exact path={routes.APICALL} component={() =><ApiCallPage />} />
      <Route exact path={routes.Diseases} component={()=><DiseasePage/>}/>
      <Route exact path={routes.DiseaseApiCall} component={()=><DiseaseApiCallPage/>}/>
      
    </div>

  </Router>

  

export default withAuthentication(App);