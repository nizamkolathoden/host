import React,{useContext} from 'react';
import StudentsNav from '../Navigation/StudentNav'
import {UserContext} from '../../../App'
import {useHistory} from 'react-router-dom'
import NewUser from './Newuser'
const Admin = () => {
    const Admin = JSON.parse(localStorage.getItem('mascAdmin'));
    const history = useHistory()
    const { state } = useContext(UserContext);
     if(Admin.rule!=='admin') {
        alert('un autherized user')
        history.push('/')
    } 

    console.log(state);

    return (
        <div>
            <StudentsNav/>
            <NewUser/>
        </div>
    );
};

export default Admin;