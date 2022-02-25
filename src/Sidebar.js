import React from 'react';
import './Sidebar.css';
import {Avatar} from '@material-ui/core';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
function Sidebar(){
    const user= useSelector(selectUser)
    const recentitem = (topic) => (
        <div className="sidebar_recentitem">
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    console.log('user',user)

    return(
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" alt=""></img>
                <Avatar className='sidebar_avatar'/> 
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
                <div className="sidebar_stats">
                    <div className='sidebar_stat'>
                        <p>who viewed you</p>
                        <p className='sidebar_statnumber'>2000</p>
                    </div>
                    <div className='sidebar_stat'>
                        <p>views on post</p>
                        <p className='sidebar_statnumber'>3200</p>
                    </div>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentitem("react js")}
                {recentitem("programming")}
                {recentitem("Arts")}
                {recentitem("Animation")}
                {recentitem("google")}

            </div>

        </div>
         
         
    );

}
export default Sidebar;  