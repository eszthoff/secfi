import { makeAutoObservable } from 'mobx';

/**
 * Store holding the state of the UI
 */
export class UIStore {
    from = '';

    to = '';

    amount = 1;

    constructor() {
        makeAutoObservable(this);
    }

    setFrom = (currencyCode?: string | null) => {
        this.from = currencyCode || '';
    };
    setTo = (currencyCode?: string | null) => {
        this.to = currencyCode || '';
    };
    setAmount = (amount?: number | string | null) => {
        if (!amount) {
            this.amount = 1;
            return;
        }

        if (typeof amount === 'string') {
            const converted = Number(amount);
            if (isNaN(converted)) {
                // TODO: proper error handling
                console.log(
                    `Invalid input was provided as amount to UIStore: ${amount}`
                );
                return;
            }
            this.amount = converted;
            return;
        }

        this.amount = amount;
    };
}
