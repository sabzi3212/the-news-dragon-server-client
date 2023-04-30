import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <Container className='mx-auto w-25'>
            <h3>Please Login</h3>
            <Form>
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
        Register
      </Button>
      <br />
      <Form.Text className="text-muted text-secondary">
          Don't have an account? <Link to='/register'>Register Now</Link>
        </Form.Text>
      <Form.Text className="text-muted text-success">
          
        </Form.Text>
        <Form.Text className="text-muted text-danger">
          
        </Form.Text>
    </Form>
            
        </Container>
    );
};

export default Login;