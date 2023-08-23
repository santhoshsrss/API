import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const data = () => {
        axios.post(`https://63d75fc05c4274b136f30708.mockapi.io/Createoperator
        `, {
            name,
            email
        })
        
    }
    
  return (
    <div>
        <h2>CURD OPERATION</h2>
        <div className='center'>
            
            <form className='curd-operation'>
            
            <TextField 
                label="Name" 
                variant="outlined" 
                onChange={(e) => setName(e.target.value)}
            />

            <TextField 
                label="Email" 
                variant="outlined" 
                onChange={(e) => setEmail(e.target.value)}
            />
            
            <Button
                onClick = {data} 
                variant="contained">
                    Submit
            </Button>
            
            </form>
        </div>
        <p>{name}</p>
    </div>
  )
}

export default Create