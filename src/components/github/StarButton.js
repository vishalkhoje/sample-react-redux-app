import React from 'react';

const StarButton = () => (
  <div className="star-button-container">
    <small>Leave a star on Github if this repository was useful :)</small>
    <a
      className="github-button"
      href="https://vishalkhoje.github.io/sample-react-redux-app"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star vishalkhoje/sample-react-redux-app on GitHub"
    >
      Star
    </a>
  </div>
);

export default StarButton;
