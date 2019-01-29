import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startANewGame } from '../../redux/status/actions';

import formatter from '../../util/formatter';

import './css/ending.css';

// eslint-disable-next-line react/prefer-stateless-function
class End extends React.Component {
  startANewGame() {
    this.props.startANewGame(true);
  }
  render() {
    // eslint-disable-next-line no-return-assign
    return (
      <div className="ending_layout">
        <div><p className="top_text">Super Rich</p></div>
        <div>
          <div className="middle_innerBox">
            <div className="pic_box">
              <p className="ending_p">
                <img alt="rich" src="/image/rich_gold.jpg" />
              </p>
            </div>
            <div className="button_box">
              <div className="button_inner">
                <div>
                  <button className="ending_btn" onClick={() => this.startANewGame()}>Restart</button>
                </div>
                <div>
                  <Link to="/">
                    <button className="ending_btn">Main</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bottom_inner">
            <div className="money_text">
              <p className="ending_p">Total Money</p>
            </div>
            <div className="money_box">
              <p className="ending_p">{formatter.format(this.props.money)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

End.propTypes = {
  money: PropTypes.number,
  startANewGame: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    money: state.status.money,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startANewGame: () => dispatch(startANewGame(true)),
  };
}

const EndView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(End);

export default EndView;
