import { useState } from 'react';
import { Button, Container, Form, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/auth.operation';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;

      default:
        break;
    }
  };

  const hendleSubmit = event => {
    event.preventDefault();
    const user = { name, email, password };
    dispatch(register(user));

    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <Container fluid="sm">
      <Form onSubmit={hendleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          className="mx-5"
          variant="dark"
          type="submit"
          disabled={name === '' || password === ''}
        >
          Submit
        </Button>
        <Button className="mx-5" variant="dark">
          <Nav.Link as={NavLink} to="/login" className="py-0">
            Already have an account?
          </Nav.Link>
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
