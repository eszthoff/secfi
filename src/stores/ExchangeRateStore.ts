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

    setRate = (rate: number) => {
        this.rate = rate;
    };

    setLoadingState = (state: boolean) => {
        this.loading = state;
    };

    getExchangeRate = ({ from, to }: { from: string; to: string }): void => {
        if (!from || !to) {
            console.log(
                'Tried to load exchange data with missing currency codes'
            );
            return;
        }

        this.setLoadingState(true);

        getExchangeRateFromAPI({ from, to })
            .then((apiData) => {
                const data = formatExchangeData(apiData);
                this.setRate(data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.setLoadingState(false);
            });
    };
}
