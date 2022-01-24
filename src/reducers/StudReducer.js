import { StudentController } from '../classes/StudentController';
let studImpl = new StudentController();
export const StudReducer = (state = [...studImpl.stuSet], action) => {
        switch (action.type) {
                case 'SHOWSTUDENTS': {
                        state = studImpl.getAllStudents();
                        return state;
                }
                case 'DELETESTUDENTS': {
                        state = studImpl.deleteStudentBy(action.payload);
                        return state;
                }
                case 'ADDSTUDENT': {
                        console.log("Reducer " + action.payload)
                        state = studImpl.addStudents(action.payload);
                        return state;
                }
                default: return state;
        }
}