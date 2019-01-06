import React from 'react';
import PropTypes from 'prop-types';

import './css/css.css';

/**
 * list = { code, image_url, price, quantity, status => 'increase, decrease or nothing' }
 */
export default function ItemList(props) {
  const { list, onSelectItem, selectedItemCode } = props;
  return (
    <div className="itemListBox">
      {list.map((item) => (
        <div key={item.code} className={selectedItemCode === item.code ? 'selected' : ''}>
          <button onClick={() => (onSelectItem ? onSelectItem(item.code) : null)} >
            <div className="icon">
              <img alt="cucumber" src={item.image_url} />
            </div>
            <div className="information">
              <div>
                <img alt="coin" src="/image/coin.jpg" />
                <span>
                  {item.price}
                </span>
              </div>
              <div>
                <img alt="inventory" src="/image/inventory.png" />
                <span>
                  {item.quantity}
                </span>
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>);
}
ItemList.propTypes = {
  list: PropTypes.array,
  onSelectItem: PropTypes.func,
  selectedItemCode: PropTypes.any,
};
