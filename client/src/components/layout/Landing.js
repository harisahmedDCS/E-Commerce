import React, { useEffect } from 'react';
import pic1 from '../../img/pic1.jpg';
import pic2 from '../../img/pic2.jpg';
import pic3 from '../../img/pic3.jpg';
import pic4 from '../../img/pic4.jpg';
import pic5 from '../../img/pic5.jpg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCard } from '../../actions/card';
import Carditem from './Carditem';
const Landing = ({ getCard, auth, card: { cards } }) => {
  useEffect(() => {
    getCard();
  }, []);
  return (
    <div>
      <section>
        <div className='mb-2'>
          <div id='slider1' className='carousel slide' data-ride='carousel'>
            <ol className='carousel-indicators'>
              <li className='active' data-target='#slider1' data-slide-to={0} />
              <li data-target='#slider1' data-slide-to={1} />
              <li data-target='#slider1' data-slide-to={2} />
            </ol>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  className='d-block img-fluid img-center'
                  src={pic3}
                  alt='First slide'
                />
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block img-fluid .img-center '
                  src={pic2}
                  alt='First slide'
                />
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block img-fluid .img-center '
                  src={pic5}
                  alt='First slide'
                />
              </div>
            </div>
            {/* Controls */}
          </div>
        </div>
      </section>
      <input className='text offset-md-4 search-1 mb-5 pl-2' />
      <i className='fa fa-search ' />
      {/* Card component */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card-columns'>
              {cards.length > 0 ? (
                cards.map((card) => <Carditem key={card._id} card={card} />)
              ) : (
                <h4>No Card....</h4>
              )}

              {/* <div className='card p-2'>
                <img src={pic2} alt className='img-fluid card-img-top' />
                <div className='card-body'>
                  <h4 className='card-title ml-5'>Mens Shoes</h4>
                  <h5 className='price'>$30</h5>
                  <br />
                  <ul className='rating'>
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                  </ul>
                  <button className='btn btn-secondary ml-5'>
                    Add To Card
                  </button>
                </div>
              </div> */}
              {/* <div className='card p-2'>
                <img src={pic2} alt className='img-fluid card-img-top' />
                <div className='card-body'>
                  <h4 className='card-title ml-5'>Mens Shoes</h4>
                  <h5 className='price'>$30</h5>
                  <br />
                  <ul className='rating'>
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                  </ul>
                  <button className='btn btn-secondary ml-5'>
                    Add To Card
                  </button>
                </div>
              </div>
              <div className='card p-2'>
                <img src={pic2} alt className='img-fluid card-img-top' />
                <div className='card-body'>
                  <h4 className='card-title ml-5'>Mens Shoes</h4>
                  <h5 className='price'>$30</h5>
                  <br />
                  <ul className='rating'>
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                  </ul>
                  <button className='btn btn-secondary ml-5'>
                    Add To Card
                  </button>
                </div>
              </div>
              <div className='card p-2'>
                <img src={pic2} alt className='img-fluid card-img-top' />
                <div className='card-body'>
                  <h4 className='card-title ml-5'>Mens Shoes</h4>
                  <h5 className='price'>$30</h5>
                  <br />
                  <ul className='rating'>
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                  </ul>
                  <button className='btn btn-secondary ml-5'>
                    Add To Card
                  </button>
                </div>
              </div> */}
              {/* <div className='card p-2'>
                <img src={pic2} alt className='img-fluid card-img-top' />
                <div className='card-body'>
                  <h4 className='card-title ml-5'>Mens Shoes</h4>
                  <h5 className='price'>$30</h5>
                  <br />
                  <ul className='rating'>
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                    <li className='fas fa-star' />
                  </ul>
                  <button className='btn btn-secondary ml-5'>
                    Add To Card
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Landing.propTypes = {
  getCard: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  card: state.card,
});
export default connect(mapStateToProps, { getCard })(Landing);
