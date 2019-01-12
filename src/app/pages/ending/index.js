import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import formatter from '../../util/formatter';

import '../../css/ending.css';

// eslint-disable-next-line react/prefer-stateless-function
class End extends React.Component {
  render() {
    return (
      <div>
        <h1>Total amount of money</h1>
        <div className="end_divA">
          {formatter.format(this.props.money)}
        </div>
        <br />
        <h2><Link to="/">Home</Link></h2>
      </div>
    );
  }
}

End.propTypes = {
  money: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    money: state.status.money,
  };
}

function mapDispatchToProps() {
  return {};
}

const EndView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(End);

export default EndView;
