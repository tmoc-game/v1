import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentGameStatus } from '../../redux/status/actions';

import '../../css/menu.css';

// eslint-disable-next-line react/prefer-stateless-function
class Menu extends React.Component {
  componentWillMount() {
    this.props.getCurrentGameStatus();
  }

  render() {
    const { day } = this.props;
    if (day === -2) return <div> Now Loading </div>;
    return (
      <div>
        <div className="menu_div">

          <p>
            <Link to="inventory">
              <button className="menu_button">Start a new game</button>
            </Link>
          </p>
          { (day >= 0) ? (
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
};

function mapStateToProps(state) {
  return {
    day: state.status.day,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentGameStatus: () => dispatch(getCurrentGameStatus()),
  };
}

const MenuView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);

export default MenuView;
