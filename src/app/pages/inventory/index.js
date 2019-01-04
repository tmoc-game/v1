import React from 'react';
import PropTypes from 'prop-types';

import GameBoard from '../../components/gameboard';
import Item from './item';
import Controller from './controler';
import Navigator from './navigator';

import './css/page.css';

function Inventory(props) {
  const { gameStatus, currentInventory, products } = props;
  const userInventory = gameStatus.inventory;
  const rentFee = currentInventory.daily_price;

  return (
    <div>
      <div className="inventory_bg">
        <div className="inventory_item_list_box">
          {Object.keys(userInventory)
            .map((k) => (
              <Item key={k} product={products[k]} item={userInventory[k]} />
            ))
          }
        </div>
        <div className="inventory_control_box">
          <Controller rentFee={rentFee} />
        </div>
        <div className="inventory_navigate_box">
          <Navigator />
        </div>
      </div>
    </div>);
}

Inventory.propTypes = {
  products: PropTypes.object,
  gameStatus: PropTypes.object,
  currentInventory: PropTypes.object,
};

const InventoryView = GameBoard(Inventory);

export default InventoryView;
