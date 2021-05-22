/**
 * Formats currency exchange data from API structure to app structure
 * @param {CurrentExchangeFromAPI} data received from API
 * @returns {number}
 */
export const formatExchangeData = (data: CurrentExchangeFromAPI): number => {
    return 1;
};

/**
 * Formats currency exchange trend data from API structure to app structure
 * @param {DailyExchangeFromAPI} data received from API
 * @returns {ExchangeTrendData}
 */
export const formatExchangeTrendData = (
    data: DailyExchangeFromAPI
): ExchangeTrendData => {};
