import axios from "axios"
import {get, add, remove, getEdit, edit } from '../Action/actionCreators';

const URL = "http://localhost:8000";

export const getRecord =()=>{
    return dispatch =>{
        axios.get("http://localhost:8000/all").then((res)=>{
            dispatch(get(res.data))
        }).catch((err)=>{
            console.log(err);
        })
    }
}

export const addRecord =(user)=>{
    return dispatch =>{
        axios.post("http://localhost:8000/add",user).then((res)=>{
            dispatch(add(res.data))
        }).catch((err)=>{
            console.log(err);
        })
    }
}

export const deleteRecord =(id)=>{
    return dispatch =>{
        axios.delete(`${URL}/${id}`).then((res)=>{
            dispatch(remove(res.data))
        }).catch((err)=>{
            console.log(err);
        })
    }
}

export const getEditRecord = (id)=> {
    return dispatch => {
        axios.put(`${URL}/${id}`).then((res)=>{
            dispatch(getEdit(res.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const editRecord = (id,user) => {
    return dispatch => {
         axios.patch(`${URL}/${id}`, user).then((res)=> {
            dispatch(edit(res.data))
         }).catch((err)=> {
            console.log(err)
         })
    }
}