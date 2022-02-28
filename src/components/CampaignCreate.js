import React from 'react';
import {Link} from 'react-router-dom';
import DateRange from '../DateRange';
//import CampTable from './CampTable';
import CreativeTable from './CreativeTable';
import Navibar from './Navibar';

const CampaignCreate = () => {
   //import React, { Fragment, useState } from "react";
  const [data, setData] = React.useState();

  const handleSave = (event) =>{
     console.log(data);
     event.preventDefault();
  }
  
  const handleChange = (event) =>{
     //console.log(event.target.name, event.target.value);
     setData({
        ...data,
        [event.target.name]: event.target.value
     })
  }

  const handleButton = (event) =>{
   setData({
      ...data,
      [event.target.name]: event.target.value
   })
  }
   
  return (
     <div>
         <Navibar /><br></br>
   <div className="bg-light">
      
    <div className="wrapper">
    
        <form onSubmit={handleSave}>
        <h4>Create campaign</h4><br></br>
        <div className="title">
        <h6>Campaign details</h6>
        </div>
        <div className="form">
            
           <div className="col-lg-3">
              
              <input 
              type="text" 
              className="form-control"
              name="campname"
              onChange={handleChange}
              placeholder="Campaign Name"
              />
              
           </div>  
            <div className="col-lg-6">
              
              <input 
              type="text" 
              className="form-control"
              name="category"
              onChange={handleChange}
              placeholder="Ads category"
              />
           </div>  
           <div className="col-lg-6">
              
              <input 
              type="currency" 
              className="input"
              name="budget"
              onChange={handleChange}
              placeholder="Budget"
              />
           </div>  
          
           <div className="date">
           <br></br>
              <DateRange />
           </div>
           
           <div class="main2">
            <Link to="/creative" class="btn btn-primary">Create creative</Link>            
           </div>
    
            <div className="table-container">
               <CreativeTable />
            </div>
            <div class="main2">
            <Link to="/campcrea" role="button" type="submit" class="btn btn-primary" onClick={handleButton}>Save</Link> 
           </div>
           
        
        </div>
        </form>   
    </div>
    </div>
    </div>	
  );

}

export default CampaignCreate;
