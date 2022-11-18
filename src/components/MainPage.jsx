import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import DataTable from "./DataTable";
import { useDispatch, useSelector } from "react-redux";
import { getRecord} from "./Redux/Action/action";
import Pagination from '@mui/material/Pagination';
import usePagination from "./Pagination";

const MainPage = () => {

  const {list} = useSelector((state)=>state.FetchReducer)
 
  const [page, setPage] = useState(1);

  const PER_PAGE = 4;
  
  const count = Math.ceil(list.length / PER_PAGE);
  const _DATA = usePagination(list, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getRecord())
  }, [dispatch]);


  return (
    <div className="back_1">
      <div className="center_1">
    
      <h1 className="list_user">List of Users</h1>

      <button variant="contained" className="button_1" onClick={()=> navigate("/design")}>
        Add New User
      </button>
      <button variant="contained" className="button_1" onClick={()=>navigate("/delete")}>
        Deleted Users List
      </button>
     
      <DataTable record={_DATA.currentData()}/>
    
      <Pagination count={count} size="large" page={page} variant="outlined" shape="rounded" onChange={handleChange} className="pagination" />
    </div>
    </div>
  );
};

export default MainPage;
