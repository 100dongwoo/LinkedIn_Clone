import React from 'react';
import './headerOption.css';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function HeaderOption({ avatar, Icon, title }) {
    const user = useSelector(selectUser);
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption_icon" />}
            {avatar && (
                <Avatar className="headerOption_icon">
                    {user.user.displayName[0]}
                </Avatar>
            )}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    );
}

export default HeaderOption;
