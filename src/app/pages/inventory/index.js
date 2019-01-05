import React from 'react';
import PropTypes from 'prop-types';

import GameBoard from '../../components/gameboard';
import Header from '../../components/header';
import ItemList from '../../components/itemlist';
import Controller from './controler';
import Navigator from './navigator';

import '../../css/gameboard_layout.css';

function Inventory(props) {
  const { gameStatus, currentInventory, products } = props;
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

  return (
    <div className="gameBoardLayout">
      <div className="boardHeader">
        <Header gameStatus={gameStatus} products={products} currentInventory={currentInventory} />
      </div>
      <div className="boardBody">
        <div className="box">
          <div className="itemList">
            <div className="boardBox">
              <ItemList list={itemList} />
            </div>
          </div>
          <div className="itemDetailView">
            <div className="boardBox">
              <Controller rentFee={rentFee} />
            </div>
          </div>
        </div>
      </div>
      <div className="boarderFooter">
        <Navigator />
      </div>
    </div>
  );
}

Inventory.propTypes = {
  products: PropTypes.object,
  gameStatus: PropTypes.object,
  currentInventory: PropTypes.object,
};

const InventoryView = GameBoard(Inventory);

export default InventoryView;
