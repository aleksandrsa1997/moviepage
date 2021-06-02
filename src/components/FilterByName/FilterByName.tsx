import React, { FC } from 'react';
import CustomInput from 'src/reactlibs/CustomInput/CustomInput';

export type TProps = {
    searchMovieName: (value: string) => void;
};

const FilterByName: FC<TProps> = ({ searchMovieName }) => {
   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
       searchMovieName(event.target.value);
   }

    return <CustomInput onChange={handleChange} />
};

export default FilterByName;