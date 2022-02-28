import React from 'react';
import FileUp from './FileUp';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import Navibar from './Navibar';


const Creative = () => {
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

   const[creativeType, setCreativeType] = useState("")
   const creativeTypeHandle=(e)=>{
      setCreativeType(e.target.value)     
   }
   console.log(creativeType)
  return(
     
   <div className="bg-light">
      <Navibar /><br></br>
      <div class="wrapper">
       
         <form onSubmit={handleSave}>
         <h4>Ad preferences</h4><br></br>
            <div class="form-outline mb-4">
               
               <input 
               type="text" 
               id="form6Example3" 
               class="form-control" 
               name="heading"
               placeholder='Heading'
               onChange={handleChange}
               />
            </div>
 
            <div class="row mb-4">
               <div class="col">
                  <div class="form-outline">
                 
                  <input 
                  type="text" 
                  id="form6Example1" 
                  class="form-control" 
                  name="costpersale"
                  placeholder='Cost Per Sale'
                  onChange={handleChange}
                  />
                  </div>
               </div>
               <div class="col">
                  <div class="form-outline">
                  
                  <input 
                  type="text" 
                  id="form6Example2" 
                  class="form-control"
                  name="destinationurl" 
                  placeholder='Destination URL'
                  onChange={handleChange}
                  />
                  </div>
               </div>
            </div>

            <label><h6>Creative type</h6></label>  
            

            <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="image" onClick={creativeTypeHandle} />
               <label class="form-check-label" for="flexRadioDefault1">
                  Single Image
               </label>
            </div>
            <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="video" onChange={creativeTypeHandle} />
               <label class="form-check-label" for="flexRadioDefault1">
                  Single Video
            </label>
            </div>
            <div class="form-check">
               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="I&V" onChange={creativeTypeHandle} />
               <label class="form-check-label" for="flexRadioDefault2">
                  Image & Video
               </label>
            </div>

            <div class="form-outline mb-4">
               <br></br>
               <label class="form-label" for="form6Example7"><h6>Discription</h6></label>
               <textarea class="form-control" id="form6Example7" rows="4" ></textarea>  
            </div>
 
            <label><h6>Upload Thumbnail media</h6></label>
            <div>
               <FileUp />               
            </div>

            <br></br>     
            <label><h6>Upload media</h6></label>
            <div>
               <FileUp />               
            </div>
                 
            <br></br>
            <div className="inputfield">
              <Link to="/campaign" class="btn btn-primary" id="right-panel-link" role="button" >Submit</Link>           
            </div>
         </form>
      </div>

   </div>
  );
}

export default Creative;


