import React from 'react';
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.appWrapper}>
        <Header />
        <Navbar />
        <div className={styles.appWrapperContent}>
          <Route path='/profile' component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
