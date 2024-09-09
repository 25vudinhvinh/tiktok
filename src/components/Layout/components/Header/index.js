import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import image from '~/accset/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';




const cx = classNames.bind(styles)

const MENU_ITEM=[
    {icon: <FontAwesomeIcon icon={faEarthAsia}/>, 
    title: 'English'
    }, 

    {icon: <FontAwesomeIcon icon={faCircleQuestion}/>, 
    title: 'Feedback and help',
    to: '/feedback',
    }, 

    {icon: <FontAwesomeIcon icon={faKeyboard}/>, 
    title: 'Keyboard shortcuts'
    }, 
]

function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() =>{
            setTimeout(() => {
                setSearchResult([])    
            }, 3000);
    }, [])
    return (

        <header className={cx('wrapper')}>
            <div className={cx('inner')}>


                <img src={image.logo}  alt='tiktok'/>

                <Tippy 
                    interactive
                    visible={searchResult.length > 0}
                  render={attrs =>(

                    <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                         <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Account
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            
                        </PopperWrapper>
                    </div>
                  )}
                  >  
                <div className={cx('search')}>
                    <input placeholder='Search account and video' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                
                    <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                    </Tippy>

                <div className={cx('action')}>
                  <Button text> Upload </Button>
                  <Button primary> Log in </Button>

                 <Menu
                 items={MENU_ITEM}
                 >
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                 </Menu>
                </div>

            </div>


        </header>

    )
}

export default Header;