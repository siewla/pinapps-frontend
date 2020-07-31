import React, { useState, useEffect} from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { authenticate, isAuth } from '../helpers/auth'
import { Link, Redirect } from 'react-router-dom'

const Activate = ({match}) => {
    const [formData, setFormData] = useState({  
        name: '',
        token:'',
        show: true
    })

    useEffect(() => {
        let token = match.params.token;
        let { name } = jwt.decode(token);
    
        if (token) {
            setFormData({ ...formData, name, token });
        }
    
        console.log(token, name);
    }, [formData, match.params]);

    const { name, token } = formData;

    const handleSubmit = event => {
        event.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/activation/`,{
            token
        }).then(res =>{
            // setFormData({...formData, show:false})
            console.log(formData)
            console.log(res.data.message)
        }).catch(err =>{
            console.log(formData)
            console.log(err.response.data.error)
        })
    }

    return (
        <div>
        {isAuth() ?<Redirect to='/' />: null}
            <div>
                <h1>Welcome {name}</h1>
                <form onSubmit={handleSubmit}>
                    <button type="submit">Activate Your Account</button>
                </form>
                <a href ='/register'><span>Not Registered?</span></a>
            </div>
        </div>
    )
}

export default Activate
