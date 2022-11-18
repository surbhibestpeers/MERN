import React, { useState,useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { editRecord} from "./Redux/Action/action";
import { useDispatch } from "react-redux";

const DialogBox = ({ userData }) => {
  
  const [open, setOpen] = useState(true);
  const [editData, setEditData] = useState();

  const dispatch = useDispatch();
  
  useEffect(() => {
   if(userData[0]) setEditData(userData[0])
  },[userData]);

  const handleChange = (e) => {
    setEditData({ ...editData,[e.target.name]: e.target.value });
  };
  
  const handleEditSave = async (id, data) => {
    console.log(data, id);
    dispatch(editRecord(id, data));
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
            <>
              <div className="input_field">
                <div className="space">
                  <p>Name:</p>
                  <input className="enter" name="name" value={editData?.name || ''} onChange={handleChange}
                  />
                </div>
                <div className="space">
                  <p>Phone:</p>
                  <input className="enter" name="phone" value={editData?.phone || ''} onChange={handleChange} />
                </div>
              </div>

              <div className="width">
                <p>Email:</p>
                <input className="enter_1" name="email" value={editData?.email || ''} onChange={handleChange}/>
              </div>

              <div className="input_field">
                <div className="space">
                  <p>City:</p>
                  <input className="enter" name="city" value={editData?.city || ''} onChange={handleChange}/>
                </div>
                <div className="space">
                  <p>Zip-Code:</p>
                  <input className="enter" name="zipcode" value={editData?.zipcode || ''} onChange={handleChange}/>
                </div>
              </div>

              <div className="width">
                <p>Address:</p>
                <input className="enter_1" name="address" value={editData?.address || ''} onChange={handleChange} />
              </div>

              <div className="input_field">
                <div className="space">
                  <p>Date of Employement:</p>
                  <input className="enter" name="dateofemp" value={editData?.dateofemp || ''} onChange={handleChange}/>
                </div>
                <div className="space">
                  <p>Date of Birth:</p>
                  <input className="enter" name="dob" value={editData?.dob || ''} onChange={handleChange}/>
                </div>
              </div>
            </>
          </form>
        </DialogContent>
        <DialogActions className="but_position">
          <button onClick={() => handleEditSave(editData._id, editData)} className="button_1">Edit</button>
          <button onClick={() => setOpen(false)} className="button_1"> Cancel </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogBox;
