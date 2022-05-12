import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
        console.log(password);
        if(email === "admin@gmail.com" && password === "admin@123"){
            console.log("Login Successful");
        }else{
          alert('Invalid User');
        }
    }

    return (
        

        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">

                    <Form.Label>Email</Form.Label>
                    <Form.Control  value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> </Form.Group><br></br>
                <Button  block size="lg" type="submit" name={handleSubmit ? 1 : 0} disabled={!validateForm()}>Login</Button>
                <a href="/register"> Register</a>
            </Form>
        </div>
    );
}

export default Login;