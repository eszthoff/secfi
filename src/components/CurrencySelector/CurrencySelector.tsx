import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
    createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { CURRENCIES, CURRENCY_CODES } from '../../constants';
import styles from './CurrencySelector.module.css';

interface Props {
    /** the currently selected currency */
    value: string | null;
    /** callback when new selection is made */
    onChange: (value: string | null) => void;
    /** a label for the input field */
    label: string;
}

const currencyToString = (currencyCode: string) =>
    currencyCode ? `${currencyCode} | ${CURRENCIES[currencyCode]}` : '';

export const CurrencySelector: React.FC<Props> = (props) => {
    const { value, onChange, label } = props;

    const filterOptions = createFilterOptions({
        stringify: currencyToString,
    });

    return (
        <div className={styles.field}>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    onChange(newValue);
                }}
                options={[...CURRENCY_CODES]}
                getOptionLabel={currencyToString}
                renderInput={(params) => (
                    <TextField {...params} label={label} variant="outlined" />
                )}
                filterOptions={filterOptions}
            />
        </div>
    );
};
