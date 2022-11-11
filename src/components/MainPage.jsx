import React, { useEffect, useState } from "react";
import "./styles.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Pagination from './Pagination';
import DataTable from "./DataTable";
import { useDispatch, useSelector } from "react-redux";
import { getRecord,deleteRecord } from "./Redux/Action/action";

const MainPage = () => {

  const [users, setUsers] = useState([]);
  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage,setPostsPerPage] = useState(4)
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost =  users.slice(firstPostIndex,lastPostIndex)

  console.log(currentPost)

  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    getAllUsers();
    getData()
  }, []);

  const {list} = useSelector((state)=>state.FetchReducer)
  console.log(list)

  const getAllUsers = async () => {
    setUsers(list);
  };
  const getData = ()=> {
     dispatch(getRecord())
   
  }


  return (
    <div className="table_head">
      <h1>List of Users</h1>

      <Button variant="contained" className="btn_1" onClick={()=> navigate("/form")}>
        Add New User
      </Button>
      <Button variant="contained" className="btn_1" onClick={()=>navigate("/delete")}>
        Deleted Users List
      </Button>
     
      <DataTable record={list}/>
    
      <Pagination totalPosts={users.length} postsPerPage={postsPerPage}  setCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default MainPage;
