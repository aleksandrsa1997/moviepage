import React from 'react';
import Card from '@material-ui/core/Card';
import Rating from '@material-ui/lab/Rating';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Tooltip from '@material-ui/core/Tooltip';
import { useStyles } from './styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

export type TProps = {
    id: number,
    alt?: string,
    title?: string,
    color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error',
    width?: number,
    image?: string,
    genre?: string,
    height?: number,
    onClick?:  (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'srOnly' | 'inherit',
    overview?: string,
    textColor?: string,
    vote_count?: number,
    popularity?: number,
    vote_average?: number,
    original_title?: string,
};

const testImage = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-mulan-1571175006.jpg';

const FilmCard = ({
       id = 1,
       alt = 'Movie Poster',
       title = 'Raya and the Last Dragon',
       image = testImage,
       variant = 'h6',
       vote_count = 1,
       popularity = 1.5,
       vote_average = 8.5,
       overview = '',
       original_title = '',
       onClick,
 }: TProps) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={onClick}>
                <Tooltip title={
                            <>
                                <Typography color="inherit">{`Original title: ${original_title}`}</Typography>
                                <em>{overview}</em> <br/> <b>{`Vote Average: ${vote_average}`}</b> <br/> <b>{`Vote Count: ${vote_count}`}</b>.{' '}
                            </>
                         }
                         aria-label='add'>
                    <Fab color="primary" className={classes.fab}>
                        <AddIcon />
                    </Fab>
                </Tooltip>
                <CardMedia
                    className={classes.media}
                    component="img"
                    alt={alt}
                    image={image}
                    id={String(id)}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5'>
                        {title}
                    </Typography>
                    <Rating size={'medium'} defaultValue={vote_average} max={10} precision={0.5} readOnly/>
                    <Typography gutterBottom variant={variant}>
                        {'Vote count: ' + `${vote_count}`}
                    </Typography>
                    <Typography gutterBottom variant={variant}>
                        {'Popularity: ' + `${popularity}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default FilmCard;