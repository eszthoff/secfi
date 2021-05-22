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
    data: DailyExchangeFromAPI
): ExchangeTrendData => [
    {
        date: 'now',
        open: 1,
        close: 2,
        low: 1,
        high: 2,
    },
];
