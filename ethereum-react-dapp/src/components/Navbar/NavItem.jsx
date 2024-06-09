import React, {useState} from "react";
import styles from "./Navbar.module.css";

const NavItem = (props) => {
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

export default NavItem;
