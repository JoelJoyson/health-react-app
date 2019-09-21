

import React, { Component } from 'react';
import * as routes from '../constants/routes';
import { Link, withRouter} from 'react-router-dom';
import {MedicineAppEngine,MedicineAppForm} from './Medicine';
import { withCookies, Cookies } from 'react-cookie';

import './Dott.css';
 
const ApiCallPage=({medicine})=>
  <div align='center' className='jg'>
    <h1><font color='white'>Medicine Info Page</font></h1>
    <ApiCallForm  />
  </div>


class ApiCallForm extends Component {
    constructor(props) {
      super(props);
      const cookies = new Cookies();
     
      this.state = {
          error:null,
          medinfo:'',
          isLoading:false,
          name:cookies.get('name'),
          mname:'',
           price:'',
           manu:'',
           consist:'',
           valid:'',
           consit:'',
          timout:'',
         additionalinfo:''
      };
          
      }
      

  componentDidMount(){


    const {
        name
      } = this.state;
  
      //var url=`http://www.healthos.co/api/v1/autocomplete/medicines/brands/${hey}`
      //console.log
  
    //fetch("http://www.healthos.co/api/v1/autocomplete/medicines/brands/para" ,{
        fetch(`https://www.healthos.co/api/v1/autocomplete/medicines/brands/${this.state.name}`,{
        headers: {
            'Authorization': 'Bearer 5d7a098764bac0bd9960f8236de8d765ba59f921e728aeb3a06e0841e0e886f0'}})
    .then(res => res.json())
    .then(
      (result) => {
          //console.log('Result'+result);
        
        this.setState({
           
          isLoaded: true,   
          medinfo: result
        });
    },
    (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
    .then((result)=>{
      var myObjec=this.state.medinfo;
     
      var myObjec1=myObjec[0];
    	var arr = [];
        var a=0
           for(var a in myObjec1){
             arr.push(myObjec1[a]);
           };
       
        var seventh=arr[7];
        var sev=[];
           b=0;
           for( var b in seventh){
               sev.push(seventh[b]);
           }
        var eight=sev[0];
        var eg=[];
           c=0;
           for (var c in eight){
               eg.push(eight[c]);
           }
           
           

        var nineth=arr[8];
        var nin=[];
           d=0;;
           for( var d in nineth){
               nin.push(nineth[d]);
           }
           
           var mdname=JSON.stringify(arr[0]);
           var mprice=JSON.stringify(arr[4]);
          var  manufacturer=JSON.stringify(arr[6]);
           var mconsist=JSON.stringify(eg[0]);
           var mvalid=JSON.stringify(nin[1]);

           

          fetch(`https://www.healthos.co/api/v1/search/medicines/generics/${mconsist}`,{
            headers: {
                'Authorization': 'Bearer 5d7a098764bac0bd9960f8236de8d765ba59f921e728aeb3a06e0841e0e886f0'}})
        .then(res => res.json())
        .then(
          (output) => {
              //console.log('Result'+result);
            
              this.setState({
                mname:mdname,
                price:mprice,
                manu:manufacturer,
                consist:mconsist,
                valid:mvalid,
                isLoaded: true,  
                timout:'30', 
                consit: output
               });
            
        },
        (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
        .then((resul) => {
          var data=this.state.consit;
        
          var final_data=data[0]
          var ars = [];
          var t=1
             for(var t in final_data){
               ars.push(final_data[t]);
             }
            console.log(ars[1]);
             fetch(`https://www.healthos.co/api/v1/medicines/generics/${ars[1]}`,{
               headers: {
                   'Authorization': 'Bearer 5d7a098764bac0bd9960f8236de8d765ba59f921e728aeb3a06e0841e0e886f0'}})
                   .then(res => res.json())
                   .then(
                     (outdata) => {
         this.setState({
            
           isLoaded: true,   
          additionalinfo:outdata 
         });
     },
     (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       })
        });

    })
    
   
    
    
}

          render(){
        
            const {error, hey, isLoaded, medinfo,mname,price,manu,consist,valid,consit,timout,additionalinfo} = this.state;
           
          var hello=this.state.consit[0];
            var arrs = [];
            var z=2
            for(var z in hello){
             arrs.push(hello[z]);
            }
          const uses=arrs[2];
          var medicaluses = JSON.stringify(uses);
        
          var addinfo=this.state.additionalinfo;
            var ray=[]
            var q=3
            for(var q in addinfo){
              ray.push(addinfo[q])
            }
          console.log(ray[3])

            if (error) {
                return <div>Error: {error.message}</div>;
              } else if (!isLoaded) {
                return <div><font color='white'>Loading...</font></div>;
              } else {
                if (!this.state.mname && this.state.timout=='30'){
                  return (<div> <br></br><font color='Red'size='5'>
                  No Information found for the requested Medicine. Please check the name you've entered!</font> </div>)}
                else if(!this.state.mname){
                  return (null)
                }
              else{           
                  return (

            <ul>
            
            <font color='white'> 
                <li>Medicine: {this.state.mname}</li><br></br>
                <br></br>
                <li>Price: {this.state.price}</li><br></br>
                <br></br>
                <li>Manufacturer:  {this.state.manu}</li><br></br>
                <br></br>
                 <li>Constituents:  {this.state.consist}</li><br></br>
                 <br></br>
                    <li>{valid}</li><br></br>

                  <br></br>
                    <li></li><font color='red'>Most commonly used for the following diseases/Infections</font> <br></br>
                    {medicaluses  }<br></br>

                  <br></br> <b><font color='red'>Instructions:</font></b> {ray[3]}<br></br>
                       
                  <br></br> <b><font color='red'>Side Effects: </font></b> {ray[5]}<br></br>

                  <br></br> <b><font color='red'>How it works:</font></b> {ray[6]}<br></br>

                  <br></br> <b><font color='red'>Uses of {this.state.consist}:</font></b> {ray[8]}<br></br>


                
                       </font>
               
            </ul>
            
                );}
              }

              
            }
         
          } 
export default ApiCallPage;