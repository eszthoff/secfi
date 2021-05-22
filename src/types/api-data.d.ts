type CurrentExchangeFromAPI = {
    'Realtime Currency Exchange Rate': {
        '1. From_Currency Code': string;
        '2. From_Currency Name': string;
        '3. To_Currency Code': string;
        '4. To_Currency Name': string;
        '5. Exchange Rate': string;
        '6. Last Refreshed': string;
        '7. Time Zone': string;
        '8. Bid Price': string;
        '9. Ask Price': string;
    };
};

type DailyExchangeFromAPI = {
    'Meta Data': {
        '1. Information': string;
        '2. From Symbol': string;
        '3. To Symbol': string;
        '4. Output Size': string;
        '5. Last Refreshed': string;
        '6. Time Zone': string;
    };
    'Time Series FX (Daily)': {
        [date: string]: {
            '1. open': string;
            '2. high': string;
            '3. low': string;
            '4. close': string;
        };
    };
};
