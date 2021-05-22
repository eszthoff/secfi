import * as React from 'react';
import * as stores from './stores';
import { Converter, TrendChart } from './components';
import styles from './App.module.css';

const App = () => (
    <div className={styles.App}>
        <header className={styles.border}>Secfi Frontend Assignment</header>
        <Converter
            uiStore={stores.uiStore}
            dataStore={stores.exchangeRateStore}
        />
        <TrendChart dataStore={stores.trendStore} />
        <footer className={styles.border}>by Eszter Hofmann</footer>
    </div>
);

export default App;
