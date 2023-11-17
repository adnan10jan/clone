// import React, { useState } from 'react';
// import firebase from '../firebase';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async (e) => {
//     e.preventDefault();

//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//     } catch (error) {
//       console.error('Error signing in:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign In</h2>
//       <form onSubmit={handleSignIn}>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
