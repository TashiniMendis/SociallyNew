import React from 'react';
import FileUp from './FileUp';
import {Link} from 'react-router-dom';


function Edit() {
  return(
   <div className="bg-light">
      <h4>Ad preferences</h4>
      <div class="wrapper">
       
         <form>
            <div class="form-outline mb-4">
               <label class="form-label" for="form6Example3">Heading</label>
               <input type="text" id="form6Example3" class="form-control" />
            </div>
 
            <div class="row mb-4">
               <div class="col">
                  <div class="form-outline">
                  <label class="form-label" for="form6Example1">Cost Per Sale</label>
                  <input type="text" id="form6Example1" class="form-control" />
                  </div>
               </div>
               <div class="col">
                  <div class="form-outline">
                  <label class="form-label" for="form6Example2">Destination URL</label>
                  <input type="text" id="form6Example2" class="form-control" />
                  </div>
               </div>
            </div>

            <label>Creative type</label>  
            <div class="form-check">
               <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
               <label class="form-check-label" for="flexCheckDefault">Single Image</label>
            </div>
            <div class="form-check">
               <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
               <label class="form-check-label" for="flexCheckDefault">Single Video</label>
            </div>
            <div class="form-check">
               <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
               <label class="form-check-label" for="flexCheckDefault">Image & Video</label>
            </div>

            <div class="form-outline mb-4">
               <label class="form-label" for="form6Example7">Discription</label>
               <textarea class="form-control" id="form6Example7" rows="4"></textarea>  
            </div>
 
            <label>Upload Thumbnail media</label>
            <div>
               <FileUp />               
            </div>

            <br></br>     
            <label>Upload media</label>
            <div>
               <FileUp />               
            </div>
                 
            <br></br>
            <div className="inputfield">
              <Link to="/campaign" class="btn btn-primary" id="right-panel-link" role="button" >Update</Link>           
            </div>
         </form>
      </div>

   </div>
  );
}

export default Edit;


