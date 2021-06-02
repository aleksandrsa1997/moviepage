import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// @ts-ignore
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            fontSize: '80%',
            height: '40px',
            borderRadius: '10px',
        },
    }),
);