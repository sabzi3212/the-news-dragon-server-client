/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useState } from 'react';


const Login = () => {
  const {signInUser} = useContext(AuthContext);
  const [success, setSuccess] =useState('');
  const navigate = useNavigate();
  const location = useLocation();
  console.log('login page location', location);
  const from = location.state?.from?.pathname || '/category/0'
  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signInUser(email,password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      setSuccess('login Successful');
      navigate(from, {replace: true});
    })
    .catch(error =>{
      console.log(error);
    })
  }
    return (
        <Container className='mx-auto w-25'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Form.Text className="text-muted text-secondary">
          Don't have an account? <Link to='/register'>Register Now</Link>
        </Form.Text>
      <Form.Text className="text-muted text-success">
          
        </Form.Text>
        <Form.Text className="text-muted text-danger">
          
        </Form.Text>
        <p>{success}</p>
    </Form>
            
        </Container>
    );
};

export default Login;