import React from 'react';
import i18n from 'src/i18n';
import CustomDropDown from 'src/reactlibs/CustomDropDown';
import { TTempOption } from 'src/store/commonTypes';
import { TDiscoverPayload } from 'src/store/movie/types';

type TProps = {
   languages: Array<TTempOption>;
   currentLanguage: string;
   sendFilterInfo: (value: TDiscoverPayload) => void;
}

const LanguageDropDown: React.FC<TProps> = ({ languages, currentLanguage, sendFilterInfo })  => {
    const handleChangeLanguage = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
        const currentLanguage: string = (event.target as HTMLSelectElement ).value;
        sendFilterInfo({ filter: 'language', value: currentLanguage });
        i18n.changeLanguage(currentLanguage);
    }

    return (
        <>
            <CustomDropDown 
                value={currentLanguage}
                mapKey='language' 
                options={languages} 
                onChange={handleChangeLanguage} 
            />
        </>
    )
}

export default LanguageDropDown;