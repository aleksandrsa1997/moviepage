import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: '50%',
            display: 'flex',
            justifyContent: 'space-around',
        },
        textField: {
            width: '70%',
            marginTop: theme.spacing(2),
        },
        MuiTypography: {
            width: '10%',
        }
    }),
);