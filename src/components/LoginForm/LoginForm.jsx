import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className="login-page">
      <div className="form">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="password" />
          <button className="form-button">login</button>
          <p className="message">
            Already registered? <Link to="/register">Registration</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
