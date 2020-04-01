import React from 'react';
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <Navbar />
      <div className={styles.appWrapperContent}>
        {/* <Profile/> */}
      </div>
      <div className={styles.appWrapperContent}>
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
