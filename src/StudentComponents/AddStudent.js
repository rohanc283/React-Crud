import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { addStudent } from '../actions';
import { Student } from '../classes/Student';
import './AddStudent.css'

function AddStudent() {
    let [flag, setFlag] = useState(false)
    let [student, setRegisterStudent] = useState(new Student());

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(name + " = " + value)
        setRegisterStudent({ ...student, [name]: value })
    }

    let dispatch = useDispatch();


    function onSubmit(e) {
        e.preventDefault();
        console.log(student)
        dispatch(addStudent(student));
        setFlag(true);
        // setUserArr([...userDataArr, userRegister])
        // setUserArr({...userRegister,[e.target.name]:e.target.value})
        // setFinal(userRegister)
    }


    return (
        <>
            {!flag ?
                <form className="form" onSubmit={onSubmit} method="post">
                    <table border="1" className='table'>
                        <tr>
                            <th>Id : </th>
                            <td><input type="number" name="id" value={student.id} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th>Name : </th>
                            <td><input type="text" name="name" value={student.name} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th>Department : </th>
                            <td><input type="text" name="department" value={student.department} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th>Standard : </th>
                            <td><input type="text" name="standard" value={student.standard} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th></th>
                            <td><input type="submit" id='submit' /></td>
                        </tr>
                    </table>
                </form> :
                <Navigate to={"/students"} />
            }
        </>
    );
}

export default AddStudent;
