import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { UIStore, ExchangeRateStore } from '../../stores';

interface Props {
    uiStore: UIStore;
    dataStore: ExchangeRateStore;
}

export const Converter: React.FC<Props> = observer((props) => <div />);
