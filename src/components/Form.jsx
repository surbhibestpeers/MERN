
import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./styles.css";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addRecord  } from "./Redux/Action/action";

const Form=()=> {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (user) => {
    console.log(user);
    dispatch(addRecord(user))
        Swal.fire({
        position: "center",
         icon: "success",
         title: "Your record has been saved",
        showConfirmButton: false,
        timer: 1000,
      });
      reset()
  };
  return(
    <div>
       <div className="form_back">
         <div className="head_top">
          <h2>Add User</h2>
          <Link to="/" className="move_to_page">
           List Of All Users
         </Link>
       </div>
       <form onSubmit={handleSubmit(onSubmit)}>
          <h5>Personal Detail</h5>
          <div className="gap">
            <div className="shown">
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              className="textfield"
              {...register("name", {
                required: true,
               pattern:/^[a-zA-Z ]*$/
              })}
            />
           {errors.name && errors.name.type === "required" && (
            <p className="errorMsg">Name is required.</p>
          )}
          </div>
          <div className="shown">
            <TextField
              id="standard-basic"
              label="Phone"
              type="number"
              variant="standard"
              className="textfield"
           
              {...register("phone", {
                required: true,
                minLength: 10,
                pattern:'^\d+$'
              })}
            />
             {errors.phone && errors.phone.type === "required" && (
            <p className="errorMsg">Phone No. is required.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">
              Phone No. should be at-least 10 digit.
            </p>
          )}
          </div>
          </div>
          <TextField
            id="standard-basic"
            label="Email"
            type="email"
            variant="standard"
            className="textfield_1"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })}
          />
             {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
          <h5>Home Address</h5>

          <div className="gap">
          <div className="shown">
            <TextField
              id="standard-basic"
              label="City"
              variant="standard"
              className="textfield"
              {...register("city", {
                required: true,
                
              })}
            />
           {errors.city && errors.city.type === "required" && (
            <p className="errorMsg">City is required.</p>
          )}
          </div>
          <div className="shown">
            <TextField
              id="standard-basic"
              label="Zip-Code"
              type="number"
              variant="standard"
              className="textfield"
              {...register("zipcode", {
                required: true,
                
              })}
            />
           {errors.zipcode && errors.zipcode.type === "required" && (
            <p className="errorMsg">Zip-Code is required.</p>
          )}
          </div>
          </div>
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            className="textfield_1"
            {...register("address", {
              required: true,
              
            })}
          />
         {errors.address && errors.address.type === "required" && (
          <p className="errorMsg">Address is required.</p>
        )}

          <h5>Dates for Record</h5>
          <div className="gap">
          <div className="shown">
            <TextField
              id="standard-basic"
              type="date"
              label="Date of Employeement"
              variant="standard"
              className="textfield"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("dateofemp", {
                required: true,
                
              })}
            />
           {errors.dateofemp && errors.dateofemp.type === "required" && (
            <p className="errorMsg">Date of Employement is required.</p>
          )}
          </div>
          <div className="shown">
            <TextField
              id="standard-basic"
              type="date"
              label="Date of Birth"
              variant="standard"
              className="textfield"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("dob", {
                required: true,
                
              })}
            />
           {errors.dob && errors.dob.type === "required" && (
            <p className="errorMsg">Date of Birth is required.</p>
          )}
          </div>
</div>
          <Button
            variant="contained"
            className="btn"
            type="submit"
            >
            Save Record
          </Button>
        
        </form>
</div>
    </div>
  )
}
export default Form;