import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import { getCurrentGameStatus } from '../../redux/status/actions';

export default function GameBoard(WrappedComponent) {
  // eslint-disable-next-line react/prefer-stateless-function
  class GameBoardComponent extends React.Component {
    componentWillMount() {
      this.props.getCurrentGameStatus();
    }

    render() {
      // Loading Check...
      const { gameStatus, inventory, products } = this.props;
      if (gameStatus.day < 0 || Object.keys(inventory).length < 0) return <div>Now Loading...</div>;

      // find my current inventory
      const inventoryLevel = gameStatus.inventory_level;
      const currentInventory = inventory[inventoryLevel];

      return (
        <div>
          <Header gameStatus={gameStatus} products={products} currentInventory={currentInventory} />
          <WrappedComponent {...this.props} currentInventory={currentInventory} />
        </div>);
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
    };
  }

  const GameBoardComponentView = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(GameBoardComponent);

  return GameBoardComponentView;
}
