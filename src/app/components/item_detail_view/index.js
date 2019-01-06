import React from 'react';
import PropTypes from 'prop-types';

import './css/css.css';

export default function ItemDetailView(props) {
  const {
    itemInfo,
    selectedAmount
  } = props;

  if (itemInfo == null) return <div>Please select product</div>;
  return (
    <div className="detail_view_box">
      <div className="product_info">
        <div>
          <div className="icon">
            <img alt="cucumber" src={itemInfo.image_url} />
          </div>
          <div className="describe">
            <div className="product_name">
              <span>{itemInfo.label}</span>
            </div>
            <div>
              <img alt="coin" src="/image/coin.jpg" width="30" height="30" />
              <span>
                {itemInfo.price}
              </span>
            </div>
            <div>
              <img alt="box" src="/image/inventory.png" width="30" height="30" />
              <span>
                {itemInfo.quantity}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="buy_quantity">
          <span>Quantity : </span>
          <input
            type="range"
            min={0}
            max={itemInfo.quantity}
            value={selectedAmount}
            className="slider"
            onChange={((e) => props.onChangeSelectedAmount(e.target.value))}
          />
          <span> [ {selectedAmount} ]</span>
        </div>
      </div>
      <div>
        <div className="sub_info">
          <div>
            <p>avg</p>
            <img alt="coin" src="/image/coin.jpg" width="30" height="30" />
            <span>
              {itemInfo.ownInventory ? itemInfo.ownInventory.avg_buying_price : 0}
            </span>
          </div>
          <div>
            <p>price</p>
            <img alt="coin" src="/image/coin.jpg" width="30" height="30" />
            <span>
              {selectedAmount * itemInfo.price}
            </span>
          </div>
        </div>
      </div>
    </div>);
}

ItemDetailView.propTypes = {
  itemInfo: PropTypes.object,
  selectedAmount: PropTypes.any,
  onChangeSelectedAmount: PropTypes.func,
};
