import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.item}>
                <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/dialogs' activeClassName={styles.activeLink}>Dialogs</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;