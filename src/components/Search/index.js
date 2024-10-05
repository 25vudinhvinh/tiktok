import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faL, faMagnifyingGlass, faSpinner} from '@fortawesome/free-solid-svg-icons';
import  HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'

const cx = classNames.bind(styles)




function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)


    useEffect(() =>{
            setTimeout(() => {
                setSearchResult([1,])    
            }, 3000);
    }, [])

    const inputRef = useRef()


    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
        setSearchResult([])
        }

    const handleHideResult = () =>{
        setShowResult(false)
    }

    return (  
        <HeadlessTippy 
                    interactive
                    visible={showResult && searchResult.length > 0}
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
                  onClickOutside={handleHideResult}
                  >  
                <div className={cx('search')}>
                    <input
                    onFocus={() => {
                        setShowResult(true)
                    }}
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Search account and video' spellCheck={false} onChange={(e) => {
                        setSearchValue(e.target.value)
                        }} />
                   
                   {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>                    
                   )}

                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                
                    <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                    </HeadlessTippy>
    );
}

export default Search;