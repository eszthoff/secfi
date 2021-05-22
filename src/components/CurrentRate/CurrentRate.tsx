import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { UIStore, ExchangeRateStore } from '../../stores';

interface Props {
    uiStore: UIStore;
    dataStore: ExchangeRateStore;
}

export const CurrentRate: React.FC<Props> = observer((props) => {
    const {
        uiStore: { from, to, amount },
        dataStore: { rate },
    } = props;

    if (!from || !to || !rate) {
        return null;
    }

    return (
        <>
            <h2>Current rate</h2>
            <p>{`${amount} ${from} = ${amount * rate} ${to}`}</p>
        </>
    );
});
