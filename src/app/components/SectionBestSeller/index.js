import { Div, Heading, Img, Section, Text } from "../../styles/base.style";
import { memo } from "react";
import bgBestSeller from "../../images/bg-best-seller.png";
import logoAloneBlue from "../../images/logo-alone-blue.png";
import iconArrow from "../../images/icon-arrow-blue.svg";
import imageBestSeller from "../../images/image-best-seller.png";
import { border } from 'styled-system'

function SectionBestSeller({best_seller, general}) {

    let {
        heading_best_seller, sub_heading_best_seller,
        list_best_seller
    } = best_seller

    let bg = {
        backgroundImage: `url(${bgBestSeller})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: '9'
    }

    let elmBestSeller = list_best_seller.map((item, index) =>{
        if(item == undefined) return  false;

        let results = <Div key={index} className="col-md-4" pr="12px" pl="12px">
            <Div border="1px solid #968AFF" borderRadius="10px" display={'flex'} justifyContent='center' flexWrap='wrap' pt="18px" pb="18px">
                <Img src={item.image} alt="image" maxWidth="72.5px" />
                <Heading color="#000C36" as="h5" width="100%" textAlign='center' 
                        fontSize="16px" alignItems='center' lineHeight="150%" fontWeight="800" m="0" mt="10px"> 
                        {item.heading} 
                </Heading>
            </Div>
        </Div>

        return results;
    })


    return(
        <Section id="best-seller-ss" style={bg} m="0" mt="-19%"  mb="-18%" display={'inline-block'} width="100%">
            <Div className="container" maxWidth="1158px"> 
                <Div className="best-seller-content row" minHeight={['1021px', '766px', '1021px', '1022px', '1021px']}> 
                    <Div className="col-md-6" pt="24%">
                        <Img src={logoAloneBlue} alt="logo" maxWidth="279px"/>

                        <Div display={'flex'} alignItems='center' m="0" mt="24px"> 
                            <Div pr="18px"> <Img src={iconArrow} alt="arrow" maxWidth="72.5px" />  </Div>
                            <Div>  
                                <Heading color="#002299" as="h5" fontSize="16px" lineHeight="150%" fontWeight="400" m="0"> {sub_heading_best_seller} </Heading>
                                <Heading color="#002299"  fontSize="24px" lineHeight="150%" fontWeight="800" m="0" mt="4px"> {heading_best_seller} </Heading>
                            </Div>
                        </Div>
                    </Div>

                    <Div className="col-md-6" pt="8%">
                        <Div display={'flex'} justifyContent='center'> 
                            <Img src={imageBestSeller} alt="image" />
                        </Div>

                        <Div className="row" mt="40px" mr="-12px" ml="-12px"> {elmBestSeller} </Div>
                    </Div>
                </Div>
            </Div>
        </Section>  
    )
}

export default memo(SectionBestSeller);
