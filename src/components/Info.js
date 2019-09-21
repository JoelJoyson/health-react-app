import React from 'react';
import {Link} from 'react-router-dom';
import * as routes from '../constants/routes';

import './Dott.css';


const InfoPage = () =>
<body>
<div className='dg' align='center'>
          
 <p><font color='white' size='5'>This is an Information/Wiki Page.</font></p>
 <ul>
      <li><Link to={routes.Medicinal}>For Medical Info </Link></li>
      <li align='right'><Link to={routes.Diseases}>Enter here for Information on Diseases</Link></li>
      <li align='right'><Link to={routes.Food}> Food Calories Information</Link></li>
           
  </ul> 
</div>
</body> 



  export default InfoPage;