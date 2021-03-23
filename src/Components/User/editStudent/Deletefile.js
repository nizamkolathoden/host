import React from 'react'
import classes from './EditStudent.module.css'
import { FaTrash } from "react-icons/fa";

export default function DeleteFile() {
    return (
        <div className={classes.delete} >
            <FaTrash size="20px" color="#fafafa" />
        </div>
    )
}
