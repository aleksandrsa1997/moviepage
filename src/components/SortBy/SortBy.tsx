import * as React from 'react';
import CustomDropDown from 'src/reactlibs/CustomDropDown';
import { TFilter } from 'src/store/commonTypes';
import { TDiscoverPayload } from 'src/store/movie/types';
import { arrSort, discoverKeys } from 'src/constants/arrSort';

export type TProps = {
    sendFilterInfo: (value: TDiscoverPayload) => void;
};

const SortBy: React.FC<TProps> = ({ sendFilterInfo }) => {
    const [sortBy, setSortBy] = React.useState('popularity');
    const handleChangeSort = (event: React.ChangeEvent<{name?: string | undefined; value: unknown; }>) => {
        const currentSort: keyof TFilter | string = (event.target as HTMLSelectElement ).value;
        // @ts-ignore
        sendFilterInfo({ filter: 'sort_by', value: discoverKeys[currentSort] });
        setSortBy(currentSort);
    }

    return <CustomDropDown
        value={sortBy}
        mapKey='title'
        options={arrSort}
        onChange={handleChangeSort}
    />
};

export default SortBy;