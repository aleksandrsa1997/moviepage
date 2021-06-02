import React from 'react';
import CustomButton from 'src/reactlibs/customButton/CustomButton';
import { useTranslation } from 'react-i18next'

export type TProps = {
    getNowPlayingMovies: () => void;    
};

const NowPlayButton: React.FC<TProps>= ({ getNowPlayingMovies }) => {

    const handleClick = () => {
        getNowPlayingMovies();
    }

    const { t } = useTranslation();

    return (
        <CustomButton onClick={handleClick} textKey={t('now_playing_movies')}/>
    )
}

export default NowPlayButton;
