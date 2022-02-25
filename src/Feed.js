import React, {useEffect, useState} from 'react';
import firebase from 'firebase/compat/app'
import './Feed.css';
import InputItems from './InputItems';
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Posts from './Posts';
import db from './firebase';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
function Feed(){
    const user= useSelector(selectUser);
    const [input, setInput]= useState('')
    const [posts, setPosts]= useState([])
    useEffect(() => {
        console.log(user)
        db.collection('posts').orderBy("timestamp","desc").onSnapshot((snapshot)=> {
            setPosts(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data: doc.data()

                }
            )))
        })
    },[])

     
    const sendpost=(e) =>{
        e.preventDefault();
        //database
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.profilePic || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')

    }
    return(
        <div className='feed_container'>
            <div className="container">
                <div className="input_container">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={(e=> setInput(e.target.value))} type='text'/>
                        <button onClick={sendpost} type="submit">Submit</button>
                    </form>

                </div>
                <div className='input_items'>
                    <InputItems Icon={ImageIcon} title='Photo' color='#70b5f9'/>
                    <InputItems Icon={SubscriptionsIcon} title='Video' color='green'/>
                    <InputItems Icon={EventNoteIcon} title='Event' color='pink'/>
                    <InputItems Icon={CalendarViewDayIcon} title='Write Article' color='#70b5f9'/>
                </div>
                 
            </div>
            {posts.map(({id, data:{name, description,message, photoUrl}})=>( 
            <Posts 
             key={id}
             name={name}
             description={description}
             message={message}
             photoUrl= {photoUrl}
             />

    ))}
        </div>

    );
}
export default Feed;

//Redux
// global store
//user is logging in your app
// app =>login => feed => 100s of components => 100th
// Parent to child component
// REdux //datalayer //global store
// React context Api is also a data
//userslice==>>>