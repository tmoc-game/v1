import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/header';
import Nav from '../../components/nav';

import '../../css/inventory.css';

export default function Inventory() {
  return (
    <div>
      <Header></Header>
      <div>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              {new Array(5).fill(0).map((body, idx) => (
                <th key={`${body + idx}`}>
                  <div className="left_div">
                    <img alt="cucumber" src="/image/cucumber.jpeg" width={100} height={100} />
                  </div>
                  <div>
                    price : $50 <br />amount : 100
                  </div>
                </th>)
              )}
            </tr>
          </tbody>
        </table>
        <p />
        <div>
          <span>
            <button className="inventory_button">increase capacity</button>
          </span>
          <span>
            <button className="inventory_button">decrease capacity</button>
          </span>
          <span>
            <button className="inventory_button">go to next day</button>
          </span>
        </div>
      </div>
      <div style={{ clear: 'left' }}>
        <Nav one={'buy'} two={'sell'}></Nav>
      </div>
    </div>);
}

Inventory.propTypes = {
};
