import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };
  //Redirect if authenticated
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <Fragment>
      <section id='signin'>
        <div className='signin-form'>
          <form className='form-horizontal check' onSubmit={(e) => onSubmit(e)}>
            <div className='col-xs-8 offset-md-4 italian'>
              <h1>Log in</h1>
            </div>
            <div className='form-group offset-md-1 row'>
              <div className='col-sm-12 inner-addon left-addon'>
                <i className='fas fa-envelope' />
                <input
                  type='text'
                  className='form-control'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                  required='required'
                />
              </div>
            </div>
            <div className='form-group offset-md-1 row'>
              <div className='col-sm-12 inner-addon left-addon'>
                <i className='fas fa-unlock' />
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                  required='required'
                />
              </div>
            </div>
            <button
              type='Submit'
              className='offset-md-3 btn btn-marhoon btn-lg'
              value='Login'
            >
              Sign in
            </button>
            <div className='text-center atag mt-2'>
              Don't have an account?<Link to='/register'>Sign up</Link>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
