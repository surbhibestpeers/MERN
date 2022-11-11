import axios from "axios"
import {GET, ADD, DELETE, GETEDIT, EDIT } from '../Action/actionCreators';

const URL = "http://localhost:8000";

export const getRecord =()=>{
    return dispatch =>{
        axios.get("http://localhost:8000/all").then((res)=>{
            dispatch(GET(res.data))
        }).catch((err)=>{
            console.log(err);
        })
    }
}

export const addRecord =(user)=>{
    return dispatch =>{
        axios.post("http://localhost:8000/add",user).then((res)=>{
            dispatch(ADD(res.data))
        }).catch((err)=>{
            console.log(err);
        })
    }
}

export const deleteRecord =(id)=>{
    return dispatch =>{
        axios.delete(`${URL}/${id}`).then((res)=>{
            dispatch(DELETE(res.data))
        }).catch((err)=>{
            console.log(err);
        })
    }
}

export const getEditRecord = (id)=> {
    return dispatch => {
        axios.put(`${URL}/${id}`).then((res)=>{
            dispatch(GETEDIT(res.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const editRecord = (id,user) => {
    return dispatch => {
         axios.patch(`${URL}/${id}`, user).then((res)=> {
            dispatch(EDIT(res.data))
         }).catch((err)=> {
            console.log(err)
         })
    }
}