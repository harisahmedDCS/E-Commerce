import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCard } from '../../actions/post';
import Addcarditem from './Addcarditem';
import { getCard } from '../../actions/card';
const Addcart = ({ addCard, getCard, _id, post: { posts }, match }) => {
  useEffect(() => {
    getCard();
    console.log(`my id is${_id}`);
    addCard(match.params.id);
  }, [addCard]);
  return (
    <div>
      <Addcarditem posts={posts} />
    </div>
  );
};

Addcart.propTypes = {
  addCard: PropTypes.func.isRequired,
  getCard: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
  id: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  card: state.card,
});

export default connect(mapStateToProps, { addCard, getCard })(Addcart);
