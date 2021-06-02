import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Wrapper,
    WrapperData,
    WrapperVote,
    WrapperFilter,
    WrapperDivVote,
    WrapperLanguage,
    VoteTranslation,
    WrapperDivByName,
    WrapperDivSortBy,
    WrapperDataPicker,
    WrapperSortByName,
    WrapperDivLanguage,
} from './style';
import SortBy from 'src/components/SortBy';
import DatePicker from 'src/reactlibs/DatePicker';
import VoteAverage from 'src/components/VoteAverage';
import FilterByName from 'src/components/FilterByName';
import LanguageDropDown from 'src/components/LanguageDropDown';

const Panel = () => {
    const { t } = useTranslation();
    return (
        <Wrapper data-at='wrapper'>
            <WrapperVote data-at='wrapper_wrapper-vote'>
                <VoteTranslation>
                    {t('Vote Average')}
                </VoteTranslation>
                <WrapperDivVote>
                    <VoteAverage data-at='wrapper-vote_vote-average'/>
                </WrapperDivVote>
            </WrapperVote>
            <WrapperSortByName data-at='wrapper_wrapper-sort-by-name'>
                <WrapperDivByName>
                    <FilterByName data-at='wrapper-sort-by-name_filter-by-name' />
                </WrapperDivByName>
            </WrapperSortByName>
            <WrapperLanguage data-at='wrapper_wrapper-language'>
                <WrapperDivLanguage>
                    <LanguageDropDown data-at='wrapper-language_language-drop-down'/>
                </WrapperDivLanguage>
            </WrapperLanguage>
            <WrapperFilter data-at='wrapper_wrapper-filter'>
                <WrapperDivSortBy>
                    <SortBy data-at='wrapper-filter_sort-by'/>
                </WrapperDivSortBy>
            </WrapperFilter>
            <WrapperDataPicker data-at='wrapper_wrapper-data-picker'>
                <WrapperData>
                    <DatePicker data-at='wrapper-data-picker_date-picker'/>
                </WrapperData>
            </WrapperDataPicker>
        </Wrapper>
    )
}

export default Panel;