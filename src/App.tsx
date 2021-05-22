import * as React from 'react';
import * as stores from './stores';
import { Converter, TrendChart } from './components';
import './App.css';

const App = () => (
    <div className="App">
        <header className="App-header">Secfi Frontend Assignment</header>
        <Converter
            uiStore={stores.uiStore}
            dataStore={stores.exchangeRateStore}
        />
        <TrendChart dataStore={stores.trendStore} />
        <footer>by Eszter Hofmann</footer>
    </div>
);

export default App;
