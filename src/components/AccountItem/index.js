import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountItem() {
    return (  
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} alt='Vinh' src='https://kenh14cdn.com/203336854389633024/2024/2/27/4286295549671828914307716571424009725047858n-17090418136991839694724.jpeg' />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Vu Dinh Vinh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>vudinhvinh</span>
            </div>
        </div>
    );
}

export default AccountItem;