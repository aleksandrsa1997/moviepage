import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import { TDiscoverPayload } from 'src/store/movie/types';

export type TProps = {
    firstDate: string,
    secondDate: string,
    sendFilterInfo: (value: TDiscoverPayload) => void;
};

const DatePicker: React.FC<TProps> = ({ firstDate, secondDate, sendFilterInfo })  => {
    const { t } = useTranslation();
    const classes = useStyles();

    const handleChangeFirstInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        {sendFilterInfo({ filter: 'release_date.gte', value: (event.target as HTMLButtonElement).value })};
    }

    const handleChangeSecondInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        sendFilterInfo({ filter: 'release_date.lte', value: (event.target as HTMLButtonElement).value });
    }

    return (
        <Box>
            <Typography gutterBottom variant='h6'>
                {/*{t('release-date')}*/}
            </Typography>
            <form className={classes.container} noValidate>
                <TextField
                    id='first'
                    type='date'
                    label={t('from')}
                    className={classes.textField}
                    defaultValue={firstDate}
                    onChange={handleChangeFirstInput}
                />
                <TextField
                    id='second'
                    type='date'
                    label={t('to')}
                    className={classes.textField}
                    defaultValue={secondDate}
                    onChange={handleChangeSecondInput}
                />
            </form>
        </Box>
    );
}

export default DatePicker;