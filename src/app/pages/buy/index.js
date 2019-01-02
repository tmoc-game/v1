import React from 'react';
// import PropTypes from 'prop-types';
import Nav from '../../components/nav';
import Header from '../../components/header';
import '../../css/buy.css';

export default function Buy() {
  return (
    <div>
      <Header></Header>
      <div className="left_div">
        <table className="buy_table">
          <tbody>
            <tr>
              <td bgcolor="lightblue">
                <div style={{ display: 'flex' }}>
                  <div className="left_div">
                    <img alt="cucumber" src="/image/cucumber.jpeg" width={100} height={100} />
                  </div>
                  <div> price : $50 <br />amount : 100
                  </div>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  <div className="left_div">
                    <img alt="cucumber" src="/image/cucumber.jpeg" width={100} height={100} />
                  </div>
                  <div> price : $50 <br />amount : 100
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="left_div">
                  <img alt="cucumber" src="/image/cucumber.jpeg" width={100} height={100} />
                </div>
                <div> price : $50 <br />amount : 100
                </div>
              </td>
              <td>
                <div className="left_div">
                  <img alt="cucumber" src="/image/cucumber.jpeg" width={100} height={100} />
                </div>
                <div> price : $50 <br />amount : 100
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table>
          <tr>
            <td>
              <img altimg alt="cucumber" src="/image/cucumber.jpeg" width={100} height={100} />
            </td>
            <td>
              <div>price : $50 <br />amount: 100
              </div>
            </td>
          </tr>
        </table>
        <div className="slidecontainer">
          <input type="range" min={1} max={57} defaultValue={0} className="slider" id="myRange" /> 20
        </div>
        <div> average price: $40 </div>
        <div className="inline_div"> total cost: $80</div>
        <div className="inline_div"> amount: 30</div>
        <div className="inline_div"> Max</div>
        <div className="inline_div"> Buy</div>
      </div>
      <div style={{ clear: 'left' }}>
        <Nav one={'inventory'} two={'sell'}></Nav>
      </div>
    </div>
  );
}
