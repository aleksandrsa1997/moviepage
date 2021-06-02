import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(1),
        },
        styleInput: {
            height: '100%',
            width: '100%',
            border: 'none'
        }
    }),
);