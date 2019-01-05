import React from 'react';
import PropTypes from 'prop-types';

import GameBoard from '../../components/gameboard';
import Header from '../../components/header';
import ItemList from '../../components/itemlist';
import DetailView from './detail';
import NavigatorView from './navigator';

import '../../css/buy.css';

function Sell(props) {
  const { products, currentInventory, gameStatus } = props;

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
              <DetailView
                selectedProduceCode="0"
                products={products}
                gameStatus={gameStatus}
                currentInventory={currentInventory}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="boarderFooter">
        <NavigatorView />
      </div>
    </div>
  );
}

Sell.propTypes = {
  products: PropTypes.object,
  gameStatus: PropTypes.object,
  currentInventory: PropTypes.object,
};

const SellView = GameBoard(Sell);

export default SellView;
