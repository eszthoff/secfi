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

    setFrom = (currencyCode: string) => {
        this.from = currencyCode;
    };
    setTo = (currencyCode: string) => {
        this.to = currencyCode;
    };
    setAmount = (amount: number) => {
        this.amount = amount;
    };
}
