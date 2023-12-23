import { Canister, query, text, update, Void } from "azle";

type StudentAttendance = {
    students: Array<string>;
};

type Classroom = {
    name: string;
    presenceCode: string; // Renamed from "presenseCode" to "presenceCode" for consistency
    studentAttendance: StudentAttendance;
};

const classrooms: Array<Classroom> = [];

const studentAttendance: StudentAttendance = {
    students: [],
};

export default Canister({
    aNewClass: update([text], text, async (className) => {
        // Generate new code (4-digit number)
        const code = Math.floor(1000 + Math.random() * 9000).toString();
        // Create a new classroom
        const classroom: Classroom = {
            name: className,
            presenceCode: code, // Renamed from "presenseCode" to "presenceCode" for consistency
            studentAttendance: studentAttendance,
        };
        // Add the classroom to classrooms
        classrooms.push(classroom);
        return `The presence code is: ${code}`;
    }),
    cDoPresence: update([text, text], text, async (code, studentName) => {
        // Find code in the classroom
        const classroom = classrooms.find((classroom) => classroom.presenceCode === code); // Renamed from "presenseCode" to "presenceCode" for consistency
        // If the classroom is not found, return failed
        if (!classroom) {
            return "Failed";
        } else {
            // Add the student to studentAttendance
            classroom.studentAttendance.students.push(studentName);
            return "Success";
        }
    }),
    bGetClassroomAttendance: query([text], text, async (className) => {
        // Find the classroom
        const classroom = classrooms.find((classroom) => classroom.name === className);
        // If the classroom is not found, return failed
        if (!classroom) {
            return "Failed";
        } else {
            let returnStudents = `Class: ${classroom.name}. Presence Code: ${classroom.presenceCode}. Attendees: `;
            // Loop through students
            classroom.studentAttendance.students.forEach((student) => {
                // Add the student to returnStudents
                returnStudents += `${student}, `;
            });
            return returnStudents;
        }
    }),
});
