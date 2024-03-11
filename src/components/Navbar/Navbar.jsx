import React from 'react';
import styles from './Navbar.module.css'
import {NavLink, useLocation} from "react-router-dom";
import NavItem from "./NavItem";

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
        <NavItem name='ПЗ-14'>
            <div className={styles.item}>
                <NavLink to='/converter-advance'
                         className={location.pathname === '/converter-advance' ? styles.active : undefined}
                >Конвертер 2</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/custom-converter'
                         className={location.pathname === '/custom-converter' ? styles.active : undefined}
                >Настраиваемый конвертер</NavLink>
            </div>
        </NavItem>
        <NavItem name='ПЗ-15'>
            <div className={styles.item}>
                <NavLink to='/calculator'
                         className={location.pathname === '/calculator' ? styles.active : undefined}
                >Калькулятор</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/bitwise-calculator'
                         className={location.pathname === '/bitwise-calculator' ? styles.active : undefined}
                >Бинарный Калькулятор</NavLink>
            </div>
        </NavItem>
    </nav>)
}


export default Navbar
