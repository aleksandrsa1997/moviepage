import React from 'react';
import {
    Wrapper,
    PanelDiv,
    CarouselDiv,
    GlobalStyle,
    WrapperPanel,
    WrapperButton,
    WrapperCarousel,
} from './style';
import Panel from './panel/Panel';
import NowPlayButton from 'src/components/NowPlayButton';
import CustomCarousel from 'src/reactlibs/CustomCarousel';

const MainPage = () => (
    <Wrapper data-at='wrapper'>
        <GlobalStyle data-at='wrapper_global-style'/>
        <WrapperPanel data-at='wrapper_wrapper-panel'>
            <PanelDiv data-at='wrapper-panel_panel-div'>
                <Panel data-at='panel-div_panel'/>
            </PanelDiv>
        </WrapperPanel>
        <WrapperCarousel data-at='wrapper_wrapper-carousel'>
            <CarouselDiv data-at='wrapper-carousel_carousel-div'>
                <CustomCarousel data-at='carousel-div_custom-carousel'/>
            </CarouselDiv>
        </WrapperCarousel>
        <WrapperButton data-at='wrapper_wrapper-button'>
            <NowPlayButton/>
        </WrapperButton>
    </Wrapper>
);

export default MainPage;