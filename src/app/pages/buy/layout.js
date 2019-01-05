import React from 'react';
// import PropTypes from 'prop-types';

import './css/layout.css';

export default function Layout() {
  return (
    <div className="buyLayout">
      <div className="itemList">Item List</div>
      <div className="itemDetailView">Item Detail View</div>
      <div className="tradeBar">Item Trade Bar</div>
    </div>);
}
Layout.propTypes = {
  // priceTable: PropTypes.object,
  // loadProductPrice: PropTypes.func,
};
