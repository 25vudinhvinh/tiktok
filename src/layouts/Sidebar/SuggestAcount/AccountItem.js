// import PropTypes from 'prop-types';
import classNames from 'classnames/bind'
import styles from './SuggestAcoun.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)


function AccountItem() {
    return ( 
        <div className={cx('account-item')}>
            <img className={cx('avatar')} src='https://ss-images.saostar.vn/wpr700/pc/1598497580051/1.jpg' alt='' />
            <div className={cx('infor-account')}>
                <h4 className={cx('nick-name')}>
                    theanh28
                    <FontAwesomeIcon className={cx('check-btn')} icon={faCheckCircle} />
                </h4>
                <p className={cx('full-name')}>The Anh 28 Entertaiment</p>
            </div>
        </div>
    );
}

AccountItem.propTypes={

}
export default AccountItem;