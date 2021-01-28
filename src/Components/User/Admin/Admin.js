import React,{useContext} from 'react';
import {UserContext} from '../../../App'
import {useHistory} from 'react-router-dom'
import NewUser from './Newuser'
const Admin = () => {
    const history = useHistory()
    const { state } = useContext(UserContext);
     if(state!=='ADMIN') {
        alert('un autherized user')
        history.push('/')
    } 

    console.log(state);

    return (
        <div>
            <NewUser/>
           
        </div>
    );
};

export default Admin;