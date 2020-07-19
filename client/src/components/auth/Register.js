import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();

    register({ name, email, password, password2 });
  };
  // if (isAuthenticated) {
  //   return <Redirect to='/login' />;
  // }

  return (
    <Fragment>
      <div className='signup-form my-5 py-5'>
        <form className='form-horizontal' onSubmit={(e) => onSubmit(e)}>
          <div className='col-xs-8 offset-md-4'>
            <h2>Sign Up</h2>
          </div>
          <div className='form-group row'>
            <label className='col-sm-4 col-form-label'>Username</label>
            <div className='col-sm-8'>
              <input
                type='text'
                className='form-control'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                // required='required'
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-4 col-form-label'>Email Address</label>
            <div className='col-sm-8'>
              <input
                type='email'
                className='form-control'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                // required='required'
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-4 col-form-label'>Password</label>
            <div className='col-sm-8'>
              <input
                type='password'
                className='form-control'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
                // required='required'
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-4 col-form-label'>Conform Password</label>
            <div className='col-sm-8'>
              <input
                type='password'
                className='form-control'
                name='password2'
                value={password2}
                onChange={(e) => onChange(e)}
                // required='required'
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-xs-8 offset-md-4'>
              <p>
                <label className='checkbox-inline'>
                  <input type='checkbox' />
                  &nbsp;I accept the
                  <a href='#'>Terms of Use</a> &amp;
                  <a href='#'>Privacy Policy</a>.
                </label>
              </p>
              <button
                type='submit'
                className='btn btn-outline-secondary btn-lg'
                value='Register'
              >
                Register
              </button>
            </div>
          </div>
        </form>
        <div className='text-center account'>
          Already have an account?<Link to='/login'>Login here</Link>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
