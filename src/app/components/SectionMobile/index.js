import { Div, Heading, Img, Section } from "../../styles/base.style";
import bgMobileFriendly from "../../images/bg-mobile-ss.jpeg";
import mobileFriendly from "../../images/mobile-alone.png";
import { memo } from "react";

//mobile_description: "Powerful and flexible wordpress theme that comes with 30 unique and stunning demos, suitable for all your idea !"
//mobile_heading: "Fully responsive & mobile-friendly"
function SectionMobile({text_editor}) {
    let {mobile_ss} = text_editor
    let {mobile_heading, mobile_description} = mobile_ss

    return (
        <Section id="mobile-ss" p="120px 0 100px" position="relative">
            <Div position="absolute" top="0" left="0" width="100%"
                 height="100%" zIndex="1"
                 backgroundImage={`url(${bgMobileFriendly})`}
                 backgroundSize={'cover'}
                 backgroundPosition={'center'}
            />
            <Div zIndex="2" position="relative" className="container">
                <Div className="row">
                    <Div className="col-md-12 text-center">
                        <Heading fontSize="46px" mb="15px" color="white">{mobile_heading}</Heading>
                        <Div className="col-md-6" m="auto" mb="30px" color="white">{mobile_description}</Div>
                        <Img src={mobileFriendly} alt="mobile friendly" />
                    </Div>
                </Div>
            </Div>
        </Section>
    )
}

export default memo(SectionMobile);
