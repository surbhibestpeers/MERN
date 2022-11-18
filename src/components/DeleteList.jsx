import {Table, TableBody,TableCell, TableHead, TableRow,} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DeleteList = () => {
 
  const {aduser} = useSelector((state)=>state.FetchReducer)
 
 const data = [aduser]

  const navigate = useNavigate();
  const tableHead = [ "Id","Name","Phone","Email","City","Zip-Code","Address","Date of Employement","Date of Birth"];
 
  return (
    <div className="back_1">
    <div className="center_1">
        <h1 className="list_user">List of Deleted Users</h1>
        <button variant="contained" className="button_1" onClick={()=> navigate("/")}>
          Back to List
        </button>

        <Table>
          <TableHead className="t-head">
            <TableRow>
            {tableHead.map((data) => (
              <TableCell>{data}</TableCell>
            ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user)=> (
              <TableRow>
                <TableCell >{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.city}</TableCell>
                <TableCell>{user.zipcode}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.dateofemp}</TableCell>
                <TableCell>{user.dob}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> 
      </div>
    </div>
  );
};

export default DeleteList;
