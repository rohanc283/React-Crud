import { Student } from './Student'

export class StudentController {

    stuSet = new Set();

    constructor() {
        this.stuSet.add(new Student(101, 'Rohan', 'JAVA', 'Neosoft Trainer'))
        this.stuSet.add(new Student(102, 'Kajal', 'C++', 'Neosoft Trainer'))
    }

    getAllStudents() {
        return [...this.stuSet];
    }

    addStudents(student) {
        let newStu = new Student(parseInt(student.id), student.name, student.department, student.standard)
        this.stuSet.add(newStu);
        return [...this.stuSet];
    }

    getStudentById(id) {
        return [...this.stuSet].find(stu => stu.id === id)
    }

    deleteStudentBy(id) {
        console.log(this.stuSet)
        let student = this.getStudentById(id)
        this.stuSet.delete(student)
        return [...this.stuSet];
    }
}
