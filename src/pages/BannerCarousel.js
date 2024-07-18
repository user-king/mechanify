import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../assets/styles/Banner.css';
// import Banner from '../components/Banner';
// import Banner2 from '../components/Banner2';
// import Banner3 from '../components/Banner3';
// import { motion } from 'framer-motion';
import bannerGif from '../assets/images/gif/banner.gif';

const BannerCarousel = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     rtl: true,
    //     // vertical: true,
    //     appendDots: dots => (
    //         <div style={{ position: 'absolute', bottom: '20px', }}>
    //             <ul style={{ margin: '0px' }}> {dots} </ul>
    //         </div>
    //     ),
    // };

    // const slides = [
    //     { component: <Banner /> },
    //     { component: <Banner2 /> },
    //     { component: <Banner3 /> }
    // ];

    return (
        // <Slider {...settings}>
        //     {slides.map((slide, index) => (
        //         <div key={index}>
        //             {index === 1 ? (
        //                 <motion.div
        //                     initial={{ y: '100vh' }}
        //                     animate={{ y: 0 }}
        //                     exit={{ y: '-100vh' }}
        //                     transition={{ type: 'spring', stiffness: 50, duration: 2 }}
        //                 >
        //                     {slide.component}
        //                 </motion.div>
        //             ) : (
        //                 <motion.div
        //                     initial={{ x: '100vw' }}
        //                     animate={{ x: 0 }}
        //                     exit={{ x: '-100vw' }}
        //                     transition={{ type: 'spring', stiffness: 50, duration: 2 }}
        //                 >
        //                     {slide.component}
        //                 </motion.div>

        //             )}
        //         </div>
        //     ))}
        // </Slider>
        <div>
            <img src={bannerGif} alt="banner" className="banner-gif" />
        </div>
    );
};

export default BannerCarousel;
