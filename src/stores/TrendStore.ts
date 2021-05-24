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

    setTrendData = (data: ExchangeTrendData) => {
        this.trend = data;
    };

    setLoadingState = (state: boolean) => {
        this.loading = state;
    };

    getTrendData = ({ from, to }: { from: string; to: string }): void => {
        if (!from || !to) {
            console.log('Tried to load trend data with missing currency codes');
            return;
        }

        this.setLoadingState(true);

        getExchangeTrendDataFromAPI({ from, to })
            .then((apiData) => {
                const data = formatExchangeTrendData(apiData);
                this.setTrendData(data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.setLoadingState(false);
            });
    };
}
