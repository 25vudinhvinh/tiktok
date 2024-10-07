import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,  faMagnifyingGlass, faSpinner} from '@fortawesome/free-solid-svg-icons';
import  HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { useDebounce } from '~/hooks';


const cx = classNames.bind(styles)




function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debounceValue = useDebounce(searchValue, 500)
    useEffect(() =>{
        if(!debounceValue){
            setSearchResult([])
            return
        }
            setLoading(true)
           fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${debounceValue}&type=less`)
           .then(res => res.json())
           .then((res) =>{
            setSearchResult(res.data)
            setLoading(false)
           })
    }, [debounceValue])

    const inputRef = useRef()


    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
        setSearchResult([])
        }

    const handleHideResult = () =>{
        setShowResult(false)
    }

    const handleSearchValue = (e) => {
        const searchValue = e.target.value
        if(!searchValue.startsWith(' ')){
            setSearchValue(searchValue)
        }

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
                            {searchResult.map((result) => {
                                return <AccountItem key={result.id} data={result} />
                            })}
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
                    placeholder='Search account and video' spellCheck={false} onChange={handleSearchValue} />
                   
                   {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>                    
                   )}

                   {loading&& <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                    </HeadlessTippy>
    );
}

export default Search;