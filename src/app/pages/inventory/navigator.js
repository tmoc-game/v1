import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './css/navigator.css';

function InventoryNavigator(props) {
  return (
    <div className="inventory_navigator_inner">
      <div className="left_div">
        <Link to="/buy">
          <button className="inventory_button">Buy</button>
        </Link>
      </div>
      <div className="left_div">
        <Link to="/sell">
          <button className="inventory_button">Sell</button>
        </Link>
      </div>
      <div className="left_div" >
        <button className="img_button" onClick={props.sleep} >
          <img alt="sleep" src="/image/sleep.png" width={150} height={110} />
        </button>
      </div>
    </div>
  );
}

InventoryNavigator.propTypes = {
  sleep: PropTypes.func,
};

export default InventoryNavigator;
