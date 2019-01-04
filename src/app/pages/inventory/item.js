import React from 'react';
import PropTypes from 'prop-types';

import './css/item.css';

function InventoryItem(props) {
  const { item, product } = props;

  return (
    <div className="inventory_item">
      <div className="inventory_icon_box">
        <img alt="cucumber" src={product.image_url} />
      </div>
      <div>
        <div style={{ fontSize: '30px' }}>
          <img alt="coin" src="/image/coin.jpg" width={30} height={30} />
          <span>{item.avg_buying_price}</span>
        </div>
        <div style={{ fontSize: '30px' }}>
          <img alt="inventory" src="/image/inventory.png" width={30} height={30} />
          <span>{item.quantity}</span>
        </div>
      </div>
    </div>
  );
}

InventoryItem.propTypes = {
  item: PropTypes.object,
  product: PropTypes.object,
};

export default InventoryItem;
