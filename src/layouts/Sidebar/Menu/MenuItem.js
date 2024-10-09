import { NavLink } from "react-router-dom";
import classnames from "classnames/bind";
import styles from './Menu.module.scss'
const cx = classnames.bind(styles)

function MenuItem({title, to, icon, activeIcon}) {
    return ( 
        <NavLink to={to} className={(nav) => cx('menu-item', {active: nav.isActive})}>
           <span className={cx('activeIcon')}>{activeIcon}</span>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;