import React from 'react';
import PropTypes from 'prop-types';

import GameBoard from '../../components/gameboard';
import ItemList from '../../components/itemlist';
import ItemDetailView from '../../components/item_detail_view';
import NavigatorView from './navigator';

import '../../css/buy.css';

function Sell(props) {
  const {
    products,
    selectedAmount,
    onChangeSelectedAmount,
    selectedItemCode,
    gameStatus,
  } = props;

  // Build a list array
  const priceTable = gameStatus.product_price_table;
  const userInventory = gameStatus.inventory;
  const itemList = Object.keys(userInventory)
    .map((k) => ({
      code: k,
      image_url: products[k].image_url,
      price: priceTable[k].price,
      quantity: userInventory[k].quantity,
    }));

  const selectedItemDetailInfo = userInventory[selectedItemCode] == null ?
    null :
    {
      code: selectedItemCode,
      ...products[selectedItemCode],
      ...priceTable[selectedItemCode],
      quantity: userInventory[selectedItemCode].quantity,
      ownInventory: gameStatus.inventory[selectedItemCode],
    };

  const maxQuantity = selectedItemDetailInfo != null ? selectedItemDetailInfo.ownInventory.quantity : 0;

  return (
    <div className="gameBoardLayout">
      <div className="boardBody">
        <div className="box">
          <div className="itemList">
            <div className="boardBox">
              <ItemList
                list={itemList}
                selectedItemCode={selectedItemCode}
                onSelectItem={props.onSelectItem}
              />
            </div>
          </div>
          <div className="itemDetailView">
            <div className="boardBox">
              <ItemDetailView
                itemInfo={selectedItemDetailInfo}
                selectedAmount={selectedAmount}
                onChangeSelectedAmount={onChangeSelectedAmount}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="boarderFooter">
        <NavigatorView
          onClickMax={() => onChangeSelectedAmount(maxQuantity)}
          onClickSell={() => (selectedItemDetailInfo != null ? props.sell(selectedItemCode, selectedAmount) : null)}
        />
      </div>
    </div>
  );
}

Sell.propTypes = {
  products: PropTypes.object,
  gameStatus: PropTypes.object,
  selectedItemCode: PropTypes.any,
  onSelectItem: PropTypes.func,
  selectedAmount: PropTypes.any,
  onChangeSelectedAmount: PropTypes.func,
  sell: PropTypes.func,
};

const SellView = GameBoard(Sell);

export default SellView;
