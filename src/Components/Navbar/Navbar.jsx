import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.item}>
                Profile
            </div>
            <div className={styles.item}>
                Message
            </div>
        </nav>
    );
}
export default Navbar;