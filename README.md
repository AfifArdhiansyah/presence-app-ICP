# presence-app-ICP

## Overview

The Presence App is a comprehensive application designed to streamline attendance tracking in educational settings. Leveraging the power of the Azle library, this app provides an efficient and user-friendly solution for teachers and educators to manage and monitor student attendance in various classrooms.

![Documentation](https://private-user-images.githubusercontent.com/64957624/292635628-ea5909bc-8a95-457c-af83-c59639cb57b5.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDMzNDkzODksIm5iZiI6MTcwMzM0OTA4OSwicGF0aCI6Ii82NDk1NzYyNC8yOTI2MzU2MjgtZWE1OTA5YmMtOGE5NS00NTdjLWFmODMtYzU5NjM5Y2I1N2I1Lm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjIzVDE2MzEyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ2NzliY2QzMTc1NTJjYmEzYWFmM2IyZDMxNDk1NTA1MTM2MjVmZDcxMzRiMzRjOWEwMDNhYmE5ZjE4Mzg5NzEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.AyDWaYGFmloinvYsHh8OfrTjvICqYG2HOlR34uVae_M)

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
