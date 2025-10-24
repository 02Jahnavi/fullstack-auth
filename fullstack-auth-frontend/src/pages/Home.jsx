import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Fullstack Auth App</h1>
      <p style={styles.subtitle}>Please login or register to continue.</p>
      <div style={styles.buttons}>
        <Link to="/login" style={styles.button}>Login</Link>
        <Link to="/register" style={styles.button}>Register</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px'
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '40px'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold'
  }
};

export default Home;
