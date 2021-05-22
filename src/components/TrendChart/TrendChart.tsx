import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { TrendStore } from '../../stores';

interface Props {
    dataStore: TrendStore;
}

export const TrendChart: React.FC<Props> = observer((props) => <div />);
