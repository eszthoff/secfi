import { DATA_POINTS_TO_SHOW } from '../constants';

/**
 * Formats currency exchange data from API structure to app structure
 * @param {CurrentExchangeFromAPI} data received from API
 * @returns {number}
 */
export const formatExchangeData = (data: CurrentExchangeFromAPI): number => {
    return Number(data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
};

/**
 * Formats currency exchange trend data from API structure to app structure
 * @param {DailyExchangeFromAPI} data received from API
 * @returns {ExchangeTrendData}
 */
export const formatExchangeTrendData = (
    fullData: DailyExchangeFromAPI
): ExchangeTrendData => {
    const data = fullData['Time Series FX (Daily)'];
    const dates = Object.keys(data);

    // Only use the data we really need. This logic could be placed closer to the UI
    const currentDates = dates.slice(0, DATA_POINTS_TO_SHOW);

    // TODO: error handling of wrong data
    // TODO: add weekends dates (?)
    return currentDates.map((date) => ({
        date,
        open: Number(data[date]['1. open']),
        close: Number(data[date]['4. close']),
        high: Number(data[date]['2. high']),
        low: Number(data[date]['3. low']),
    }));
};
