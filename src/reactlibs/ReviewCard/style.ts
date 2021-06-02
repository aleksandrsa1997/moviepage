import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        minWidth: 275,
        cursor: 'pointer',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
        text: '12px'
    },
    avatar: {
        backgroundColor: 'blue',
        width: '90px',
        height: '90px',
    },
    wrapper: {
        display: 'flex',
        width: '100%'
    },
    author: {
        padding: theme.spacing(1),
        width: '30%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        height: '25%',
        width: '100%',
    },
    author_information: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    }
}),
);

export  default  useStyles;