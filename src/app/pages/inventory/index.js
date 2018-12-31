import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/header';

import '../../css/inventory.css';

export default function Inventory() {
  return (
    <div>
      <Header title={'Inventory'}></Header>
      <div>
        <p><textarea rows={1} cols={10} defaultValue={'50 / 100'} /></p>
        <p />
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              {new Array(5).fill(0).map((body, idx) => (
                <th key={`${body + idx}`}>
                  <div>
                    <span>
                      <img alt="cucumber" src="/image/cucumber.jpeg" width={100} height={100} />
                    </span>
                  </div>
                  <div>
                    <span>
                      <table className="price_table">
                        <tbody>
                          <tr>
                            <th>price</th>
                            <th>$10</th>
                          </tr>
                          <tr>
                            <th>amount</th>
                            <th>50</th>
                          </tr>
                        </tbody>
                      </table>
                    </span>
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
    </div>);
}

Inventory.propTypes = {
};
