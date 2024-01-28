// Importing necessary modules from "azle"
import { Canister, query, text, update } from "azle";

// Define the structure for StudentAttendance
type StudentAttendance = {
    students: Array<string>; // Array to store the names of the students
};

// Define the structure for Classroom
type Classroom = {
    name: string; // Name of the classroom
    presenceCode: string; // Code for presence
    studentAttendance: StudentAttendance; // Attendance of the students
};

// Array to store all the classrooms
const classrooms: Array<Classroom> = [];

// Exporting the Canister
export default Canister({
    // Function to create a new class
    aNewClass: update([text], text, async (className) => {
        // Generate a new 4-digit code
        const code = Math.floor(1000 + Math.random() * 9000).toString();
        // Create a new classroom with the provided name and generated code
        const classroom: Classroom = {
            name: className,
            presenceCode: code,
            studentAttendance: {
                students: [], // Initialize an empty array for students
            },
        };
        // Add the newly created classroom to the classrooms array
        classrooms.push(classroom);
        // Return the generated code
        return `The presence code is: ${code}`;
    }),
    // Function to mark the presence of a student
    cDoPresence: update([text, text], text, async (code, studentName) => {
        // Find the classroom with the provided code
        const classroom = classrooms.find((classroom) => classroom.presenceCode === code);
        // If the classroom is not found, return "Failed"
        if (!classroom) {
            return "Failed";
        } else {
            // If the classroom is found, add the student to the students array
            classroom.studentAttendance.students.push(studentName);
            // Return "Success"
            return "Success";
        }
    }),
    // Function to get the attendance of a classroom
    bGetClassroomAttendance: query([text], text, async (className) => {
        // Find the classroom with the provided name
        const classroom = classrooms.find((classroom) => classroom.name === className);
        // If the classroom is not found, return "Failed"
        if (!classroom) {
            return "Failed";
        } else {
            // If the classroom is found, prepare a string with the classroom details and the names of the students
            let returnStudents = `Class: ${classroom.name}. Presence Code: ${classroom.presenceCode}. Attendees: `;
            classroom.studentAttendance.students.forEach((student) => {
                returnStudents += `${student}, `;
            });
            // Return the prepared string
            return returnStudents;
        }
    }),
});
