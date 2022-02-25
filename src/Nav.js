import React from 'react';
import './Nav.css';
import NavContents from './NavContents';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {auth} from './firebase';
import {useDispatch} from 'react-redux';
import {logout} from './features/userSlice';
 
function Nav(){
    const dispatch= useDispatch();
    const logoutApp=() =>{
        dispatch(logout())
        auth.signOut();
    }
    return(
        <div className='nav_container'>
            <div className='nav_left'>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>
                <div className='search_box'> 
                <SearchIcon/>
                <input type='text' placeholder='Search'/>
                </div>
            </div>
            <div className='nav_right'>
                 <NavContents Icon={HomeIcon} title="Home"/>
                 <NavContents Icon={SupervisorAccountIcon} title="My network"/>
                 <NavContents Icon={BusinessCenterIcon} title="jobs"/>
                 <NavContents Icon={ChatIcon} title="Message"/>
                 <NavContents Icon={NotificationsIcon} title="Notifications"/>
                 <NavContents avatar onClick={logoutApp} title="me"/>
            </div>
             
        </div>
    );
}
export default Nav;