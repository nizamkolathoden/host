import React,{useState} from 'react';
import classes from './Admin.module.css'

const Newuser = () => {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [bValue,setBValue] = useState('Submit');
    const [rule,setRule] = useState('');
    const token = localStorage.getItem('mascStudetDb');

const assign = ()=>{
    fetch('http://ec2-54-173-232-140.compute-1.amazonaws.com:8000/auth/signup',{
        method:"Post",
        headers:{
            'Content-Type': 'application/json',
            "authorization": token.replace(/['"]+/g, '')
        },
        body:JSON.stringify({
            userName,
            password,
            rule
        })
    }).then(res=>res.json()).then(responce=>{
        console.log(responce);
        setBValue('Submit')
    }).catch(e=>{
        setBValue('Submit')
        alert('something wen wrong in server')
    })
}

    return (
        <div className={classes.admin} >
            <form className={classes.form} onSubmit={e=>{
                e.preventDefault()
                setBValue('Uploading..')
                assign()
            }}>
               <input className={classes.input} type="text"
                required
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    placeholder="Username"

                /><br/>
            <input className={classes.input} type="password"
                    required
                    value={password}
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}

                /><br/>
              
            <select className={classes.select} required 
            onChange={e=>{
              setRule(e.target.value)
            }}
            >
              <option value="user">user</option>
              <option value="admin">admin</option>
            
            </select>
           
                <input className={classes.submit} type = 'submit' value={bValue}/>
            </form>
        </div>
    );
};

export default Newuser;