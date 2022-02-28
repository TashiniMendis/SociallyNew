import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button} from "reactstrap";
import { FaEye } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

//import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";



//const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "nama",
    text: "Nama",
    sort: true,
  },
  {
    dataField: "alamat",
    text: "Alamat",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          
          <button className="btn btn-outline-success btn-sm"><FaEye /></button>
          <button className="btn btn-outline-danger btn-sm"><FaTrashAlt /></button>
          <button className="btn btn-outline-primary btn-sm"><FaRegEdit /></button>
        </div>
      );
    },
  },
];


const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
]

/*const mapStateToProps = (state) => {
    return {
      getUsersList: state.users.getUsersList,
      errorUsersList: state.users.errorUsersList,
    };
  };*/

const TableComponent = (props) => {

    
  
    return (
        <Container>
          
              
          <BootstrapTable
           bootstrap4
           keyField="id"
           data={props.users}
           columns={columns}
           defaultSorted={defaultSorted}
           pagination={paginationFactory()}
          />
            
    </Container>
    );
          };

export default TableComponent;
      