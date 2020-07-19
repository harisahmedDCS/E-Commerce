import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addshopCard } from '../../actions/shopcart';
import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';
const Addcarditem = ({
  posts: { _id, title, price, img },
  addshopCard,
  shopcart,
  setAlert,
}) => {
  const onClick = async (e) => {
    e.preventDefault();

    addshopCard(_id);
  };

  return (
    <div>
      {setAlert()}
      <div className='container mt-5'>
        <table id='cart' className='table table-hover table-condensed'>
          <thead>
            <tr>
              <th style={{ width: '50%' }}>Product</th>
              <th style={{ width: '10%' }}>Price</th>
              <th style={{ width: '8%' }}>Quantity</th>
              <th style={{ width: '10%' }} />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-th='Product'>
                <div className='row'>
                  <div className='col-sm-2 hidden-xs'>
                    <img
                      style={{ width: '100px', height: '100px' }}
                      src={img}
                      alt='...'
                      className='img-responsive'
                    />
                  </div>
                  <div className='col-sm-10'>
                    <h4 className='nomargin ml-5 mt-5'>{title}</h4>
                  </div>
                </div>
              </td>
              <td data-th='Price'>{price}</td>
              <td data-th='Quantity'>
                <input
                  type='number'
                  className='form-control text-center'
                  defaultValue={1}
                />
              </td>

              <td className='actions' data-th>
                <button
                  className='btn btn-info btn-sm'
                  onClick={() => window.location.reload(false)}
                >
                  <i className='fa fa-refresh' />
                </button>

                <button className='btn btn-danger btn-sm'>
                  <i className='fa fa-trash-o' />
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <Link to='/'>
                  <a href='#' className='btn btn-warning'>
                    <i className='fa fa-angle-left' /> Continue Shopping
                  </a>
                </Link>
              </td>
              <td colSpan={3} className='hidden-xs' />
              <td className='hidden-xs text-center'>
                <strong>
                  Total {'Rs.'}
                  {price}
                </strong>
              </td>

              <td>
                <button
                  href='#'
                  className='btn btn-success btn-block'
                  onClick={(e) => onClick(e)}
                >
                  Checkout <i className='fa fa-angle-right' />
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

Addcarditem.propTypes = {
  post: PropTypes.object.isRequired,
  shops: PropTypes.object.isRequired,
  addshopCard: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  shopcart: state.shopcart,
});
export default connect(mapStateToProps, { addshopCard, setAlert })(Addcarditem);
