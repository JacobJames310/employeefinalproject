import logo from './logo.svg'; 
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {nanoid} from 'nanoid'; 
import React, {useState, useEffect} from 'react';
import AddEmployee from './Components/AddEmployee';
import Employee from './Components/Employee';
import _ from'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {

  const[allEmployees, setAllEmployees] = useState();
  const[searchResults, setSearchResults] = useState();
  const[keywords, setKeywords] = useState();


  useEffect(() => {
    if(localStorage){
      const employeesLocalStorage = JSON.parse(localStorage.getItem('employees'));

      if(employeesLocalStorage){
        saveEmployees(employeesLocalStorage);
        console.log("Loaded employees from local storage:", employeesLocalStorage);
      }
      else{
        saveEmployees(employees);
        console.log("Loaded hardcoded employees:", employees);
      }
    }
}, []);


  const saveEmployees = (employees) =>{
    setAllEmployees(employees);
    setSearchResults(employees);
    if(localStorage){
      localStorage.setItem('employees', JSON.stringify(employees));
      console.log('saved to local storage');
    }
  }

  const addEmployee = (newEmployee)=> {
    const updatedEmployees = [...allEmployees, newEmployee];
    saveEmployees(updatedEmployees);
  }

  const searchEmployees = () => {
    let keywordsArray = [];

    if(keywords){
      keywordsArray = keywords.toLowerCase().split(' ');
    }
    if(keywordsArray.length > 0){
      const searchResults = allEmployees.filter(employee => {
        for(const word of keywordsArray){
          if(employee.firstName.toLowerCase().includes(word)  ||
          employee.lastName.toLowerCase().includes(word)  ||
          employee.phoneNumber === parseInt(word)){
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResults);
    }else{
      setSearchResults(allEmployees);
    }
  }

const removeEmployee= (employeeToDelete) => {
    console.table(employeeToDelete);
    const updatedEmployeeArray = allEmployees.filter(employee=> employee.id !== employeeToDelete.id);
    saveEmployees(updatedEmployeeArray);
}
const updateEmployee= (updatedEmployee) => {
  console.table(updatedEmployee);
  const updatedEmployeeArray = allEmployees.map(employee => employee.id === updatedEmployee.id ? {...employee,...updatedEmployee} : employee);
  saveEmployees(updatedEmployeeArray);
}

  const employees = [{
    id:nanoid(),
    firstName: "Jecho",
    lastName: "Ivachyov",
    phoneNumber: "494-919-1494",
    image: 'images/student1.jpg',
    mondayTime: '7am-5pm',
    tuesdayTime: '7am-5pm',
    wednesdayTime: '7am-5pm',
    thursdayTime: '7am-5pm',
    fridayTime: '7am-5pm',
    saturdayTime: 'off',
    sundayTime: 'off'
  }, {
    id:nanoid(),
    firstName: "Karol",
    lastName: "Aharoni",
    phoneNumber: "110-494-3934",
    image: 'images/student2.jpg',
    mondayTime: '7am-5pm',
    tuesdayTime: '7am-5pm',
    wednesdayTime: '7am-5pm',
    thursdayTime: '7am-5pm',
    fridayTime: '7am-5pm',
    saturdayTime: 'off',
    sundayTime: 'off'
  }, {
    id:nanoid(),
    firstName: "Rasia",
    lastName: "Krabbe",
    phoneNumber: "666-491-4924",
    image: 'images/student3.jpg',
    mondayTime: '7am-5pm',
    tuesdayTime: '7am-5pm',
    wednesdayTime: '7am-5pm',
    thursdayTime: '7am-5pm',
    fridayTime: '7am-5pm',
    saturdayTime: 'off',
    sundayTime: 'off'
  }, {
    id:nanoid(),
    firstName: "Mikael",
    lastName: "Domingues",
    phoneNumber: "945-041-0592",
    image: 'images/student4.jpg',
    mondayTime: '7am-5pm',
    tuesdayTime: '7am-5pm',
    wednesdayTime: '7am-5pm',
    thursdayTime: '7am-5pm',
    fridayTime: '7am-5pm',
    saturdayTime: 'off',
    sundayTime: 'off'
  }, {
    id:nanoid(),
    firstName: "Braden",
    lastName: "Sammon",
    phoneNumber: "345-414-3495",
    image: 'images/student5.jpg',
    mondayTime: '7am-5pm',
    tuesdayTime: '7am-5pm',
    wednesdayTime: '7am-5pm',
    thursdayTime: '7am-5pm',
    fridayTime: '7am-5pm',
    saturdayTime: 'off',
    sundayTime: 'off'
  }, {
    id:nanoid(),
    firstName: "Maribeth",
    lastName: "Boggers",
    phoneNumber: "458-075-5642",
    image: 'images/student6.jpg',
    mondayTime: '7am-5pm',
    tuesdayTime: '7am-5pm',
    wednesdayTime: '7am-5pm',
    thursdayTime: '7am-5pm',
    fridayTime: '7am-5pm',
    saturdayTime: 'off',
    sundayTime: 'off'
  }, {
    id:nanoid(),
    firstName: "Veronike",
    lastName: "Goodayle",
    phoneNumber: "510-456-3218",
    image: 'images/student7.jpg',
    mondayTime: '7am-5pm',
    tuesdayTime: '7am-5pm',
    wednesdayTime: '7am-5pm',
    thursdayTime: '7am-5pm',
    fridayTime: '7am-5pm',
    saturdayTime: 'off',
    sundayTime: 'off'
    
  }, {
    id:nanoid(),
    firstName: "Nickie",
    lastName: "Cocher",
    phoneNumber: "457-452-0051",
    image: 'images/student8.jpg',
    mondayTime: '7am-5pm',
    tuesdayTime: '7am-5pm',
    wednesdayTime: '7am-5pm',
    thursdayTime: '7am-5pm',
    fridayTime: '7am-5pm',
    saturdayTime: 'off',
    sundayTime: 'off'
  }, {
    id:nanoid(),
    firstName: "Sandra",
    lastName: "Mancell",
    phoneNumber: "996-0216-0856",
    image: 'images/student9.jpg',
    mondayTime: '7am-5pm',
    tuesdayTime: '7am-5pm',
    wednesdayTime: '7am-5pm',
    thursdayTime: '7am-5pm',
    fridayTime: '7am-5pm',
    saturdayTime: 'off',
    sundayTime: 'off'
  }, {
    id:nanoid(),
    firstName: "Fredric",
    lastName: "Devons",
    phoneNumber: "684-412-0258",
    image: 'images/student10.jpg',
    mondayTime: '7am-5pm',
    tuesdayTime: '7am-5pm',
    wednesdayTime: '7am-5pm',
    thursdayTime: '7am-5pm',
    fridayTime: '7am-5pm',
    saturdayTime: 'off',
    sundayTime: 'off'
  }];

  return (
    <div className='container'>
      {console.log("Rendering employees:", searchResults)}
      <div className="row" id="allEmployees">
        {allEmployees && searchResults.map((employee) =>
        (
        <div className="col-lg-5" key={employee.id}>
        <Employee employee={employee} removeEmployee={removeEmployee} updateEmployee={updateEmployee} />
      </div>)
        )};


      </div>
      {/* !allEmployees && <button type="button" className='btn btn-lg btn-success' onClick={() => saveEmployees(employees)}>Save Employees</button>*/}
      <AddEmployee addEmployee={addEmployee} />
      <div className='row mt-4' id="searchEmployee">
        <div className='col-md-4'>
          <label htmlFor='txtKeyWords'>Search by First Name or Last Name</label>
          <input type="text" className='form-control' placeholder='Search' onChange={evt => setKeywords(evt.currentTarget.value)} value={keywords} />
        </div>
        <div className='col-md-4'>
          <button type='button' className='btn btn-primary' onClick={searchEmployees}>Search Employee<FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>
      </div>
  );
}



export default App;

 