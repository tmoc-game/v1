import React from 'react';
import PropTypes from 'prop-types';

import GameBoard from '../../components/gameboard';
import InventoryList from './inventory_list';
import ItemDetailView from './item_detail_view';
import BuyNavigator from './navigator';

import './css/layout.css';
import '../../css/buy.css';

function Buy(props) {
  const { products, currentInventory, gameStatus } = props;

  return (
    <div className="buyLayout">
      <div className="itemList">
        <InventoryList products={products} gameStatus={gameStatus} />
      </div>
      <div className="itemDetailView">
        <ItemDetailView
          selectedProduceCode="0"
          products={products}
          gameStatus={gameStatus}
          currentInventory={currentInventory}
        />
      </div>
      <div className="tradeBar">
        <BuyNavigator />
      </div>
    </div>);
  /*
  return (
    <div>
      <div className="inventory_div">
        <div className="inventory_one_div">
          <div className="left_div">
            <img alt="cucumber" src="/image/cucumber.jpeg" width={170} height={170} />
          </div>
          <div className="left_div">
            <div style={{ fontSize: '30px' }}>
              <img alt="coin" src="/image/coin.jpg" width={30} height={30} /> 20
            </div>
            <div style={{ fontSize: '30px' }}>
              <img alt="inventory" src="/image/inventory.png" width={30} height={30} /> 200
            </div>
          </div>
        </div>
        <div className="inventory_one_div">
          <div className="left_div">
            <img alt="cucumber" src="/image/cucumber.jpeg" width={170} height={170} />
          </div>
          <div className="left_div">
            <div style={{ fontSize: '30px' }}>
              <img alt="coin" src="/image/coin.jpg" width={30} height={30} /> 20
            </div>
            <div style={{ fontSize: '30px' }}>
              <img alt="inventory" src="/image/inventory.png" width={30} height={30} /> 200
            </div>
          </div>
        </div>
        <div className="inventory_one_div">
          <div className="left_div">
            <img alt="cucumber" src="/image/cucumber.jpeg" width={170} height={170} />
          </div>
          <div className="left_div">
            <div style={{ fontSize: '30px' }}>
              <img alt="coin" src="/image/coin.jpg" width={30} height={30} /> 20
            </div>
            <div style={{ fontSize: '30px' }}>
              <img alt="inventory" src="/image/inventory.png" width={30} height={30} /> 200
            </div>
          </div>
        </div>
        <div className="inventory_one_div" clear="both">
          <div className="left_div">
            <img alt="cucumber" src="/image/cucumber.jpeg" width={170} height={170} />
          </div>
          <div className="left_div">
            <div style={{ fontSize: '30px' }}>
              <img alt="coin" src="/image/coin.jpg" width={30} height={30} /> 20
            </div>
            <div style={{ fontSize: '30px' }}>
              <img alt="inventory" src="/image/inventory.png" width={30} height={30} /> 200
            </div>
          </div>
        </div>
        <div className="inventory_one_div" clear="both">
          <div className="left_div">
            <img alt="cucumber" src="/image/cucumber.jpeg" width={170} height={170} />
          </div>
          <div className="left_div">
            <div style={{ fontSize: '30px' }}>
              <img alt="coin" src="/image/coin.jpg" width={30} height={30} /> 20
            </div>
            <div style={{ fontSize: '30px' }}>
              <img alt="inventory" src="/image/inventory.png" width={30} height={30} /> 200
            </div>
          </div>
        </div>
        <div className="inventory_one_div" clear="both">
          <div className="left_div">
            <img alt="cucumber" src="/image/cucumber.jpeg" width={170} height={170} />
          </div>
          <div className="left_div">
            <div style={{ fontSize: '30px' }}>
              <img alt="coin" src="/image/coin.jpg" width={30} height={30} /> 20
            </div>
            <div style={{ fontSize: '30px' }}>
              <img alt="inventory" src="/image/inventory.png" width={30} height={30} /> 200
            </div>
          </div>
        </div>
      </div>
      <div className="content_div">
       <div className="content_one_div">
          <div className="left_div">
            <img alt="cucumber" src="/image/cucumber.jpeg" width={100} height={100} />
          </div>
          <div className="left_div">
            <div><img alt="coin" src="/image/coin.jpg" width="30" height="30" />80</div>
            <div><img alt="coin" src="/image/inventory.png" width="30" height="30" />80</div>
          </div>
        </div>
        <div className="content_one_div">cucumber</div>
        <div className="content_one_div">
          <div className="slidecontainer">
            <input type="range" min="1" max="57" value="0" className="slider" id="myRange" />
          </div>
        </div>
        <div className="content_one_div">inventory average<br />
          <img alt="coin" src="/image/coin.jpg" width="30" height="30" />80
        </div>
      </div>
      <div className="button_div">
        <div className="left_div" style={{ fontSize: '50px' }}>cost :
          <img alt="coin" src="/image/coin.jpg" width="100" height="100" /> 2000
        </div>
        <div className="left_div" style={{ fontSize: '50px' }}>
          <img alt="inventory" src="/image/inventory.png" width="100" height="100" /> 2000
        </div>
        <div className="left_div">
          <button className="inventory_button">Max</button>
        </div>
        <div className="left_div">
          <button className="inventory_button">Buy</button>
        </div>
      </div>
    </div>);
    */
}
Buy.propTypes = {
  products: PropTypes.object,
  gameStatus: PropTypes.object,
  currentInventory: PropTypes.object,
};

const BuyView = GameBoard(Buy);

export default BuyView;
