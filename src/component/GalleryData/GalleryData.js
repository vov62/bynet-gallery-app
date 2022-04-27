import React from 'react';
import './GalleryData.css';
import Slider from "react-slick";
import LeftArrow from '../../assets/left-arrow.svg';
import RightArrow from '../../assets/right-arrow.svg';


const GalleryData = ({ data, query }) => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
    );

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };
    return (
        <div className='container' >
            <Slider {...settings} >
                {data.map((img, index) => {
                    return (
                        <>
                            <div className='text'>
                                {query ? <p>showing {query} collection</p> : null}
                            </div>
                            <div key={index} className='card'>
                                <img src={img.webformatURL} alt={img.tags} className='sliderImg' />
                            </div>
                        </>
                    )
                })}
            </Slider>

        </div>
    )
}

export default GalleryData