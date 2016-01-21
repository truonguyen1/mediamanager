import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MainCss from '!style!css!less!./../styles/main.less';
import Html from 'file?name=[name].[ext]!./../index.html';
import Manifest from 'file?name=[name].[ext]!./../manifest.json';

ReactDOM.render(<App />, document.getElementById('root'));