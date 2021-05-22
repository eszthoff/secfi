import * as React from 'react';
import { observer } from 'mobx-react-lite';
import TextField from '@material-ui/core/TextField';
import { UIStore, ExchangeRateStore, TrendStore } from '../../stores';
import { CurrencySelector } from '../CurrencySelector';
import styles from './Converter.module.css';

interface Props {
    uiStore: UIStore;
    dataStore: ExchangeRateStore;
    trendStore: TrendStore;
}

export const Converter: React.FC<Props> = observer((props) => {
    const {
        uiStore: { from, to, setFrom, setTo, amount, setAmount },
        dataStore: { getExchangeRate },
        trendStore: { getTrendData },
    } = props;

    const handleAmountUpdate = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setAmount(event.target.value);
    };

    const handleFromUpdate = (value: string | null) => {
        setFrom(value);
        if (value) {
            getExchangeRate({ from: value, to });
            getTrendData({ from: value, to });
        }
    };

    const handleToUpdate = (value: string | null) => {
        setTo(value);
        if (value) {
            getExchangeRate({ from, to: value });
            getTrendData({ from, to: value });
        }
    };

    return (
        <>
            <h1>Exchange rate</h1>
            <div className={styles.wrapper}>
                <TextField
                    type="number"
                    label="Amount to convert"
                    variant="outlined"
                    value={amount}
                    onChange={handleAmountUpdate}
                />
                <CurrencySelector
                    value={from}
                    onChange={handleFromUpdate}
                    label="Base currency"
                />
                <CurrencySelector
                    value={to}
                    onChange={handleToUpdate}
                    label="Target currency"
                />
            </div>
        </>
    );
});
