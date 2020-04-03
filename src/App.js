import React from 'react';
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={styles.appWrapper}>
        <Header />
        <Navbar />
        <div className={styles.appWrapperContent}>
          <Route path='/profile' render={() => <Profile state={props.appState.profilePage}/>}/>
          <Route path='/dialogs' render={() => <Dialogs state={props.appState.dialogsPage}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
