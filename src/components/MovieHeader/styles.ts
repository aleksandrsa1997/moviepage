import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '50%',
            padding: theme.spacing(1),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        },
        media: {
            height: '100%',
            width: '100%',
            objectFit : 'contain',
        },
        content: {
            height: '90%',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
    }),
);

export const WrapperButton = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const WrapperCardMedia = styled.div`
  width: 40%;
  height: 100%;
  object-fit: contain;
`;

export const WrapperContent = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
`;

export const WrapperContentbutton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;