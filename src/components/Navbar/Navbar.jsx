import React from 'react';
import styles from './Navbar.module.css'
import {NavLink, useLocation} from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    return (<nav className={styles.nav}>
        <div className={styles.item}>
            <NavLink to="/uploadfile"
                     className={location.pathname === '/uploadfile' ? styles.active : undefined}
            > ПЗ-11 Загрузить файлы</NavLink>
        </div>

    </nav>)
}

export default Navbar
