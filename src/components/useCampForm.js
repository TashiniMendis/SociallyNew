import { useState, useEffect } from "react";
import axios from "axios";

const useCampForm = (submitForm) => {

    const [values,setValues] = useState({
        "campaignName": "",
        "budget": "",
        "adCategory": "",
        "startDate": "",
        "endDate": "",
        //"deletedAt": null,
        //"adveID": 1
    })

    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    async function handleButton(event){
        event.preventDefault();
        setDataIsCorrect(true);

        var axios = require('axios');
var data = JSON.stringify({
  "campaignName": values.campaignName,
  "budget": values.budget,
  "adCategory": values.adCategory,
  "startDate": values.startDate,
  "endDate": values.endDate,
  //"deletedAt": null,
  //"adveID": 1
});

var config = {
  method: 'post',
  url: 'http://localhost:3000/campaign/createCampaign',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9AZ21haWwuY29tIiwiaWF0IjoxNjQ1MzQ2NjM3LCJleHAiOjE2NDUzNDY2OTd9.58RgwD0SjdaXWYw19oHX35PTXZQGKTfFsJym_IcH_eg', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});



    }

   // const [data, setData] = React.useState();

    const handleSave = (event) =>{
        console.log(values);
        event.preventDefault();
     }
     
   
     const handleChange = (event) =>{
        //console.log(event.target.name, event.target.value);
        setValues({
           ...values,
           [event.target.name]: event.target.value
        })
     }
     
//      const handleButton = (event) =>{
//       //console.log(event.target.name, event.target.value);
//       setData({
//          ...data,
//          [event.target.name]: event.target.value
//       })
//    }
   return { handleChange, handleButton,handleSave, values };
}
export default useCampForm;