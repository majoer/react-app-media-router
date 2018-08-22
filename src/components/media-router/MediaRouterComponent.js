import 'font-awesome/css/font-awesome.css';
import './MediaRouterComponent.scss';
import React, { Component } from 'react';
import { AppLinkComponent } from '../app-link/AppLinkComponent';

class MediaRouterComponent extends Component {

  render() {
    return (
      <div className="app-selector">
        <AppLinkComponent to="/media/music" text="MATSIFY" fontAwesomeClass="fa-headphones" />
        <AppLinkComponent to="/media/pictures" text="MATSR" fontAwesomeClass="fa-camera" />
        <AppLinkComponent to="/media/series" text="MATSFLIX" fontAwesomeClass="fa-film" />
      </div>
    );
  }
}

export { MediaRouterComponent };
