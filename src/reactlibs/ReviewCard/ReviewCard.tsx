import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import useStyles from './style';
import { IMAGE_URL } from 'src/constants/api';

type TProps = {
    getReview: any,
    review: any
}

const SimpleCard = ({ getReview, review }: TProps) => {
    const classes = useStyles();

    const truncate = (text: string) => {
        if(text.length < 500) {
            return text;
        } else {
            return text = text.substring(0,500)+'...';
        }
    }

    console.log(review)

    useEffect(() => {
        getReview(2);
    },[getReview]);

    return (
        <Card className={classes.root}>
            {
                review.map((item: any) =>
            <CardContent key={item.id}>
                <Box className={classes.wrapper}>
                    <Box className={classes.author}>
                        <Avatar aria-label="recipe" className={classes.avatar} src={`${IMAGE_URL}${item.author_details.avatar_path}`} />
                        <Box className={classes.author_information}>
                            <Typography variant="h5" component="h2">
                                {`A  review by ${item.author}`}
                            </Typography>
                            <Rating size={'small'} defaultValue={item.author_details.rating} max={10} precision={0.5} readOnly/>
                            <Typography className={classes.pos} color="textSecondary">
                                {`Write by ${item.author} on ${item.created_at}`}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Typography variant="body2" component="p" className={classes.content}>
                    {truncate(item.content)}
                </Typography>
            </CardContent>
                )}
        </Card>
    );
}

export default SimpleCard;