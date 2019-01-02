import React from 'react';
// import PropTypes from 'prop-types';
import '../../css/ending.css';

export default function End() {
  return (
    <div>
      <h1>Total amount of money</h1>
      <div className="end_divA">$1,000,000</div>
      <div className="end_divB">
        <ul>
          <li>start date : 02/23/2018</li>
          <li>end date : 03/23/2018</li>
        </ul>
      </div>
      <div className="end_divC">the number of trades</div>
      <div className="end_divB">
        <ul>
          <li>buy : 50</li>
          <li>sell : 49</li>
        </ul>
      </div>
    </div>
  );
}
