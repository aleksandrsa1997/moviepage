import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Tooltip, withStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '85%',
            height: '90%',
            margin: '15px',
            padding: theme.spacing(1),
        },
        media: {
            height: 320,
            objectFit : 'contain',
            margin: '7px',
        },
        fab: {
            height: '30px',
            width: '30px',
            margin: theme.spacing(0),
        },
    }),
);

export const HtmlTooltip = withStyles((theme: Theme) => ({
    tooltip: {
        backgroundColor: "#f5f5f9",
        color: "rgba(0, 0, 0, 0.87)",
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: "1px solid #dadde9",
    }
}))(Tooltip);
