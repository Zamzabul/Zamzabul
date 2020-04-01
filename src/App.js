import React from 'react';
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Header/>
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App;
