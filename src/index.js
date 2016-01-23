import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import BootstrapCss from 'bootstrap/less/bootstrap.less';
import MainCss from '!style!css!less!./../styles/main.less';
import Html from 'file?name=[name].[ext]!./../index.html';
import Manifest from 'file?name=[name].[ext]!./../manifest.json';
import Icon from 'file?name=[name].[ext]!./../images/icon48.png';

ReactDOM.render(<App />, document.getElementById('root'));