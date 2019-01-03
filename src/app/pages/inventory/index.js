import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/header';

import '../../css/inventory.css';

export default function Inventory() {
  return (
    <div>
      <Header></Header>
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
        <div className="content_one_div">Rent : 2800 /day</div>
        <div className="content_one_div">
          <button className="content_button">increase<br />capacity<img alt="increase" src="/image/ArrowsUp.jpeg" width="50px" height="50" /></button>
        </div>
        <div className="content_one_div">
          <button className="content_button">decrease<br />capacity<img alt="decrease" src="/image/ArrowsDown.jpeg" width="50px" height="50" /></button>
        </div>
      </div>
      <div className="button_div">
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
    </div>);
}

Inventory.propTypes = {
};
