import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item1'>
        <Link onClick={logout} to='/' className='nav-link'>
          <i className='fas fa-sign-out-alt '></i>
          <span className='hide-sm'> Logout</span>
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <Link to='/' className='nav-link'>
          Home
        </Link>
      </li>

      <li className='nav-item'>
        <Link to='/register' className='nav-link'>
          Register
        </Link>
      </li>

      <li className='nav-item'>
        <Link to='/login' className='nav-link'>
          Login
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar navbar-expand-md navbar-secondary bg-secondary fixed-top navtop'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          <h3 className='d-inline align-middle'>Eshop</h3>
        </Link>
      </div>
      <div className='collapse navbar-collapse' id='navbar-collapse'></div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
