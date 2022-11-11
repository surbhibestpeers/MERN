import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { editRecord} from "./Redux/Action/action";
import { useDispatch } from 'react-redux';

const DialogBox = ({ userData }) => {
  let data = userData;
  console.log(userData)
  const [open, setOpen] = useState(true);
  const [editData, setEditData] = useState(data);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEditData({ ...data, [e.target.name]: e.target.value });
  };

  const handleEditSave = async ( id,data) => {
    console.log(data,id)
    dispatch(editRecord(id,data));
    setOpen(false);
    window.location.reload(true);
  };



  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit User"}</DialogTitle>
        <DialogContent>
          <form>
            <h5>Personal Detail</h5>
            <>
              <div className="gap">
                <TextField
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  className="textfield"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                />

                <TextField
                  id="standard-basic"
                  label="Phone"
                  type="number"
                  variant="standard"
                  className="textfield"
                  name="phone"
                  value={editData.phone}
                  onChange={handleChange}
                />
              </div>

              <TextField
                id="standard-basic"
                label="Email"
                type="email"
                variant="standard"
                className="textfield_1"
                name="email"
                value={editData.email}
                onChange={handleChange}
              />

              <h5>Home Address</h5>

              <div className="gap">
                <TextField
                  id="standard-basic"
                  label="City"
                  variant="standard"
                  className="textfield"
                  name="city"
                  value={editData.city}
                  onChange={handleChange}
                />

                <TextField
                  id="standard-basic"
                  label="Zip-Code"
                  type="number"
                  variant="standard"
                  className="textfield"
                  name="zipcode"
                  value={editData.zipcode}
                  onChange={handleChange}
                />
              </div>

              <TextField
                id="standard-basic"
                label="Address"
                variant="standard"
                className="textfield_1"
                name="address"
                value={editData.address}
                onChange={handleChange}
              />

              <h5>Dates for Record</h5>

              <div className="gap">
                <TextField
                  id="standard-basic"
                  type="date"
                  label="Date of Employeement"
                  variant="standard"
                  className="textfield"
                  name="dateofemp"
                  value={editData.dateofemp}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField
                  id="standard-basic"
                  type="date"
                  label="Date of Birth"
                  variant="standard"
                  className="textfield"
                  name="dob"
                  value={editData.dob}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleEditSave(data._id,editData)}
            className="btn"
          >
            Edit
          </Button>
          
          <Button onClick={() => setOpen(false)} className="btn" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogBox;
