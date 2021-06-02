import styled, { createGlobalStyle } from 'styled-components';
import { StyledComponentBase } from 'styled-components/ts3.6';

interface ITypes extends StyledComponentBase<any, any> {
    Wrapper?: any,
    FilmsInfo?: any,
    CarouselWrapper?: any,
    FilmsCardsWrapper?: any,
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-image: url('https://www.stateofmind.it/wp-content/uploads/2014/12/Cinema_Fotolia_59441801_Subscription_Monthly_M_-_KRAKEN.jpg');
    background-size: cover;
  }
`

export const Wrapper: ITypes = styled.div`
  width: 95%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin:auto;

`;

export const WrapperPanel: ITypes = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  opacity: 0.6;
  border-radius: 10px;
`;

export const PanelDiv: ITypes = styled.div`
  width: 100%;
  height: 100%;
`;

export const CarouselDiv: ITypes = styled.div`
  width: 90%;
  height: 80%;
`;

export const WrapperCarousel: ITypes = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperButton: ITypes = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;