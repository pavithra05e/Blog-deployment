'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const AdminLogin = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (user === "admin" && pass === "1234") {
  localStorage.setItem('isAdmin', 'true'); // <-- ADD THIS
  router.push("/home"); // <-- Make sure this path matches your route
}
 else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="admin-login-form">
      <h2>Admin Login</h2>
      <input placeholder="Username" onChange={(e) => setUser(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
