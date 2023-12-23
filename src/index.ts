import { Canister, query, text, update, Void } from "azle";

type StudentAttendance = {
    students: Array<string>;
}

type Classroom = {
    name: string;
    presenseCode: string;
    studentAttendance: StudentAttendance;
}

const classrooms: Array<Classroom> = [];

const studentAttendance: StudentAttendance = {
    students: []
}

export default Canister({
    newPresenceCode: update([text], Void, async (className) => {
        //generate new code 4 digits number
        const code = Math.floor(Math.random() * 10000).toString();
        //create new classroom
        const classroom: Classroom = {
            name: className,
            presenseCode: code,
            studentAttendance: studentAttendance
        }
        //add classroom to classrooms
        classrooms.push(classroom);
    }),
    doPresense: update([text, text], text, async (code, studentName) => {
        //find code in classroom
        const classroom = classrooms.find((classroom) => classroom.presenseCode === code);
        //if classroom not found return failed
        if (!classroom) {
            return "Failed";
        }
        else{
            //add student to studentAttendance
            classroom.studentAttendance.students.push(studentName);
            return "Success";
        }
    }),
    getClassroomAttendance: query([text], text, async (className) => {
        //find classroom
        const classroom = classrooms.find((classroom) => classroom.name === className);
        //if classroom not found return failed
        if (!classroom) {
            return "Failed";
        }
        else{
            let returnStudents = "";
            //loop through students
            classroom.studentAttendance.students.forEach((student) => {
                //add student to returnStudents
                returnStudents += student + " ";
            })
            return returnStudents;
        }
    })

})