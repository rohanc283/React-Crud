
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { StudentController } from './classes/StudentController';
import Header from './Header/Header';
import Home from './HomePage/Home';
import AddStudent from './StudentComponents/AddStudent';
import DeleteStudent from './StudentComponents/DeleteStudent';
import ShowStudent from './StudentComponents/ShowStudent';
import { SearchStudent } from './StudentComponents/SearchStudent';
import UpdateStudent from './StudentComponents/UpdateStudent';


let stuController = new StudentController();
let getAllStudents = () => {
  console.log(stuController.getAllStudents())
}

let deleteStudentById = (id) => {
  console.log(stuController.deleteStudentBy(id))
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route element={<Home />} path="/" />

        <Route element={<ShowStudent />} path="/students" />

        <Route element={<AddStudent />} path="/add/student" />

        <Route element={<SearchStudent />} path="/searchStudent/:id" />
        <Route element={<UpdateStudent />} path="/edit/:id" />

        <Route element={<DeleteStudent />} path="/delete/:id" />
      </Routes>

    </div>
  );
}

export default App;
