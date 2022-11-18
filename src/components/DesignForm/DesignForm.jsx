import React from "react";
import "./form.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addRecord } from "../Redux/Action/action";
import { useForm } from "react-hook-form";

const DesignForm = () => {
  const {register, handleSubmit, reset, formState: { errors }} = useForm();
  
  const dispatch = useDispatch();
  const onSubmit = (user) => {
    dispatch(addRecord(user));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your record has been saved",
      showConfirmButton: false,
      timer: 1000,
    });
    reset();
  };

  return (
    <div className="back">
      <div className="center">
        <div className="img">
          <img src="./women.png" alt="women_photo" width="90%" className="img_position" />
        </div>
        <div className="form">
          <div className="main-head">
            <div>
              <p className="top_head">WELCOME</p>
              <p className="head">Register New User</p>
            </div>
            <Link to="/" className="link">
              List of All Users
            </Link>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input_field">
                <div className="space">
                  <p>Name:</p>
                  <input
                    className="enter"
                    {...register("name", {
                      required: true,
                      pattern: /^[a-zA-Z ]*$/,
                    })}
                  />
                  {errors.name && errors.name.type === "required" && (
                    <p className="errorMsg">Name is required.</p>
                  )}
                </div>
                <div className="space">
                  <p>Phone:</p>
                  <input
                    className="enter"
                    {...register("phone", {
                      required: true,
                      minLength: 10,
                      pattern: "^d+$",
                    })}
                  />
                  {errors.phone && errors.phone.type === "required" && (
                    <p className="errorMsg">Phone No. is required.</p>
                  )}
                  {errors.phone && errors.phone.type === "minLength" && (
                    <p className="errorMsg">
                      Phone No. should be at-least 10 digit.
                    </p>
                  )}
                </div>
              </div>
              <div className="width">
                <p>Email:</p>
                <input
                  className="enter_1"
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="errorMsg">Email is required.</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="errorMsg">Email is not valid.</p>
                )}
              </div>
              <div className="input_field">
                <div className="space">
                  <p>City:</p>
                  <input
                    className="enter"
                    {...register("city", {
                      required: true,
                    })}
                  />
                  {errors.city && errors.city.type === "required" && (
                    <p className="errorMsg">City is required.</p>
                  )}
                </div>
                <div className="space">
                  <p>Zip-Code:</p>
                  <input
                    className="enter"
                    {...register("zipcode", {
                      required: true,
                    })}
                  />
                  {errors.zipcode && errors.zipcode.type === "required" && (
                    <p className="errorMsg">Zip-Code is required.</p>
                  )}
                </div>
              </div>
              <div className="width">
                <p>Address:</p>
                <input
                  className="enter_1"
                  {...register("address", {
                    required: true,
                  })}
                />
                {errors.address && errors.address.type === "required" && (
                  <p className="errorMsg">Address is required.</p>
                )}
              </div>
              <div className="input_field">
                <div className="space">
                  <p>Date Of Employement:</p>
                  <input
                    className="enter"
                    type="date"
                    {...register("dateofemp", {
                      required: true,
                    })}
                  />
                  {errors.dateofemp && errors.dateofemp.type === "required" && (
                    <p className="errorMsg">Date of Employement is required.</p>
                  )}
                </div>
                <div className="space">
                  <p>Date of Birth:</p>
                  <input
                    className="enter"
                    type="date"
                    {...register("dob", {
                      required: true,
                    })}
                  />
                  {errors.dob && errors.dob.type === "required" && (
                    <p className="errorMsg">Date of Birth is required.</p>
                  )}
                </div>
              </div>
              <button type="submit">SAVE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignForm;
