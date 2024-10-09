
import config from '~/configs';
import styles from './Sidebar.module.scss'
import classNames from "classnames/bind";
import Menu, {MenuItem} from './Menu'
import { actionCam, actionCamActive, homeIcon,  homeIconActive,  userForward, userForwardActive } from '~/components/Icons/Icon';





const cx = classNames.bind(styles)

function Sidebar() {
    return (<aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title='For you' to={config.routes.home} icon={homeIcon} activeIcon={homeIconActive}/>
            <MenuItem title='Following' to={config.routes.following} icon={userForward} activeIcon={userForwardActive}  />
            <MenuItem title='LIVE' to={config.routes.live} icon={actionCam} activeIcon={actionCamActive}/>
        </Menu>
    </aside>)
}
export default Sidebar;