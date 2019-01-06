import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getCurrentGameStatus,
  upgradeInventory,
  downgradeInventory,
  sleep,
  buy,
  sell,
} from '../../redux/status/actions';

import Header from '../header';

const style = {
  gameboardComponentBg: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden',
  },
  boardHeader: {
    flex: 0,
  },
  boardBody: {
    display: 'grid',
    flex: 1,
  },
};

export default function GameBoard(WrappedComponent) {
  // eslint-disable-next-line react/prefer-stateless-function
  class GameBoardComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedItemCode: null,
        selectedAmount: 0,
      };
    }
    componentWillMount() {
      this.props.getCurrentGameStatus();
    }

    onSelectItem(code) {
      this.setState({ selectedItemCode: code, selectedAmount: 0 });
    }
    onChangeSelectedAmount(amount) {
      this.setState({ selectedAmount: amount });
    }

    render() {
      // Loading Check...
      const { gameStatus, inventory, products } = this.props;

      if (gameStatus.day === -1) window.location = '#menu';
      if (gameStatus.day < 0 || Object.keys(inventory).length < 0) return <div>Now Loading...</div>;

      // find my current inventory
      const inventoryLevel = gameStatus.inventory_level;
      const currentInventory = inventory[inventoryLevel];

      return (
        <div style={style.gameboardComponentBg}>
          <div style={style.boardHeader}>
            <Header gameStatus={gameStatus} products={products} currentInventory={currentInventory} />
          </div>
          <div style={style.boardBody}>
            <WrappedComponent
              {...this.props}
              {...this.state}
              currentInventory={currentInventory}
              onSelectItem={(code) => this.onSelectItem(code)}
              onChangeSelectedAmount={(amount) => this.onChangeSelectedAmount(amount)}
            />
          </div>
        </div>
      );
    }
  }

  GameBoardComponent.propTypes = {
    children: PropTypes.object,
    products: PropTypes.object,
    gameStatus: PropTypes.object,
    inventory: PropTypes.object,
    getCurrentGameStatus: PropTypes.func,
  };

  function mapStateToProps(state) {
    return {
      products: state.static.products,
      gameStatus: state.status,
      inventory: state.static.inventory,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      getCurrentGameStatus: () => dispatch(getCurrentGameStatus()),
      upgradeInventory: (next) => dispatch(upgradeInventory(next)),
      downgradeInventory: (prev) => dispatch(downgradeInventory(prev)),
      sleep: () => dispatch(sleep()),
      buy: (code, quantity) => dispatch(buy(code, quantity)),
      sell: (code, quantity) => dispatch(sell(code, quantity)),
    };
  }

  const GameBoardComponentView = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(GameBoardComponent);

  return GameBoardComponentView;
}
