import React, { useState } from "react";
import "./styles.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addRecord  } from "./Redux/Action/action";


const Form = () => {
  const defaultValue = {
    name: "",
    phone: "",
    email: "",
    city: "",
    zipcode: "",
    address: "",
    dateofemp: "",
    dob: "",
  };


  const dispatch = useDispatch();
  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetail = () => {
 
    dispatch(addRecord(user))
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your record has been saved",
      showConfirmButton: false,
      timer: 1000,
    });
    clearValue()
    
  };

const clearValue = () => {
    setUser(defaultValue);
  };


  return (
    <div>
      <div className="form_back">
        <div className="head_top">
          <h2>Add User</h2>
          <Link to="/" className="move_to_page">
            List Of All Users
          </Link>
        </div>

        <form>
          <h5>Personal Detail</h5>
          <div className="gap">
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              className="textfield"
              onChange={(e) => onValueChange(e)}
              name="name"
              value={user.name}
            />
            <TextField
              id="standard-basic"
              label="Phone"
              type="number"
              variant="standard"
              className="textfield"
              onChange={(e) => onValueChange(e)}
              name="phone"
              value={user.phone}
            />
          </div>
          <TextField
            id="standard-basic"
            label="Email"
            type="email"
            variant="standard"
            className="textfield_1"
            onChange={(e) => onValueChange(e)}
            name="email"
            value={user.email}
          />

          <h5>Home Address</h5>

          <div className="gap">
            <TextField
              id="standard-basic"
              label="City"
              variant="standard"
              className="textfield"
              onChange={(e) => onValueChange(e)}
              name="city"
              value={user.city}
            />
            <TextField
              id="standard-basic"
              label="Zip-Code"
              type="number"
              variant="standard"
              className="textfield"
              onChange={(e) => onValueChange(e)}
              name="zipcode"
              value={user.zipcode}
            />
          </div>
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            className="textfield_1"
            onChange={(e) => onValueChange(e)}
            name="address"
            value={user.address}
          />

          <h5>Dates for Record</h5>
          <div className="gap">
            <TextField
              id="standard-basic"
              type="date"
              label="Date of Employeement"
              variant="standard"
              className="textfield"
              onChange={(e) => onValueChange(e)}
              name="dateofemp"
              InputLabelProps={{
                shrink: true,
              }}
              value={user.dateofemp}
            />
            <TextField
              id="standard-basic"
              type="date"
              label="Date of Birth"
              variant="standard"
              className="textfield"
              onChange={(e) => onValueChange(e)}
              name="dob"
              InputLabelProps={{
                shrink: true,
              }}
              value={user.dob}
            />
          </div>

          <Button
            variant="contained"
            className="btn"
            onClick={() => addUserDetail()}>
            Save Record
          </Button>
        
        </form>
      </div>
    </div>
  );
};

export default Form;
