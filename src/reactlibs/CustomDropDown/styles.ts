import {createStyles, makeStyles, Theme, withStyles} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import colorMatrix from 'src/constants/colorMatrix';
import fonts from 'src/themes/fonts';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
    }),
);

export const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: colorMatrix.colorBackground,
            border: `1px solid ${colorMatrix.shadow}`,
            fontSize: 16,
            width: 200,
            padding: '10px 26px 10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            fontFamily: fonts.familyFont.join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: colorMatrix.colorBorder,
                boxShadow: colorMatrix.shadowBox,
            },
        },
    }),
)(InputBase);