import styles from './Button.module.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function Button({ to, 
    href, 
    leftIcon,
    rightIcon,
    className=false,
    rounded=false,
    disable=false,
    text=false,
    primary=false,
    outline=false,
    small=false,
    large=false, 
    medium=false,
    children,
    onClick, ...passProps}) {
    let Comp = 'button'
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        medium,
        large,
        text,
        disable,
        rounded,
        [className]: className,
    })
    const props = {
        onClick,
        ...passProps,
    }

    if(disable){
        Object.keys(props).forEach(key =>{
            if (key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key]
            }
        } )
    }

    if (to){
        props.to = to
        Comp = Link
    } else if (href){
        props.href = href
        Comp = 'a'
    }
    return (
        <Comp className={classes}  {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button;