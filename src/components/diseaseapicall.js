import React, { Component } from 'react';
import * as routes from '../constants/routes';
import { Link, withRouter} from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';

import './Dott.css';
 
const DiseaseApiCallPage=({disease})=>
  <div align='center' className='jg'>
    <h1><font color='white'>Disease inform Page</font></h1>  
    <DiseaseApiCallForm /> 
  </div>

class DiseaseApiCallForm  extends Component {
    constructor(props) {
      super(props);
      const cookies = new Cookies();
    
      this.state = {
          error:null,
          disinfo:'',
          isLoading:false,
          name:cookies.get('diseasename'),
         
      };
          
      }
      

  componentDidMount(){


    const {
        name
      } = this.state;
      
  
      //var url=`http://www.healthos.co/api/v1/autocomplete/diseases/brands/${hey}`
      //console.log
  
    //fetch("http://www.healthos.co/api/v1/autocomplete/diseases/brands/para" ,{
        fetch(`https://www.healthos.co/api/v1/search/diseases/${this.state.name}`,{
        headers: {
            'Authorization': 'Bearer e8f2de9a31897318e69f74c589dbce259c1a9007cbd830300f2bb683b4fb535b'}})
    .then(res => res.json())
    .then(
      (result) => {
          //console.log('Result'+result);
       // const hey=  result.map(obj => console.log(Object.values(obj)));
        //console.log(hey);
        this.setState({
            
          isLoaded: true,   
          disinfo: result
        });
    },
    (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}

          render(){
        
            const {error,isLoaded, disinfo } = this.state;
         var  myObjec1=disinfo[0];
            
                   
            var arr = [];
            var a=0
               for(var a in myObjec1){
                 arr.push(myObjec1[a]);
               };
           console.log('arr',arr);
            
              console.log("Myobj",myObjec1)
          
               var name=JSON.stringify(arr[0]);
             var   cat=JSON.stringify(arr[1]);
              var  info=JSON.stringify(arr[2]);
              console.log(info)
                       
               console.log("type",typeof(arr))
               console.log("type",typeof(name))
               console.log("arris",arr);
               console.log("nameis",name);
            if (error) {
                return <div>Error: {error.message}</div>;
              } else if (!isLoaded) {
                return <div><font color='white'>Loading...</font></div>;
              } else {
                return (
            <ul >
            
            <font color='white'> 
            <li>Disease: {name}</li><br></br>
                <br></br>
            <li>Category: {cat}</li><br></br>
                <br></br>
            <li>More Info:   {info}</li><br></br>

                <br></br>
                 
                 <li>tsting {JSON.stringify(arr[0])}</li>

                       
                       </font>
               
            </ul>
                );
              }
            }
         
          } 

export default DiseaseApiCallPage;