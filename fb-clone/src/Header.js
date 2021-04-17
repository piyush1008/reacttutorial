import React from 'react';
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import {Avatar} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import AddIcon  from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from './StateProvider';

function Header() {
    const[{user},dispatch]=useStateValue();
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://img.icons8.com/cute-clipart/64/000000/facebook-new.png"/>
                <div className="header_input">
                    <SearchIcon />
                    <input type="text" placeholder="Search facebook"/>
                </div>
            </div>

            <div className="header_center">
                <div className="header__option
                header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontIcon fontSize="large"/>
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL} />
                    <h4> {user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;