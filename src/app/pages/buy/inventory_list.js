import React from 'react';
import PropTypes from 'prop-types';

import './css/list.css';

export default function InventoryList(props) {
  const { products, gameStatus } = props;

  const userInventory = gameStatus.inventory;
  const priceTable = gameStatus.product_price_table;

  return (
    <div className="inventoryBox">
      {Object.keys(userInventory)
        .map((k) => {
          const product = products[k];
          const invenProduct = priceTable[k];
          return (
            <div key={k} >
              <div className="icon">
                <img alt="cucumber" src={product.image_url} />
              </div>
              <div className="left_div">
                <div style={{ fontSize: '30px' }}>
                  <img alt="coin" src="/image/coin.jpg" width={30} height={30} />
                  <span>
                    {invenProduct.price}
                  </span>
                </div>
                <div style={{ fontSize: '30px' }}>
                  <img alt="inventory" src="/image/inventory.png" width={30} height={30} />
                  <span>
                    {invenProduct.quantity}
                  </span>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>);
}
InventoryList.propTypes = {
  products: PropTypes.object,
  gameStatus: PropTypes.object,
};
