import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem( {data, onClick} ) {
    const classes = cx('menu-item', {
        separate: data.separate
    }) 
    return (  
       <Button className={classes} onClick={onClick} leftIcon={data.icon}> {data.title}  </Button>
    );
}

export default MenuItem;