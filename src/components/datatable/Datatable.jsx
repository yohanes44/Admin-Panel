// import { PartyModeSharp } from "@mui/icons-material";
// import "./datatable.scss"


// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

// import {userColumns, userRows} from "../../../src/dataTableSource"
// import { Link } from "react-router-dom";


export default function Datatable() {

  // const actionColumn = [
  //   {
  //   field: "action", 
  //   headerName: "Action", 
  //   width: 200,
  //   renderCell: ()=>{
  //   return (<div className="cellAction">
  //     <Link to="/users/test" style={{textDecoration: "none"}}>
  //     <div className="viewButton">
  //       View
  //     </div>
  //     </Link>
  //     <div className="deleteButton">
  //       Delete
  //     </div>
  //   </div>)
  // } }
  // ]


  return (
    <div className="dataTable">
       {/* <div className="datatableTitle">
          <div>Add New User</div>
          <Link to="/users/new" className="link">
            <div>Add New</div>
          </Link>
       </div>
         <DataGrid  className="dataGrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      /> */}
    </div>
  )
}
