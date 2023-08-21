import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagicWandSparkles, faMagnifyingGlass, faWarning } from '@fortawesome/free-solid-svg-icons';
import './Employee.css';

function Employee(props){

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
  const[editMode, setEditMode] = useState(false);


  const saveEmployee = () => {
    setEditMode(false);
    const updatedEmployee = {
        firstName: firstName, 
        lastName: lastName, 
        phoneNumber: phoneNumber, 
        id: props.employee.id,
        mondayTime: mondayTime,
        tuesdayTime: tuesdayTime,
        wednesdayTime: wednesdayTime,
        thursdayTime: thursdayTime,
        fridayTime: fridayTime,
        saturdayTime: saturdayTime,
        sundayTime: sundayTime
    };
    props.updateEmployee(updatedEmployee);
}


  useEffect(() => {
    setFirstName(props.employee.firstName);
    setLastName(props.employee.lastName);
    setPhoneNumber(props.employee.phoneNumber);
    setMondayTime(props.employee.mondayTime);
    setTuesdayTime(props.employee.tuesdayTime);
    setWednesdayTime(props.employee.wednesdayTime);
    setThursdayTime(props.employee.thursdayTime);
    setFridayTime(props.employee.fridayTime);
    setSaturdayTime(props.employee.saturdayTime);
    setSundayTime(props.employee.sundayTime);
}, [props.employee]);


  


  return(
    <div className="card d-flex flex-row">
      {console.log("Rendering employee:", props.employee)}
      <img src={props.employee.image} alt="Happy Employee" className='employee-image' />
          <div className="details">
          {!editMode && <ul className="list-group list-group-flush">
            <li className='list-group-item'>{props.employee.firstName}</li>
            <li className='list-group-item'>{props.employee.lastName}</li>
            <li className='list-group-item'>Cell: {props.employee.phoneNumber}</li>
            <li className='list-group-item'>Monday: {props.employee.mondayTime}</li>
            <li className='list-group-item'>Tuesday: {props.employee.tuesdayTime}</li>
            <li className='list-group-item'>Wednesday: {props.employee.wednesdayTime}</li>
            <li className='list-group-item'>Thursday: {props.employee.thursdayTime}</li>
            <li className='list-group-item'>Friday: {props.employee.fridayTime}</li>
            <li className='list-group-item'>Saturday: {props.employee.saturdayTime}</li>
            <li className='list-group-item'>Sunday: {props.employee.sundayTime}</li>
            <button type='button' className="btn btn-danger" onClick={() => props.removeEmployee(props.employee)}>Delete Employee<FontAwesomeIcon icon={faWarning} /></button>
            <button type='button' className="btn btn-warning" onClick={()=> setEditMode(true)}>Edit<FontAwesomeIcon icon={faMagicWandSparkles} /></button>
          </ul>
      }
      {editMode &&
      <ul className="list-group list-group-flush">
      <li className='list-group-item text-center'><input type="text" className="form-control" value={firstName} onChange={(evt) => setFirstName(evt.currentTarget.value)} /></li>
      <li className='list-group-item text-center'><input type="text" className="form-control" value={lastName} onChange={(evt) => setLastName(evt.currentTarget.value)} /></li>
      <li className='list-group-item text-center'><input type="text" className="form-control" value={phoneNumber} onChange={(evt) => setPhoneNumber(evt.currentTarget.value)} /></li>
      <li className='list-group-item text-center'><input type="text" className="form-control" value={mondayTime} onChange={(evt) => setMondayTime(evt.currentTarget.value)} /></li>
      <li className='list-group-item text-center'><input type="text" className="form-control" value={tuesdayTime} onChange={(evt) => setTuesdayTime(evt.currentTarget.value)} /></li>
      <li className='list-group-item text-center'><input type="text" className="form-control" value={wednesdayTime} onChange={(evt) => setWednesdayTime(evt.currentTarget.value)} /></li>
      <li className='list-group-item text-center'><input type="text" className="form-control" value={thursdayTime} onChange={(evt) => setThursdayTime(evt.currentTarget.value)} /></li>
      <li className='list-group-item text-center'><input type="text" className="form-control" value={fridayTime} onChange={(evt) => setFridayTime(evt.currentTarget.value)} /></li>
      <li className='list-group-item text-center'><input type="text" className="form-control" value={saturdayTime} onChange={(evt) => setSaturdayTime(evt.currentTarget.value)} /></li>
      <li className='list-group-item text-center'><input type="text" className="form-control" value={sundayTime} onChange={(evt) => setSundayTime(evt.currentTarget.value)} /></li>
      <li className="list-group item text-center"><button id='btnSave' className="btn btn-secondary" onClick={saveEmployee}>Save</button></li>
      </ul>
      }

    </div>
    </div>
  )};

export default Employee;