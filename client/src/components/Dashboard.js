import React, { Fragment, useState, useEffect } from "react";
import { toast } from 'react-toastify';


const Dashboard = ({setAuth})=>{

    const [name, setName] = useState('');

    async function getName(){
        try {
            const response = await fetch('http://localhost:3000/dashboard/', {
                method: 'GET',
                //Pass in token and where it's saved; trying to GET from the middleware the token saved
                headers: {token: localStorage.token}
            })

            //Parse/convert the json data so it can be used
            const parseRes = await response.json();

            setName(parseRes.user_name);
        } catch (err) {
            console.error(err.message)
        }
    }

    //Clears out localStorage to logout user
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setAuth(false);
        toast.success('Logged out successfully!')
    }

    useEffect(()=>{
        getName()
    },[])

    return (
        <Fragment>
            <h1>{`Welcome ${name}!`}</h1>
            <button className='btn btn-primary' onClick={e =>logout(e)}>Logout</button>
        </Fragment>
    );
};

export default Dashboard;