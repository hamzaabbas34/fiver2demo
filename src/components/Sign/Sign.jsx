import React from "react";
import "../login/login.css"
export default function Sign() {
    return <div className="loginmaindiv">
        <div className="logindiv">
            <div className="login">
                <h2 className=" text-2xl">SignUp</h2>
                <p>Create Accouts here </p>
                    <input type="text" name="" id="" placeholder="Name" />
                    <input type="email" name="" id="" placeholder="Emial" />
                    <input type="password" name="" id="" placeholder="Password" />
                    <input type="password" name="" id="" placeholder="Confirm password" />
                    <button>Register</button>
            </div>
        </div>
    </div>
}
