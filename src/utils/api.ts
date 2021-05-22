import { ALPHA_VANTAGE_API_KEY, ALPHA_VANTAGE_URL } from '../constants';

/**
 * A super simple wrapper around API calls.
 * TODO: make a proper component from it that handles: call aborting, race conditions and so on
 */
const makeAPICall = (query: URLSearchParams) => {
    return fetch(`${ALPHA_VANTAGE_URL}?${query}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `Network response failed with status: ${response.status}`
                );
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(
                'There has been a problem with your fetch operation:',
                error
            );
        });
};

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
    const query = new URLSearchParams({
        function: 'CURRENCY_EXCHANGE_RATE',
        from_currency: from,
        to_currency: to,
        apikey: ALPHA_VANTAGE_API_KEY,
    });

    return makeAPICall(query);
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
    const query = new URLSearchParams({
        function: 'FX_DAILY',
        from_symbol: from,
        to_symbol: to,
        apikey: ALPHA_VANTAGE_API_KEY,
    });

    return makeAPICall(query);
};
