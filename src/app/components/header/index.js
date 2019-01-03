import React from 'react';


import '../../css/header.css';

export default function Header() {
  return (
    <div className="header">
      <h1>
        <div className="inline_div" >
          <img alt="Back" src="/image/backArrow.png" width={75} height={75} />
        </div>
        <div className="inline_div" >
          <img alt="inventory" src="/image/inventory.png" width={75} height={75} />100 / 300
        </div>
        <div className="inline_div"> $20,000 </div>
        <div className="inline_div"> Day 1 </div>
        <div className="inline_div">
          <img alt="setting" src="/image/setting.png" width={75} height={75} />
        </div>
      </h1>
    </div>
  );
}

Header.propTypes = {
};
