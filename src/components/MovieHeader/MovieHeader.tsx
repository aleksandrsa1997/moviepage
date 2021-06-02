import React from 'react';
import Rating from '@material-ui/lab/Rating';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {
    Wrapper,
    useStyles,
    WrapperButton,
    WrapperContent,
    WrapperCardMedia,
    WrapperContentbutton,
} from './styles';
import Button from 'src/reactlibs/customButton/CustomButton';
import Link from 'next/link';
import { IMAGE_URL } from 'src/constants/api';

export type TProps = {
    movieInfo: any;
};


const MovieHeader = ({ movieInfo }: TProps) => {
    
    const testImageBackGround = 'Poster/Poster1.jpg';
    const classes = useStyles();

    return (
        <Wrapper className={classes.root} style={{
            backgroundImage: `url(${testImageBackGround})` 
          }}>
            <WrapperButton>
                <Link href='/'><Button textKey='BACK'/></Link>
            </WrapperButton>
            <WrapperCardMedia>
                <CardMedia
                    className={classes.media}
                    component="img"
                    alt='Movie Poster'
                    image={`${IMAGE_URL}${movieInfo.backdrop_path}`}
                />
            </WrapperCardMedia>
            <WrapperContent>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant='h5'>
                        {movieInfo.title}
                    </Typography>
                    <Rating size={'medium'} defaultValue={movieInfo.vote_average} max={10} precision={0.5} readOnly/>
                    <Typography gutterBottom>
                        {'Popularity: ' + `${movieInfo.popularity}`}
                    </Typography>
                    <Typography gutterBottom>
                        {'Overview: ' + `${movieInfo.overview}`}
                    </Typography>
                </CardContent>
                <WrapperContentbutton>
                    <Button textKey='CAST'/>
                </WrapperContentbutton>
            </WrapperContent>
        </Wrapper>
    );
}

export default MovieHeader;