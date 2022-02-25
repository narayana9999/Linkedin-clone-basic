import './App.css';
import  Nav from './Nav';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
import { useEffect } from 'react';
import {auth} from './firebase';
import { useDispatch} from 'react-redux';
import {login, logout} from './features/userSlice';
import Widgets from './Widgets';

function App() {
  const user= useSelector(selectUser)
  const dispatch= useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,

        }))
      }else{
        dispatch(logout());
       
      }

    })
    
  }, [])



  return (
     <div className='app'>
        {!user ? <Login/>:(

         <> 
       <Nav/>
       <div className="app_body">
          <Sidebar/>
          <Feed/>
          <Widgets/>
           

       </div>
       </>
       )}
       
        
       
     </div>
  );
}

export default App;
//https://linkedin-clone-1bcb7.web.app 