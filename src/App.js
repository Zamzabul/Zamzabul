import React from 'react';
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
