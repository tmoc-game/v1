import React from 'react';
import Header from '../../components/header';
import '../../css/buy.css';

export default function Sell() {
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
        <div className="left_div" style={{ fontSize: '50px' }}>income:
          <img alt="coin" src="/image/coin.jpg" width="100" height="100" /> 2000
        </div>
        <div className="left_div" style={{ fontSize: '50px' }}>
          <img alt="inventory" src="/image/inventory.png" width="100" height="100" /> 2000
        </div>
        <div className="left_div">
          <button className="inventory_button">Max</button>
        </div>
        <div className="left_div">
          <button className="inventory_button">Sell</button>
        </div>
      </div>
    </div>);
}
