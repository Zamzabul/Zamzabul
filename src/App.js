import React from 'react';
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
      <div className={styles.appWrapper}>
        <Header />
        <Navbar />
        <div className={styles.appWrapperContent}>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
        </div>
      </div>
  );
}

export default App;
