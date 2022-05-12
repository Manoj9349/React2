import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Register.css';


function Register() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    


    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(fname);
        console.log(lname);
        console.log(email);
        console.log(password);
    }

    return (

        <div className="Reg">
            <Form onSubmit={handleSubmit}>
                
            <Form.Group size="lg" controlId="fname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="fname" value={fname} onChange={(e) => setFname(e.target.value)}/>
            </Form.Group>
                
                <Form.Group size="lg" controlId="lname">

                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lname" value={lname} onChange={(e) => setLname(e.target.value)}/>
                </Form.Group>

                <Form.Group size="lg" controlId="email">

                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> </Form.Group><br></br>
                <Button block size="lg" type="submit" disabled={!validateForm()}>Register</Button>
              
            </Form>
        </div>
    );
}

export default Register