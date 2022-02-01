import React from 'react';

const Login = () => {
    return (
    <div>
        <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="email" className="form-control" placeholder="name@example.com" />


            <input type="password" className="form-control" placeholder="Password" />


            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
    </div>)
}

export default Login;