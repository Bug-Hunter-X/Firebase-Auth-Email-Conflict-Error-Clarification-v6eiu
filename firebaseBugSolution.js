This improved version uses `createUserWithEmailAndPassword` within a try...catch block and checks for `auth/email-already-in-use` error.

```javascript
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Initialize Firebase Authentication and Firestore
const auth = getAuth();
const db = getFirestore();

async function createUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User created:', userCredential.user);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.error('Email already in use:', error.message);
      // Handle the error appropriately, for example, display a message to the user.
    } else {
      console.error('Error creating user:', error);
    }
  }
}

// Check user existence before creating user
onAuthStateChanged(auth, async (user) => {
  if (user) {
    // User is signed in, see docs for a current user. 
    console.log(user.email);
  } else {
    // User is signed out
    // Attempt to create a user
    createUser("test@example.com", "password123"); 
  }
});
```