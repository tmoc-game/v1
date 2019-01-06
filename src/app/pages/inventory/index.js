import React from 'react';
import PropTypes from 'prop-types';

import GameBoard from '../../components/gameboard';
import ItemList from '../../components/itemlist';
import Controller from './controler';
import Navigator from './navigator';

import '../../css/gameboard_layout.css';

function Inventory(props) {
  const {
    gameStatus,
    currentInventory,
    products,
    upgradeInventory,
    downgradeInventory,
    inventory,
    sleep,
  } = props;

  const rentFee = currentInventory.daily_price;

  // Build a list array
  const userInventory = gameStatus.inventory;
  const itemList = Object.keys(userInventory)
    .map((k) => ({
      code: k,
      image_url: products[k].image_url,
      price: userInventory[k].avg_buying_price,
      quantity: userInventory[k].quantity,
    }));

  const nextLevelInventory = inventory[gameStatus.inventory_level + 1];
  const prevLevelInventory = inventory[gameStatus.inventory_level - 1];

  return (
    <div className="gameBoardLayout">
      <div className="boardBody">
        <div className="box">
          <div className="itemList">
            <div className="boardBox">
              <ItemList list={itemList} />
            </div>
          </div>
          <div className="itemDetailView">
            <div className="boardBox">
              <Controller
                rentFee={rentFee}
                upgrade={() => upgradeInventory(nextLevelInventory)}
                downgrade={() => downgradeInventory(prevLevelInventory)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="boarderFooter">
        <Navigator sleep={() => sleep()} />
      </div>
    </div>
  );
}

Inventory.propTypes = {
  products: PropTypes.object,
  gameStatus: PropTypes.object,
  inventory: PropTypes.object,
  currentInventory: PropTypes.object,
  upgradeInventory: PropTypes.func,
  downgradeInventory: PropTypes.func,
  sleep: PropTypes.func,
};

const InventoryView = GameBoard(Inventory);

export default InventoryView;
