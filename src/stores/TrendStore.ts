import { makeAutoObservable } from 'mobx';
import { getExchangeTrendDataFromAPI, formatExchangeTrendData } from '../utils';

/**
 * Store holding exchange rate trend
 */
export class TrendStore {
    trend: ExchangeTrendData = [];

    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    getExchangeRate = ({ from, to }: { from: string; to: string }): void => {
        this.loading = true;

        getExchangeTrendDataFromAPI({ from, to })
            .then((apiData) => {
                const data = formatExchangeTrendData(apiData);
                this.trend = data;
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.loading = false;
            });
    };
}
