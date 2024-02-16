import React, {useState} from 'react';
import styles from './Navbar.module.css'
import {NavLink, useLocation} from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (<nav className={styles.nav}>
        <div className={styles.item}>
            <NavLink to="/uploadfile"
                     className={location.pathname === '/uploadfile' ? styles.active : undefined}
            > ПЗ-12 Загрузить файлы</NavLink>
        </div>
        <NavItem name='ПЗ-13'>
            <div className={styles.item}>
                <NavLink to="/factorial"
                         className={location.pathname === '/factorial' ? styles.active : undefined}
                >Факториал</NavLink>
            </div>
           <div className={styles.item}>
               <NavLink to="/converter"
                        className={location.pathname === '/converter' ? styles.active : undefined}
               >Конвертер</NavLink>
           </div>
        </NavItem>
    </nav>)
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className={styles.dropdownMenu}>
            <div className={open ? styles.open : undefined} onClick={() => setOpen(!open)}>
                {props.name}
            </div>
            {open && props.children}
        </li>
    );
}


export default Navbar
