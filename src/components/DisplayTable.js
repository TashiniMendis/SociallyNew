import React from "react";

import { FaEye } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import {Link} from 'react-router-dom';

class DisplayTable extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            list: []
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    callAPI(){
        //fetch data from API
        fetch("http://dummy.restapiexample.com/api/v1/employees").then(
            (response)=>response.json()
        ).then((data)=>{
            console.log(data)
            this.setState({
                list:data.data
            })
        })
    }

    render(){
        let tb_data = this.state.list.map((item)=>{
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.employee_salary}</td>
                    <td>{item.employee_age}</td>
                    <td>
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group" role="group" aria-label="Button group example">
                        <button className="btn btn-outline-success btn-sm"><FaEye /></button>
                        <button className="btn btn-outline-danger btn-sm"><FaTrashAlt /></button>
                        <button className="btn btn-outline-primary btn-sm"><Link to="/edit" ><FaRegEdit /></Link></button>
                        </div>
                    </div>    
                    </td>
                </tr>
            )
        })
        return(
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Creative Id</th>
                            <th>Heading</th>
                            <th>Cost Per Sale</th>
                            <th>Creative Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tb_data}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default DisplayTable;