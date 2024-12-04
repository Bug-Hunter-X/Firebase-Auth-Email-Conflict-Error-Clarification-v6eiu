# Firebase Authentication Error Handling Bug

This repository demonstrates a common but easily missed error in Firebase Authentication: creating a user with an email that already exists without proper error handling. The resulting error message is not intuitive and can cause confusion.

The `firebaseBug.js` file shows the problematic code, and `firebaseBugSolution.js` provides the correct solution.  This highlights the importance of using `onAuthStateChanged` and checking for existing users to avoid ambiguous errors and improve user experience.

## How to reproduce:
1. Clone the repository.
2. Set up your Firebase project and install necessary packages: `npm install firebase`
3. Replace placeholder Firebase config values in `firebaseBug.js` with your actual configuration.
4. Run the code.  The error will only be caught properly in the solution file.  Attempting to register with an existing email will expose the bug in the original file.

## Solution:
The improved version in `firebaseBugSolution.js` demonstrates how to properly handle the email-in-use error by checking the user's existence before attempting to create a new account.