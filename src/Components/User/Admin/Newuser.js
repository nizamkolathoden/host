import React,{useState} from 'react';
// import classes from '../EditStudent.module.css'
 import classes from '../editStudent/EditStudent.module.css'

const Newuser = () => {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [bValue,setBValue] = useState('Submit');
    const [rule,setRule] = useState('');
    const token = localStorage.getItem('mascStudetDb');

const assign = ()=>{
    fetch('https://mascsdb.herokuapp.com/auth/signup',{
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
        <div>
            <h1>Add New User</h1>
            <form onSubmit={e=>{
                e.preventDefault()
                setBValue('Uploading..')
                assign()
            }}>
                Username<input type="text"
                required
                    value={userName}
                    onChange={e => setUserName(e.target.value)}

                /><br/>
             Password<input type="password"
                    
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}

                /><br/>
                <label htmlFor="Rule"
              className={classes.InputField}>Rule</label>
            <select required 
            
            onChange={e=>{
              setRule(e.target.value)
            }}
            >

            <option value=''></option>
              <option value="user">user</option>
              <option value="admin">admin</option>
            
            </select>
           
                <input type = 'submit' value={bValue}/>
            </form>
        </div>
    );
};

export default Newuser;