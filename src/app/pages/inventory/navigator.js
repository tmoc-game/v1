import React from 'react';
// import PropTypes from 'prop-types';

import './css/navigator.css';

function InventoryNavigator() {
  return (
    <div className="inventory_navigator_inner">
      <div className="left_div">
        <button className="inventory_button">Buy</button>
      </div>
      <div className="left_div">
        <button className="inventory_button">Sell</button>
      </div>
      <div className="left_div">
        <img alt="sleep" src="/image/sleep.png" width={150} height={150} />
      </div>
    </div>
  );
}

InventoryNavigator.propTypes = {};

export default InventoryNavigator;
