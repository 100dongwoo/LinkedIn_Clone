import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { logout, selectUser } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';

function Header(props) {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout);
        auth.signOut();
    };
    return (
        <div className="header">
            <div className="header_left">
                <img
                    src="https://wiredprgroup.com/wp-content/uploads/2014/06/linkedin-inbug-2crev.png"
                    alt="Logo"
                />

                <div className="header_search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={user.user.photoURL} title="me" />
            </div>
        </div>
    );
}

export default Header;
