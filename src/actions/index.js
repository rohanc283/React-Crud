export const delStudent = (studId) => {
    return {
        type: 'DELETESTUDENTS',
        payload: studId
    }
}

export const showStudents = () => {
    return {
        type: 'SHOWSTUDENTS'
    }
}

export const addStudent = (student) => {
    return {
        type: 'ADDSTUDENT',
        payload: student
    }
}