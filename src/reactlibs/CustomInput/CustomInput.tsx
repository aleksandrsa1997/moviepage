import React from 'react';
import Input from '@material-ui/core/Input';
import { useStyles } from './style';
import { useTranslation } from 'react-i18next';

type TProp = {
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    value?: string;
}

const CustomInput = ({ placeholder = 'enter_text', onChange, value }: TProp) => {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Input
            value={value}
            onChange={onChange}
            className={classes.styleInput}
            placeholder={t(placeholder)}
        />
    );
}

export  default CustomInput;