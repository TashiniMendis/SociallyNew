import {useState, useEffect} from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
//import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


function CampTable() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios("https://jsonplaceholder.typicode.com/comments").then((res) =>{
        console.log(res.data);
        setData(res.data);
        
    });
    };

    const columns=[
    {
        datafield: "",
        text: "Status",
        formatter: (cellContent, row) =>{
            return(
                <>
                    <BootstrapSwitchButton
                        checked={false}
                        onstyle="light"
                    />
                </>
            )
               
            
        }

    },
    {
        dataField: "email",
        text: "Email",
        sort: true,
    },
    {
        dataField: "postId",
        text: "Product ID",
        sort: true,
    },
    {
        dataField: "name",
        text: "Name",
        sort: true,
    },
    {
        dataField: "",
        text: "Action",
        formatter: (cellContent, row) => {
          
            return (
              <div>
              <button className="btn btn-outline-danger btn-sm"><FaTrashAlt /></button>
              <button className="btn btn-outline-primary btn-sm"><FaRegEdit /></button>
              </div>
            );
          
        }
        

    }
]





  return (
    <div>
        <BootstrapTable bootstrap4 keyField="id" data={data} columns={columns}  pagination={paginationFactory()}/>
    </div>
  )
}

export default CampTable;

//<BootstrapTable bootstrap4 keyField="id" data={data} columns={columns} striped hover condensed pagination={paginationFactory()}/>
/*Pagination
const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });*/

  //SEARCH BAR
  //const { SearchBar, ClearSearchButton } = Search;
/*<ToolkitProvider
        bootstrap4
        keyField='id'
        data={data}
        columns={columns}
        search
      >
        {
          props => (
            <div>
              <h6>Input something at below input field:</h6>
              <SearchBar {...props.searchProps} />
              <ClearSearchButton {...props.searchProps} />
              <hr />
              <BootstrapTable
                
                pagination={paginationFactory()}
                {...props.baseProps}
              />
            </div>
          )
        }
      </ToolkitProvider>*/