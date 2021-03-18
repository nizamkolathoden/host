import React from 'react'
import classes from './StudentCard.module.css'
import { useHistory } from 'react-router-dom'
const StudentCard = (props) => {
   
    const history = useHistory()
    return (

        <div onClick={() => {
            history.push(`/editstudent/${props.id}`)
        }} className={classes.StudentCardContainer} 
        >
            <div className={classes.StudentPhoto}>
                <div className={classes.Photo}>
                    <img src={props.pic} alt="Loading ...." />
                </div>
            </div>
            <div className={classes.StudentDetails}>
                <p className={classes.name}><span>Name : </span>{props.name || 'Loading..'}</p>
                <p className={classes.course}><span>course : </span>{props.programme || 'Loading..'}</p>
                <p className={classes.batch}><span>batch : </span>{props.batch || 'Loading..'}</p>
                <p className={classes.admno}><span>Admnno :</span>{props.admno || 'Loading...'}</p>
            </div>
        </div>

    )
}

export default StudentCard
