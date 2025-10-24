import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <p>No user info found. Please login.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <p>Welcome, {user.email}!</p>
      <p>Your role: {user.role}</p>
    </div>
  );
};

export default Dashboard;
