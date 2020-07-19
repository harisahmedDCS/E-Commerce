import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Carditem = ({ card: { _id, title, price, img } }) => {
  return (
    <div className='card p-2 '>
      <img
        src={img}
        style={{ height: '300px' }}
        alt
        className='img-fluid card-img-top'
      />
      <div className='card-body'>
        <h4 className='card-title ml-5'>{title}</h4>
        <h5 className='price ml-5'>{price}</h5>
        <br />
        <ul className='rating'>
          <li className='fas fa-star' />
          <li className='fas fa-star' />
          <li className='fas fa-star' />
          <li className='fas fa-star' />
          <li className='fas fa-star' />
        </ul>
        <Link to={`/api/v1/card/${_id}`}>
          <button className='btn btn-secondary ml-5'>Add To Card</button>
        </Link>
      </div>
    </div>
  );
};

Carditem.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Carditem;
