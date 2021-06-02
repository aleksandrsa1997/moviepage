import React from 'react';
import { CircularProgress } from '@material-ui/core';

export type TProps = {
    size?: number;
    value?: number;
    color?: 'inherit' | 'primary' | 'secondary';
    variant?: 'determinate' | 'indeterminate' | 'static';
    thickness?: number;
    disableShrink?: boolean;
};

const CustomSpinner: React.FC<TProps> = ({
    size = 40,
    color = 'primary',
    variant = 'determinate',
    thickness = 3.6
}) => (
    <CircularProgress
        size={size}
        color={color}
        variant={variant}
        thickness={thickness}
    />
);

export default CustomSpinner;