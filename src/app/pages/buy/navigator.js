import React from 'react';
import PropTypes from 'prop-types';

import './css/navigator.css';

function BuyNavigator(props) {
  return (
    <div className="buy_navigator">
      <div>
        <button onClick={props.onClickMax}>Max</button>
      </div>
      <div>
        <button onClick={props.onClickBuy}>Buy</button>
      </div>
    </div>
  );
}

BuyNavigator.propTypes = {
  onClickMax: PropTypes.func,
  onClickBuy: PropTypes.func,
};

export default BuyNavigator;
