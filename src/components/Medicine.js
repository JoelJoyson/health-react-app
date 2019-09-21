import React, { Component } from 'react';
import ApiCallPage from './Apicall';
import * as routes from '../constants/routes';
import { Link, withRouter} from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';

import { auth,db } from '../firebase';
import './Dott.css';



const MedicinePage=({history})=>
  <div className='hg' align='center' color='white' height='10'>
    <h1><font color='Black' size='50'>Medicine Info Page</font></h1>
    <MedicineForm history={history} />
  </div>


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });
  const INITIAL_STATE = {
  medicine:'',
  };


class MedicineForm extends Component {
    constructor() {
      super();
  
      this.state = { ...INITIAL_STATE };
    

        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit = (event) => {
      
        const {
          medicine,
        } = this.state;
        const cookies = new Cookies();
       cookies.set('name',this.state.medicine);


   


        const {
            history,
          } = this.props;
        this.props.history.push({
           pathname:'./apicall',
            state: {medicine: this.state.medicine}  
        })
       
       {/* <Apicall medicine={this.state.medicine} /> */}

    
    }
        
render(){
    const {
       medicine,
      } = this.state;
 
    const isInvalid =
      medicine === '';
      
return (

    <form onSubmit={this.onSubmit} size='500'>
    <input height='200' width='200'
        value={medicine}
        onChange={event => this.setState(byPropKey('medicine', event.target.value))}
        type="text"
        placeholder="Enter a medicine name"
      />
      <button disabled={isInvalid} type="submit">
        Submit
      </button>


    </form>
  );
}
}
      
export default withRouter(MedicinePage);    

export {
    MedicineForm
};