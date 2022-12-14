import React,{useState, useEffect} from 'react';
import {Table,TableBody,TableCell,TableHead,TableRow} from "@mui/material";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import DialogBox from "./DialogBox";
import { deleteRecord ,getEditRecord } from "./Redux/Action/action";
import {addDelete} from './Redux/Action/actionCreators'
import { getRecord} from "./Redux/Action/action";
const DataTable = (record) => {
 
  const [show,setShow]= useState(false)
  
  const dispatch = useDispatch();
  
  const tableHead = [ "Id","Name","Phone","Email","City","Zip-Code","Address","Date of Employement","Date of Birth", ""];

  const tableData = [record]

  const {euser} = useSelector((state)=>state.FetchReducer)

   useEffect(() => {
    dispatch(getRecord())
  }, [dispatch]);

  const editUserDetail = async (id) => {
    dispatch(getEditRecord(id))
    setShow(true);  
  };

  const deleteUserDetail = async (user, id) => {
    dispatch(deleteRecord(id));
    dispatch(addDelete(user)) ;  
  }

  return (
    <div>
      { tableData[0].record.length > 0 ? ( 
         <Table>
        <TableHead className="t-head">
          <TableRow>
            {tableHead.map((data) => (
              <TableCell>{data}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData[0].record.map((datauser) => (
            <TableRow>
              <TableCell  >{datauser._id}</TableCell>
              <TableCell >{datauser.name}</TableCell>
              <TableCell >{datauser.phone}</TableCell>
              <TableCell >{datauser.email}</TableCell>
              <TableCell >{datauser.city}</TableCell>
              <TableCell >{datauser.zipcode}</TableCell>
              <TableCell >{datauser.address}</TableCell>
              <TableCell >{datauser.dateofemp}</TableCell>
              <TableCell >{datauser.dob}</TableCell>
              <TableCell>
                <div style={{ display: "flex" }}>
                  <AiFillEdit
                    className="icon"
                    onClick={() => editUserDetail(datauser._id)}
                  />
                  <AiFillDelete
                    className="icon"
                    onClick={() => deleteUserDetail(datauser, datauser._id)}
                  /> 
                </div> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
          ) : <p className='no_record'>No Record Found</p> }
      
              {show && euser[0]? (<DialogBox userData={euser}/>) : ('')}
    </div>
  )
}

export default DataTable;