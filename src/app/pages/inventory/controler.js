import React from 'react';
import PropTypes from 'prop-types';

import './css/controller.css';

function InventoryController(props) {
  const { rentFee, upgrade, downgrade } = props;

  return (
    <div className="inventory_control_box_inner">
      <div className="inventory_control_rentfee_text">
        <span>
          Rent : {rentFee} /day
        </span>
      </div>
      <div className="inventory_control_btn">
        <button onClick={upgrade} className="content_button">increase<br />capacity<img alt="increase" src="/image/ArrowsUp.jpeg" width="50px" height="50" /></button>
      </div>
      <div className="inventory_control_btn">
        <button onClick={downgrade} className="content_button">decrease<br />capacity<img alt="decrease" src="/image/ArrowsDown.jpeg" width="50px" height="50" /></button>
      </div>
    </div>
  );
}

InventoryController.propTypes = {
  rentFee: PropTypes.number,
  upgrade: PropTypes.func,
  downgrade: PropTypes.func,
};

export default InventoryController;
