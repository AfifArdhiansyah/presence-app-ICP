# presence-app-ICP

## Overview

The Presence App is a comprehensive application designed to streamline attendance tracking in educational settings. Leveraging the power of the Azle library, this app provides an efficient and user-friendly solution for teachers and educators to manage and monitor student attendance in various classrooms.

![Documentation](https://github-production-user-asset-6210df.s3.amazonaws.com/64957624/292635628-ea5909bc-8a95-457c-af83-c59639cb57b5.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231223%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231223T162827Z&X-Amz-Expires=300&X-Amz-Signature=b1d82e939b2f892b88f85b3f18cb82dfe82ecb4cb79bbf4a109b5022feea2b67&X-Amz-SignedHeaders=host&actor_id=64957624&key_id=0&repo_id=735075565)

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
