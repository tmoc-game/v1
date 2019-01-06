import React from 'react';
import PropTypes from 'prop-types';

import './css/navigator.css';

function SellNavigator(props) {
  return (
    <div className="buy_navigator">
      <div>
        <button onClick={props.onClickMax}>Max</button>
      </div>
      <div>
        <button onClick={props.onClickSell}>Sell</button>
      </div>
    </div>
  );
}

SellNavigator.propTypes = {
  onClickMax: PropTypes.func,
  onClickSell: PropTypes.func,
};

export default SellNavigator;
