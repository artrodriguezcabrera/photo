import React from 'react';
import louise from './assets/images/LakeLouise.JPG';
import iceland from './assets/images/Iceland.jpg';

const Galleries = props => (
  <div className="galleries">
    <div className="gallery-card">
      <img src={louise} alt="lake louise gallery" />
      <div className="copy">
        <p>Lake Louise</p>
      </div>
    </div>
    <div className="gallery-card">
      <img src={iceland} alt="iceland gallery" />
      <div className="copy">
        <p>Iceland</p>
      </div>
    </div>
    <div className="gallery-card">
      <img src={louise} alt="lake louise gallery" />
      <div className="copy">
        <p>Lake Louise</p>
      </div>
    </div>
  </div>
);

export default Galleries;