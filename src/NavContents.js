import React from 'react';
import './NavContents.css';
import {Avatar} from '@material-ui/core';
 
function NavContents({Icon, title, avatar, onClick}){
    return <div className='navContents_container'>
         { Icon && <Icon className="navContents_icon"/>}
         { avatar && <Avatar onClick={onClick} className='navContents_avatar'/>}
         <h3>{title}</h3>
    </div>
}
export default NavContents;