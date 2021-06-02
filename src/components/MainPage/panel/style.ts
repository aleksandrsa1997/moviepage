import styled from 'styled-components';

interface ICTypes  {
    direction?: string
}

export const Wrapper = styled('div')<ICTypes>`
  width: 90%;
  height: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperVote = styled('div')<ICTypes>`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const WrapperDivVote = styled ('div')<ICTypes>`
  margin-top: auto;
`;

export const WrapperSortByName = styled('div')<ICTypes>`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

export const WrapperLanguage = styled('div')<ICTypes>`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const WrapperFilter = styled('div')<ICTypes>`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const WrapperDataPicker = styled('div')<ICTypes>`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VoteTranslation = styled('span')<ICTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  font-weight: bold;
`;

export const WrapperDivSortBy = styled('div')<ICTypes>`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperData = styled('div')<ICTypes>`
  margin-top: auto;
`;

export const WrapperDivByName = styled('div')<ICTypes>`
  display:flex;
  align-items: center;
  justify-content: center;
`;
export const WrapperDivLanguage = styled('div')<ICTypes>``;
