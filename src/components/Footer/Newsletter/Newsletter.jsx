import "./Newsletter.scss";
import React, { useState } from "react";
import {toast} from 'react-toastify'
const Newsletter = () => {
    const [formState, setFormState] = useState({});
    const changeHandeler = (event) => {
        setFormState({...formState, [event.target.name] : event.target.value});
    }
    const submitHandeler = (event) =>{
        event.preventDefault();
        const config = {
            Username : process.env.UserName,
            Password : process.env.PassWord,
            Host : "smtp.elasticemail.com",
            Port : "2525",
            To : process.env.EmailTo,
            From : formState.email,
            Subject : "This is the email from my website",
            Body : `${formState.name} connected to you over email`
        };
        if(window.Email){
            window.Email.send(config).then(() => toast.success("send sucessfully"));
        }
    }
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Contact Us</span>
            <form action="" onSubmit={submitHandeler}>
            <div className="form">
                <div className="input">
                <input type="text" placeholder="Name" name="name" value={formState.name || ''} onChange={changeHandeler}/>
                </div>
                <div className="input">
                <input type="email" placeholder="Email" name="email" value={formState.email || ''} onChange={changeHandeler}/>
                </div>
                <div>
                <button type="submit">Send Email</button>
                </div>
            </div>
            </form>
        </div>
    </div>;
};
export default Newsletter;
