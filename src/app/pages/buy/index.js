import React from 'react';
import PropTypes from 'prop-types';

import GameBoard from '../../components/gameboard';
import ItemList from '../../components/itemlist';
import ItemDetailView from '../../components/item_detail_view';
import BuyNavigator from './navigator';

import '../../css/gameboard_layout.css';

function Buy(props) {
  const {
    products,
    gameStatus,
    selectedItemCode,
    selectedAmount,
    onChangeSelectedAmount
  } = props;

  // Build a list array
  const priceTable = gameStatus.product_price_table;
  const itemList = Object.keys(gameStatus.product_price_table)
    .map((k) => ({
      code: k,
      image_url: products[k].image_url,
      price: priceTable[k].price,
      quantity: priceTable[k].quantity,
    }));
  const selectedItemDetailInfo = products[selectedItemCode] == null ?
    null :
    {
      code: selectedItemCode,
      ...products[selectedItemCode],
      ...priceTable[selectedItemCode],
      ownInventory: gameStatus.inventory[selectedItemCode],
    };

  const maxQuantity = selectedItemDetailInfo != null ? selectedItemDetailInfo.quantity : 0;

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
        <BuyNavigator
          onClickMax={() => onChangeSelectedAmount(maxQuantity)}
          onClickBuy={() => (selectedItemDetailInfo != null ? props.buy(selectedItemCode, selectedAmount) : null)}
        />
      </div>
    </div>
  );
}
Buy.propTypes = {
  products: PropTypes.object,
  gameStatus: PropTypes.object,
  selectedItemCode: PropTypes.any,
  onSelectItem: PropTypes.func,
  selectedAmount: PropTypes.number,
  onChangeSelectedAmount: PropTypes.func,
  buy: PropTypes.func,
};

const BuyView = GameBoard(Buy);

export default BuyView;
