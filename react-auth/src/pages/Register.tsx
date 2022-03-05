import React, { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch(process.env.REACT_APP_BACKEND_URL + "/api/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, email, password}),
        });
        setRedirect(true);
    };

    if (redirect) return (<Navigate to="/login"/>);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>
                <input className="form-control" placeholder="Name"  onChange={e => setName(e.target.value)} required/>
                <input type="email" className="form-control" placeholder="Email address" onChange={e => setEmail(e.target.value)} required/>
                <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)}required/>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
        </div>
    );
}

export default Register;