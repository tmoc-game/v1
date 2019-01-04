import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadDefaultSettings } from '../../redux/static/actions';

import '../../css/menu.css';

// eslint-disable-next-line react/prefer-stateless-function
class Menu extends React.Component {
  componentWillMount() {
    this.props.loadDefaultSettings();
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
  loadDefaultSettings: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    day: state.status.day,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadDefaultSettings: () => dispatch(loadDefaultSettings()),
  };
}

const MenuView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);

export default MenuView;
