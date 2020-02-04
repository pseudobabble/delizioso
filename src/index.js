import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles/main.css';
import './styles/colors.css'
import './styles/monotony.css'
import Layout from './components/Layout/layout';

const App = () => (
  <div>
    <Layout />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
