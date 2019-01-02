import React from 'react';


import '../../css/header.css';

export default function Header() {
  return (
    <div className="header">
      <h1>
        <div className="inline_div"> 100 / 300 </div>
        <div className="inline_div"> $20,000 </div>
        <div className="inline_div"> Day 1 </div>
      </h1>
    </div>
  );
}

Header.propTypes = {
};
