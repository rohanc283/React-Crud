import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { addStudent } from '../actions';
import { Student } from '../classes/Student';
import { delStudent } from '../actions';
import './AddStudent.css'

function UpdateStudent() {
    let [flag, setFlag] = useState(false);
    let { id } = useParams();
    console.log(id);
    let studentArr = useSelector((reducer) => reducer.StudReducer)
    let student2 = studentArr.find(ele => ele.id == id);

    let [student, setRegisterStudent] = useState(student2);
    console.log(student);

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(name + " = " + value)
        setRegisterStudent({ ...student, [name]: value })
    }

    let dispatch = useDispatch();


    function onSubmit(e) {
        e.preventDefault();
        console.log(student)
        dispatch(delStudent(parseInt(id)))
        dispatch(addStudent(student));
        setFlag(true);
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
    )
}

export default UpdateStudent;
