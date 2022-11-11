import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const DeleteList = () => {
 
  const {aduser} = useSelector((state)=>state.FetchReducer)
  console.log(aduser)

  const navigate = useNavigate();
  
  const backtolist = () => {
    navigate("/");
  };
  
  return (
    <div>
      <div className="table_head">
        <h1>List of Deleted Users</h1>
        <Button variant="contained" className="btn_1" onClick={backtolist}>
          Back to List
        </Button>

        <Table>
          <TableHead className="t-head">
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Zip-Code</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Date of Employement</TableCell>
              <TableCell>Date of Birth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {aduser.map((user) => (
              <TableRow>
                <TableCell>{user._id}</TableCell>
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
