import * as React from 'react';
import { observer } from 'mobx-react-lite';
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
} from 'recharts';
import { TrendStore } from '../../stores';

interface Props {
    dataStore: TrendStore;
}

export const TrendChart: React.FC<Props> = observer((props) => {
    const {
        dataStore: { trend },
    } = props;
    return trend.length ? (
        <>
            <h2>Trends</h2>
            <LineChart
                width={900}
                height={350}
                data={trend}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                style={{ margin: 'auto' }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={['dataMin', 'dataMax']} />
                <Tooltip />
                <Line type="monotone" dataKey="high" stroke="#8884d8" />
                <Line type="monotone" dataKey="low" stroke="#82ca9d" />
            </LineChart>
        </>
    ) : null;
});
