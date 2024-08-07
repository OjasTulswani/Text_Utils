// ModalLoginForm.js
import React, { useState } from 'react';
// import axios from 'axios';

const ModalLoginForm = ({ showModal, closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       // Make a request to your backend API to authenticate the user
//       const response = await axios.post('YOUR_BACKEND_API_ENDPOINT', { username, password });

//       // Handle the response as needed
//       console.log('Login successful:', response.data);

//       // Close the modal
//       closeModal();
//     } catch (error) {
//       console.error('Login failed:', error.message);
//     }
//   };

  return (
    <div style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal">
        <h2>Login</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {/* <button onClick={handleLogin}>Login</button> */}
        <button >Login</button>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default ModalLoginForm;
