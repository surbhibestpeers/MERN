import React, { useEffect, useState } from "react";
import "./styles.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import Pagination from './Pagination';
import DataTable from "./DataTable";
import { useDispatch, useSelector } from "react-redux";
import { getRecord,deleteRecord } from "./Redux/Action/action";
import Pagination from '@mui/material/Pagination';
import usePagination from "./Pagination";

const MainPage = () => {

  const {list} = useSelector((state)=>state.FetchReducer)
 
 
  const [page, setPage] = useState(1);

  const PER_PAGE = 4;
  const data = list;
  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  useEffect(() => {
    getData()
  }, []);

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
     
      <DataTable record={_DATA.currentData()}/>
    
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        className="pagination"
      />
    </div>
  );
};

export default MainPage;
