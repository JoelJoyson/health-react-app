import React, { Component } from 'react';
import DiseaseApiCallPage from './Apicall';
import * as routes from '../constants/routes';
import { Link, withRouter} from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';

import { auth,db } from '../firebase';
import './Dott.css';



const DiseasePage=({history})=>
  <div className='kg' align='center' color='white' height='10'>
    <h1><font color='White' size='50'>Diseases Info Page</font></h1>
    <DiseaseForm history={history} />
  </div>


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });
  const INITIAL_STATE = {
  disease:'',
  };


class DiseaseForm extends Component {
    constructor() {
      super();
  
      this.state = { ...INITIAL_STATE };
    

        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit = (event) => {
      
        const {
          disease,
        } = this.state;
        const cookies = new Cookies();
       cookies.set('diseasename',this.state.disease);


   


        const {
            history,
          } = this.props;
        this.props.history.push({
           pathname:'./diseaseapicall',
            state: {disease: this.state.disease}  
        })
       
       {/* <Apicall disease={this.state.disease} /> */}

    
    }
        
render(){
    const {
       disease,
      } = this.state;
 
    const isInvalid =
      disease === '';
      
return (

    <form onSubmit={this.onSubmit} size='500'>
    <input height='200' width='200'
        value={disease}
        onChange={event => this.setState(byPropKey('disease', event.target.value))}
        type="text"
        placeholder="Enter a disease name"
      />
      <button disabled={isInvalid} type="submit">
        Submit
      </button>


    </form>
  );
}
}
      
export default withRouter(DiseasePage);    

export {
    DiseaseForm
};