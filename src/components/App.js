import React, { Component } from 'react';
import MediaHeader from './MediaHeader';
import MediaBody from './MediaBody';
import MediaFooter from './MediaFooter';
import $ from 'jquery';

export default class App extends Component {
  render() {
    return (
        <div class="app">
          <MediaHeader></MediaHeader>
          <MediaBody></MediaBody>
          <MediaFooter></MediaFooter>
        </div>
    );
  }
}
