import React from 'react';
import Feedback from './Feedback.jsx'

import './Partners.scss';

function Partners() {
  return (
    <div className="partners">
      <div className="partners__title">
        <h4>Partners & sponsors</h4>
        <h2>Official Sponsor</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="partners__tab">
            <div className="partners__tab-item">
              <a href="/">
                <img src={require("../../assets/brand-1.png")} alt="" />
              </a>
            </div>
            <div className="partners__tab-item">
              <a href="/">
                <img src={require("../../assets/brand-2.png")} alt="" />
              </a>
            </div>
            <div className="partners__tab-item">
              <a href="/">
                <img src={require("../../assets/brand-4.png")} alt="" />
              </a>
            </div>
            <div className="partners__tab-item">
              <a href="/">
                <img src={require("../../assets/brand-5.png")} alt="" />
              </a>
            </div>
            <div className="partners__tab-item">
              <a href="/">
                <img src={require("../../assets/brand-6.png")} alt="" />
              </a>
            </div>
            <div className="partners__tab-item">
              <a href="/">
                <img src={require("../../assets/brand-4.png")} alt="" />
              </a>
            </div>
            <div className="partners__tab-item">
              <a href="/">
                <img src={require("../../assets/brand-1.png")} alt="" />
              </a>
            </div>
            <div className="partners__tab-item">
              <a href="/">
                <img src={require("../../assets/brand-3.png")} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="partners__feedback">
            <Feedback />
            <Feedback />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
