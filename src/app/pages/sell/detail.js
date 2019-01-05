import React from 'react';
import PropTypes from 'prop-types';

import './css/detail.css';

export default function ItemDetailView(props) {
  const {
    products,
    gameStatus,
    selectedProduceCode,
  } = props;

  if (selectedProduceCode == null) return <div>Please select product</div>;

  const product = products[selectedProduceCode];
  const priceTableItem = gameStatus.product_price_table[selectedProduceCode];
  const userInventoryItem = gameStatus.inventory[selectedProduceCode] == null ?
    { avg_buying_price: 0 } :
    gameStatus.inventory[selectedProduceCode];

  const selectedAmountOftheProduct = 10;

  return (
    <div className="detail_view_box">
      <div className="product_info">
        <div>
          <div className="icon">
            <img alt="cucumber" src={product.image_url} />
          </div>
          <div className="describe">
            <div className="product_name">
              <span>{product.label}</span>
            </div>
            <div>
              <img alt="coin" src="/image/coin.jpg" width="30" height="30" />
              <span>
                {priceTableItem.price}
              </span>
            </div>
            <div>
              <img alt="box" src="/image/inventory.png" width="30" height="30" />
              <span>
                {priceTableItem.quantity}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="buy_quantity">
          <span>Buy : </span>
          <input type="range" min={0} max={priceTableItem.quantity} value={selectedAmountOftheProduct} className="slider" id="myRange" />
          <span> [ {selectedAmountOftheProduct} ]</span>
        </div>
      </div>
      <div>
        <div className="sub_info">
          <div>
            <p>avg</p>
            <img alt="coin" src="/image/coin.jpg" width="30" height="30" />
            <span>
              {userInventoryItem.avg_buying_price}
            </span>
          </div>
          <div>
            <p>price</p>
            <img alt="coin" src="/image/coin.jpg" width="30" height="30" />
            <span>
              {selectedAmountOftheProduct * priceTableItem.price}
            </span>
          </div>
        </div>
      </div>
    </div>);
}

ItemDetailView.propTypes = {
  products: PropTypes.object,
  gameStatus: PropTypes.object,
  selectedProduceCode: PropTypes.string,
};
