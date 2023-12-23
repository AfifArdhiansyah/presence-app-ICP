# presence-app-ICP

## Overview

The Presence App is a comprehensive application designed to streamline attendance tracking in educational settings. Leveraging the power of the Azle library, this app provides an efficient and user-friendly solution for teachers and educators to manage and monitor student attendance in various classrooms.

![Documentation](https://github.com/AfifArdhiansyah/presence-app-ICP/issues/1#issue-2054835443)

## Functions

Here is some functions that work in this app.

1. Function to create a new class (`aNewClass`).
   This function allows the user to create a new classroom and generates a unique 4-digit presence code for that class.

   ```
   const result = await aNewClass("STRUKTUR DATA");
   ```

2. Function to mark presence of students (`bDoPresence`).
   This function enables users to mark the attendance of a student by entering the presence code associated with a specific classroom.

   ```
   const result = await cDoPresence("4334", "NUR MUHAMMAD");
   ```

3. Function to get classroom attendance (`cGetClassroomAttendance`).
   Retrieve the attendance details for a specific classroom, including the class name, presence code, and a list of attendees.

   ```
   const result = await bGetClassroomAttendance("STRUKTUR DATA");
   ```


## How to Use

You can run this project by running the following command:

1. Clone the repository.
 
    ```
    git clone 
    ```

2. Install the dependencies.

    ```
    npm install
    ```

3. In the first terminal, start the `dfx` server.
   ```
   dfx start
   ```

4. In another terminal, deploy the app to start the web ui.
    ```
    dfx deploy
    ```

5. Open the URL that given from step 4 in your browser. Boom, you can access the presence app!
