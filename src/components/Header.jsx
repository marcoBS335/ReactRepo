import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import logo from '../logo.svg';
import image1 from '../images/carousel/1.jpg';

// import '../../public/images/carousel'

export default function Header() {

    // const getConfigurableProps = () => ({
    //     showArrows: boolean('showArrows', true, tooglesGroupId),
    //     showStatus: boolean('showStatus', true, tooglesGroupId),
    //     showIndicators: boolean('showIndicators', true, tooglesGroupId),
    //     infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
    //     showThumbs: boolean('showThumbs', true, tooglesGroupId),
    //     useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
    //     autoPlay: boolean('autoPlay', true, tooglesGroupId),
    //     stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
    //     swipeable: boolean('swipeable', true, tooglesGroupId),
    //     dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
    //     emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
    //     autoFocus: boolean('autoFocus', false, tooglesGroupId),
    //     thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
    //     selectedItem: number('selectedItem', 0, {}, valuesGroupId),
    //     interval: number('interval', 2000, {}, valuesGroupId),
    //     transitionTime: number('transitionTime', 500, {}, valuesGroupId),
    //     swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
    // });

    const createCarouselItemImage = (index, options = {}) => (
        <div className="carousel-image-wrap" key={index}>
            <img src={`../images/carousel/${index}.jpg`} className="carousel-image" alt=""/>
        </div>
    );
    
    const baseChildren = <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>;

    return(
        <header className="App-header">
            <Carousel
                showThumbs={false}
                dynamicHeight={false}
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
            >
                {baseChildren.props.children}
                {/* <div>
                    <img src="../images/carousel/1.jpg" alt="" />
                </div>
                <div>
                    <img src="../images/carousel/2.jpg" alt=""/>
                </div>
                <div>
                    <img src="../images/carousel/3.jpg" alt=""/>
                </div> */}
            </Carousel>

            {/* <div>
                <img src={image1} alt=""/>
                <p className="legend">Legend 1</p>
            </div>             */}

            {/* <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a> */}
        </header>
    );
}