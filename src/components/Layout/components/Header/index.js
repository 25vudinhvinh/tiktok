import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import image from '~/accset/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUpload,  faEnvelope, faPerson, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '~/components/Search';



const currentUser = true

const cx = classNames.bind(styles)

const MENU_ITEM=[
    {icon: <FontAwesomeIcon icon={faEarthAsia}/>, 
    title: 'English',
    children: {
        title: 'Language',
        data: [
            {
                code: 'en',
                title: 'English'
            },

            {
                code: 'vi',
                title: 'Tieng Viet'
            },
        ]
    }
    }, 

    {icon: <FontAwesomeIcon icon={faCircleQuestion}/>, 
    title: 'Feedback and help',
    to: '/feedback',
    }, 

    {icon: <FontAwesomeIcon icon={faKeyboard}/>, 
    title: 'Keyboard shortcuts'
    }, 
]


const USER_MENU =[
    {icon: <FontAwesomeIcon icon={faPerson}/>, 
    title: 'View profile',
    to: '/profile',
    }, 

    {icon: <FontAwesomeIcon icon={faGear}/>, 
    title: 'Setting',
    to: '/setting',
    }, 

    ...MENU_ITEM,

    {icon: <FontAwesomeIcon icon={faRightFromBracket}/>, 
    title: 'Log out',
    separate: true,
    }, 

]

function Header() {
    return (

        <header className={cx('wrapper')}>
            <div className={cx('inner')}>


                <img src={image.logo}  alt='tiktok'/>

                {/* search */}
                <Search />

                <div className={cx('action')}>
                  {currentUser ? (
                    <>
                        <Tippy 
                        content='Up load'
                        placement='bottom'
                        delay={[0, 200]}>
                        <button className={cx('up-load')}>
                            <FontAwesomeIcon icon={faUpload} />
                        </button>
                        </Tippy>

                        <Tippy content='Mail box'
                        placement='bottom'
                        delay={[0, 200]}>
                        <button className={cx('mail-box')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                        </Tippy>
                    </>
                  ) : (
                    <>
                    <Button text> Upload </Button>
                    <Button primary> Log in </Button>
                    </>
                  )}


                 <Menu
                 items={currentUser ? USER_MENU : MENU_ITEM}
                 >
                    {currentUser ? (
                      <button>  
                    <img className={cx('user-avt')} alt='vdv' src='https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-1/449389151_981026420483376_2696510306111695113_n.jpg?stp=dst-jpg_s480x480&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF-NkbVGOkMpEzzcoXOV-jiPP2RwR5CmEM8_ZHBHkKYQ0gI24_HiJAWlALIZHLs6hLQXpr8c-A2qX79bYMwYNbr&_nc_ohc=H1KKUTpStzQQ7kNvgHwWNw-&_nc_ht=scontent.fhan14-4.fna&_nc_gid=ArYfnmNPeodR2eZkIy0JNxc&oh=00_AYA1PkDmggAWwZu6BOVjuorauJ9mbzT_HcmqI4XlMYFJvA&oe=6702EA05' />
                      </button> 
                    ) : (
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                    )}
                 </Menu>
                </div>

            </div>


        </header>

    )
}

export default Header;