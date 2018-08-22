import './AppLinkComponent.scss';

import React, { Component } from 'react';


class AppLinkComponent extends Component {
  render() {
    return (
      <div className="media-link">
        <a href={this.props.to}>
          <div className="media-link__text">{this.props.text}</div>
          <div className="media-link__icon"><i className={`fa ${this.props.fontAwesomeClass}`} /></div>
        </a>
      </div>
    );
  }
}

export { AppLinkComponent };
