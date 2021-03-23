import React from 'react';
import EditForm from './EditForm'
import Nav from '../Navigation/StudentNav'
import classes from './EditStudent.module.css'
import Delete from './Deletefile'
const EditStudent = () => {
    return (
        <div className={classes.EditStudent}>
            <Nav />
            <EditForm/>
            <Delete />
        </div>
    );
};

export default EditStudent;