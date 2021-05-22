import { makeAutoObservable } from 'mobx';
import { getExchangeRateFromAPI, formatExchangeData } from '../utils';

/**
 * Store holding current exchange rate
 */
export class ExchangeRateStore {
    rate = 1;

    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    getExchangeRate = ({ from, to }: { from: string; to: string }): void => {
        this.loading = true;

        getExchangeRateFromAPI({ from, to })
            .then((apiData) => {
                const data = formatExchangeData(apiData);
                this.rate = data;
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.loading = false;
            });
    };
}
