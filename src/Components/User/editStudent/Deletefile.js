import React from 'react'
import classes from './EditStudent.module.css'
import { FaTrash } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


export default function DeleteFile() {
    const token = localStorage.getItem('mascStudetDb');
    const { id } = useParams();

    //history
    const history = useHistory();

    const deleteData = () => {
        fetch('https://mascdb.herokuapp.com/student/delete', {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                "authorization": token.replace(/['"]+/g, '')
            },
            body: JSON.stringify({
                id
            })
        }).then(res => res.json()).then(response => {
            console.log(response);
            if (response.error) {
                alert('something went wrong');
            } else {
                alert('Student deleted successfully');
                history.push("/");
            }
        })
    }
    return (
        <div className={classes.delete} onClick={() => deleteData()} >
            <FaTrash size="20px" color="#fafafa" />
        </div>
    )
}
