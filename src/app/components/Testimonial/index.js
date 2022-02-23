import { Div, Heading, Img, Section, Text } from "../../styles/base.style";
import { memo } from "react";
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/a11y/a11y.scss';
SwiperCore.use([Pagination, Autoplay, A11y]);



function Testimonial(props) {
  
//   console.log(props.testimonial);

    return(
        <Div id="testimonial"> 
            <Swiper spaceBetween={30} slidesPerView={1} navigation={true} autoplay loop={true} pagination={{clickable: true}} >
                            
            </Swiper>
        </Div>
    )

}

export default  memo(Testimonial);