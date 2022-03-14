import { Div, Heading, Img, Section, Text } from "../../styles/base.style";
import CountUp from 'react-countup';
import { memo, useRef  } from "react";

import SwiperCore, { Pagination, A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import global Images
import imageBoy       from "../../images/image-boy.png";
import bgTrrusteds    from "../../images/bg-trrusteds.jpg";
import iconQuocteBlue from "../../images/icon-quocte-blue.svg";
import iconQuocte     from "../../images/icon-quocte.svg";

// Import global styles
import "../../../index.scss";

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss'; 
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/a11y/a11y.scss';


SwiperCore.use([Pagination, Autoplay, A11y]);


function SectionTrusteds({trusted, general}) {

    let {heading, list_trusted, testimonial} = trusted ;

    let bg = {
        backgroundImage: `url(${bgTrrusteds})`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: '8', 
        width: '100%',
    }

    const prevRef = useRef(null);
    const nextRef = useRef(null);
   
    let emlTrusted = list_trusted.map((item, index) =>{
        if(item == undefined) return  false;

        let result = <Div key={index}  className="col-md-6" >
            <Div> 
                <Heading as="h1" color="#4D4FD1" fontSize="54px" lineHeight="130%" fontWeight="800" m="0" p="0" pb="18px" borderBottom="1px solid #4D4FD1"> 
                    <CountUp start={0} end={item.number} redraw="true" /><span>+</span> 
                </Heading>

                <Heading as="h3" color="#000C36" fontSize="24px" lineHeight="150%" fontWeight="800" m="0" mt="18px"> 
                    {item.heading}
                </Heading>

                <Text color="#666D86" fontSize="16px" lineHeight="150%" fontWeight="800" m="0" mt="8px"> {item.description} </Text>
            </Div>
        </Div>

        return result;

    })

    let elmSwiperSlide = testimonial.map((item, index) =>{

        if(item == undefined) return  false;
        
        let avatar = {
            backgroundImage: `url(${item.avatar})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }

        let result = <SwiperSlide key ={index} >
            <Div backgroundColor="#fff" p="30px 30px 90px 0"> 
                <Div style={avatar} width="80px" height="80px" border="4px solid #FFFFFF" borderRadius="50%"
                    position="absolute"  left="30px" top="-40px"
                > 
                </Div>
                <Div pl="20px" display={'flex'} alignItems='center'> 
                    <Div>
                        <Img src={iconQuocteBlue} alt="icon" minWidth="39px"/>
                    </Div>
                    <Div pl="50px">
                        <Heading color="#000C36" fontSize="24px" lineHeight="150%" fontWeight="400" m="0"> {item.name} </Heading>
                        <Text color="#666D86" fontSize="16px" lineHeight="150%" fontWeight="400" m="0" mt="16px"> {item.description} </Text>
                    </Div>
                </Div>
                
                <Div position="absolute" right="30px" bottom="30px">  <Img src={iconQuocte} alt="icon" minWidth="78px"/> </Div>
            </Div>
        </SwiperSlide>

        return result;
    });


    return (
        <Section id="trusted-ss" p="0px 0 110px" style={bg}>
            <Div className="container-full"> 
                <Div className="row">
                    <Div className="col-md-6" > 
                        <Img src={imageBoy} alt="image" />
                        <Heading as="h2" color="#002299" fontSize="30px" lineHeight="140%" fontWeight="800" m="0"> {heading} </Heading>
                    </Div>

                    <Div className="col-md-6"> 
                        <Div className="row" mb="50px"> {emlTrusted} </Div>

                        <Div backgroundColor="#fff" display={'flex'}> 
                            <Swiper modules={[Navigation, Pagination, A11y]} 
                                    autoHeight={false} 
                                    pagination={{ type: "fraction",}} 
                                    navigation
                                    loop={true} 
                                    slidesPerView={1} 
                                    spaceBetween={0}
                                    scrollbar={{ draggable: true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                    className="be_carousel_testimonial" 
                            >
                                {elmSwiperSlide}
                            </Swiper>
                            
                        </Div>
                        
                    </Div>
                </Div>    
            </Div>
        </Section>
    )
}

export default  memo(SectionTrusteds);
