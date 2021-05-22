import * as React from 'react';
import * as stores from './stores';
import { Converter, TrendChart, CurrentRate } from './components';
import styles from './App.module.css';

const App = () => (
    <div className={styles.App}>
        <header className={styles.header}>Secfi Frontend Assignment</header>
        <section className={styles.main}>
            <Converter
                uiStore={stores.uiStore}
                dataStore={stores.exchangeRateStore}
                trendStore={stores.trendStore}
            />
            <CurrentRate
                uiStore={stores.uiStore}
                dataStore={stores.exchangeRateStore}
            />
            <TrendChart dataStore={stores.trendStore} />
        </section>
        <footer className={styles.footer}>by Eszter Hofmann</footer>
    </div>
);

export default App;
