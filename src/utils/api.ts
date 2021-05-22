/**
 * Gets exchange rate between 2 currencies from the API
 * @param {string} args.from a 3 letter currency code for the base currency
 * @param {string} args.to a 3 letter currency code for the target currency
 * @returns {number}
 */
export const getExchangeRateFromAPI = ({
    from,
    to,
}: {
    from: string;
    to: string;
}): Promise<CurrentExchangeFromAPI> => {
    // Enrich query
    // call API
};

/**
 * Gets exchange rate data over time between 2 currencies from API
 * @param {string} args.from a 3 letter currency code for the base currency
 * @param {string} args.to a 3 letter currency code for the target currency
 * @returns {number}
 */
export const getExchangeTrendDataFromAPI = ({
    from,
    to,
}: {
    from: string;
    to: string;
}): Promise<DailyExchangeFromAPI> => {
    // Enrich query
    // call API
};
