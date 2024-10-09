import classNames from 'classnames/bind'
import styles from './SuggestAcoun.module.scss'
import PropTypes from 'prop-types';

const cx = classNames.bind(styles)


function SuggestAccount({label, children}) {
    return (
        <div className={cx('wrapper')}>
        <p className={cx('label')}>{label}</p>
            {children}


            <span className={cx('see-all')}>See all</span>
        </div>
    )
}
SuggestAccount.propTypes={
    label: PropTypes.string.isRequired
}

export default SuggestAccount;