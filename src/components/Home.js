import React, { Component } from 'react';
import AuthUserContext from './AuthUserContext';
import {Link} from 'react-router-dom';
import * as routes from '../constants/routes';
import withAuthorization from './withAuthorization';
import { db } from '../firebase';
import './Dott.css';
import './home_new.css';

class HomePage extends Component {

  

  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };

    
  }


  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    


    return (
      <div className='cg' align='center'>
        <AuthUserContext.Consumer>
  {authUser =>
  
    <div>
      <p><font color='white' size='5'>Hello {authUser.email}! Welcome to your Home Page.</font></p>
    </div>
  
  }
</AuthUserContext.Consumer>
        
        
        <ul>
    <li><Link to={routes.Info}>Get Information </Link></li>

    <li align='right'><Link to={routes.Buy}>Buy Medicine from App</Link></li>

    <li align='right'><Link to={routes.Upload}> Upload Prescription </Link></li>
    
         
  </ul>


        {/* { !!users && <UserList users={users} /> } */}
      </div>
    );
  }
}



const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);