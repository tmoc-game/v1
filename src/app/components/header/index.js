/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import formatter from '../../util/formatter';

import './css/css.css';

const accumulater = (ac, cv) => ac + cv;

export default function Header(props) {
  const { gameStatus, currentInventory, products } = props;

  const inventoryUsage = Object.keys(gameStatus.inventory)
    .map((k) => products[k].use_inventory_slot * gameStatus.inventory[k].quantity)
    .reduce(accumulater, 0);

  return (
    <div className="header">
      <div onClick={() => window.history.back()}>
        <img alt="Back" src="/image/backArrow.png" width={75} height={75} />
      </div>
      <div>
        <img alt="inventory" src="/image/inventory.png" width={75} height={75} />
        <span>
          {inventoryUsage} / {currentInventory.size}
        </span>
      </div>
      <div>
        {formatter.format(gameStatus.money)}
      </div>
      <div>
        <span>
          Day {gameStatus.day + 1}
        </span>
      </div>
      <div>
        <img alt="setting" src="/image/setting.png" width={75} height={75} />
      </div>
    </div>
  );
}

Header.propTypes = {
  gameStatus: PropTypes.object,
  products: PropTypes.object,
  currentInventory: PropTypes.object,
};
