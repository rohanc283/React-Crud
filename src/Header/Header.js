// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Header.css';

// export default function Header() {
//   return (
//     <div className="header">
//         <div className='leftSide'>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/students">Students</NavLink>
//         <NavLink to="/add/student">Add</NavLink>
//         </div>
//         <div className='rightSide'>
//         <NavLink to="/">Login</NavLink>
//         <NavLink to="/">Register</NavLink>
//         </div>
//     </div>
//   );
// }


import './Header.css';
import { NavLink, useLocation } from "react-router-dom";
import { useState } from 'react';
let name = "Rohan";

export default function Header() {
  let [id, setId] = useState(0);
  function changeId(e) {
    setId(e.target.value);
  }
  return (
    <div className='net'>
      <div>
        <img src="../../public/graduates.png"></img>
      </div>
      <div className='m'><h1>STUDENT WEBSITE</h1></div>



      <div className='netBox'>
        <NavLink to="/" id='sign'>Home</NavLink>
        <NavLink to="/students" id='sign'>All Students</NavLink>
        <NavLink to="/add/student" id='sign'>Add Students</NavLink>
        <input type="number" id='input' value={id} onChange={changeId} placeholder='Enter Student Id to Search'></input>
        <NavLink to={`/searchStudent/${id}`} id='search'>Search</NavLink>
      </div>
    </div>
  );
}

