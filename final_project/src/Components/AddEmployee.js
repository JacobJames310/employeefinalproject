import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './AddEmployee.css';


function AddEmployee(props){
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mondayTime, setMondayTime] = useState("");
  const [tuesdayTime, setTuesdayTime] = useState("");
  const [wednesdayTime, setWednesdayTime] = useState("");
  const [thursdayTime, setThursdayTime] = useState("");
  const [fridayTime, setFridayTime] = useState("");
  const [saturdayTime, setSaturdayTime] = useState("");
  const [sundayTime, setSundayTime] = useState("");
  const [selectedFile, setSelectedFile] = useState();


const doWork = () =>{
  if (selectedFile) {
  const newEmployee = {"id":nanoid(), "firstName":firstName, "lastName":lastName, "phoneNumber":phoneNumber, "mondayTime": mondayTime, "tuesdayTime": tuesdayTime, "wednesdayTime": wednesdayTime, "thursdayTime": thursdayTime, "fridayTime": fridayTime, "saturdayTime": saturdayTime, "sundayTime": sundayTime, "image":URL.createObjectURL(selectedFile)};
  props.addEmployee(newEmployee);
}
}

const imageUpdate = (event) => {
  setSelectedFile(event.target.files[0]);
}
return(
  <div className="row mt-5" id="addEmployee">
    <h2>Add Employee</h2>
    <div className="col-md-2"> 
      <label htmlFor='txtFirstName' className='formLabel'>First Name</label>
      <input type="text" id="txtFirstName" placeholder='First Name' className='form-control' onChange={(evt) => setFirstName(evt.currentTarget.value)} value={firstName} /> 
    </div>
    <div className="col-md-2">
      <label htmlFor='txtLastName' className='formLabel'>Last Name</label>
      <input type="text" id="txtLastName" placeholder='Last Name' className='form-control' onChange={(evt) => setLastName(evt.currentTarget.value)} value={lastName} /> 
    </div>
    <div className="col-md-2">
      <label htmlFor='txtPhoneNumber' className='formLabel'>Phone Number</label>
      <input type="text" id="txtPhoneNumber" placeholder='Phone Number' className='form-control' onChange={(evt) => setPhoneNumber(evt.currentTarget.value)} value={phoneNumber} /> 
    </div>
    <div className="col-md-2">
      <label htmlFor='txtMonday' className='formLabel'>Monday</label>
      <input type="text" id="txtMonday" placeholder='Monday' className='form-control' onChange={(evt) => setMondayTime(evt.currentTarget.value)} value={mondayTime} /> 
    </div>
    <div className="col-md-2">
      <label htmlFor='txtTuesday' className='formLabel'>Tuesday</label>
      <input type="text" id="txtTuesday" placeholder='Tuesday' className='form-control' onChange={(evt) => setTuesdayTime(evt.currentTarget.value)} value={tuesdayTime} /> 
    </div>
    <div className="col-md-2">
      <label htmlFor='txtWednesday' className='formLabel'>Wednesday</label>
      <input type="text" id="txtWednesday" placeholder='Wednesday' className='form-control' onChange={(evt) => setWednesdayTime(evt.currentTarget.value)} value={wednesdayTime} /> 
    </div>
    <div className="col-md-2">
      <label htmlFor='txtThursday' className='formLabel'>Thursday</label>
      <input type="text" id="txtThursday" placeholder='Thursday' className='form-control' onChange={(evt) => setThursdayTime(evt.currentTarget.value)} value={thursdayTime} /> 
    </div>
    <div className="col-md-2">
      <label htmlFor='txtFriday' className='formLabel'>Friday</label>
      <input type="text" id="txtFriday" placeholder='Friday' className='form-control' onChange={(evt) => setFridayTime(evt.currentTarget.value)} value={fridayTime} /> 
    </div>
    <div className="col-md-2">
      <label htmlFor='txtSaturday' className='formLabel'>Saturday</label>
      <input type="text" id="txtSaturday" placeholder='Saturday' className='form-control' onChange={(evt) => setSaturdayTime(evt.currentTarget.value)} value={saturdayTime} /> 
    </div>
    <div className="col-md-2">
      <label htmlFor='txtSunday' className='formLabel'>Sunday</label>
      <input type="text" id="txtSunday" placeholder='Sunday' className='form-control' onChange={(evt) => setSundayTime(evt.currentTarget.value)} value={sundayTime} /> 
    </div>
    <div className="col-md-2">
      <label htmlFor='fileUpload' className='form-label'>Employee Image</label>
      <input type="file" id="fileUpload" onChange={imageUpdate}/>
    </div>
    <div className='col-md-4'>
      <button type="button" id="btnAdd" className="btn btn-success btn-lg" onClick={doWork}>Add Employee <FontAwesomeIcon icon={faPlusCircle} /></button>
    </div>
  </div>
);
}

export default AddEmployee;