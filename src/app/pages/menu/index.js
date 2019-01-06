import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentGameStatus, startANewGame } from '../../redux/status/actions';

import '../../css/menu.css';


// eslint-disable-next-line react/prefer-stateless-function
class Menu extends React.Component {
  componentWillMount() {
    this.props.getCurrentGameStatus();
  }

  isAvaliableContinue() {
    return this.props.day >= 0;
  }

  startANewGame() {
    this.props.startANewGame(this.isAvaliableContinue());
  }

  render() {
    const { day } = this.props;
    if (day === -2) return <div> Now Loading </div>;
    return (
      <div>
        <div className="menu_div">
          <p>
            <button className="menu_button" onClick={() => this.startANewGame()}>Start a new game</button>
          </p>
          { (this.isAvaliableContinue()) ? (
            <p>
              <Link to="inventory">
                <button className="menu_button">Continue the game</button>
              </Link>
            </p>
          ) : null }

        </div>
      </div>);
  }
}

Menu.propTypes = {
  day: PropTypes.number,
  getCurrentGameStatus: PropTypes.func,
  startANewGame: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    day: state.status.day,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentGameStatus: () => dispatch(getCurrentGameStatus()),
    startANewGame: (isAvaliableContinue) => dispatch(startANewGame(isAvaliableContinue)),
  };
}

const MenuView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);

export default MenuView;
