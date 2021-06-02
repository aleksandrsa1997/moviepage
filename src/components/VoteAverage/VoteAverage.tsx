import * as React from 'react';
import CustomSlider from 'src/reactlibs/CustomSlider';
import { TDiscoverPayload } from 'src/store/movie/types';

export type TProps = {
    sendFilterInfo: (value: TDiscoverPayload) => void;
};

const VoteAverage: React.FC<TProps> = ({ sendFilterInfo }) => {
        const [sliderValue, setValue] = React.useState([0, 10]);
    // @ts-ignore
        const handleChangeVote = (event: React.ChangeEvent<{}>, newValue: number[]) => {
                console.log(newValue);
            // @ts-ignore
                const currentVote: number[] = newValue;
                sendFilterInfo({filter: 'vote_average.lte', value: newValue[1]})
                sendFilterInfo({filter: 'vote_average.gte', value: newValue[0]})
                setValue(newValue);
        }

    return <CustomSlider value={sliderValue} onChange={handleChangeVote}/>
};

export default VoteAverage;