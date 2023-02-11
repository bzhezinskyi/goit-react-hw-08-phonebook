import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth.selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <h1>
        Welcome to the contact page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <h2>
        Go to{' '}
        {isLoggedIn ? (
          <NavLink to="/contacts">the contact page</NavLink>
        ) : (
          <NavLink to="/login">login</NavLink>
        )}
      </h2>
    </Container>
  );
};

export default HomePage;
