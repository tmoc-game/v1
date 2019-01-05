import React from 'react';
import PropTypes from 'prop-types';

import GameBoard from '../../components/gameboard';
import Header from '../../components/header';
import ItemList from '../../components/itemlist';
import ItemDetailView from './item_detail_view';
import BuyNavigator from './navigator';

import '../../css/gameboard_layout.css';

function Buy(props) {
  const { products, currentInventory, gameStatus } = props;

  // Build a list array
  const priceTable = gameStatus.product_price_table;
  const itemList = Object.keys(gameStatus.product_price_table)
    .map((k) => ({
      code: k,
      image_url: products[k].image_url,
      price: priceTable[k].price,
      quantity: priceTable[k].quantity,
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
              <ItemDetailView
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
        <BuyNavigator />
      </div>
    </div>
  );
}
Buy.propTypes = {
  products: PropTypes.object,
  gameStatus: PropTypes.object,
  currentInventory: PropTypes.object,
};

const BuyView = GameBoard(Buy);

export default BuyView;
