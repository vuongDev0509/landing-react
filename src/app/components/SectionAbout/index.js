import { Div, Heading, Img, Section, Text } from "../../styles/base.style";
import bgElementor from "../../images/bg-elementor.png";
import elementor from "../../images/elementor.png";
import { ButtonPurchase } from "../../pages/Home/home.style";
import { memo } from "react";
//about_description: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply free text dolore magna aliqua lonm andhn."
//about_heading: "New 30+ Elementor widgets to design awesome & responsive property detail pages"
//about_over: "Over 1,400 reviews with average 5-Star"
function SectionAbout({text_editor, general}) {
    let {about_ss} = text_editor
    let {about_description, about_heading, about_over} = about_ss
    let {purchase_link, purchase_text, get_elementor_link, get_elementor_text} = general

    return (
        <Section id="about-ss" p="120px 0 105px" bg="#E8F8FE">
            <Div className="container">
                <Div className="row flex-md-row-reverse">
                    <Div className="col-md-6 text-center" mb={['30px', '30px', 0]}>
                        <Div backgroundImage={`url(${bgElementor})`}
                             position="absolute"
                             width="110%"
                             left="-5%"
                             height="100%"
                             backgroundSize="contain"
                             backgroundRepeat="no-repeat"
                             backgroundPosition="center calc(100% - 50px)"
                             zIndex="1"
                        />
                        <Img position="relative" zIndex="2" src={elementor} alt="elementor" />
                    </Div>
                    <Div className="col-md-6">
                        <Text fontSize="18px" fontWeight="500">{about_over}</Text>
                        <Heading fontSize="36px" mb="24px">{about_heading}</Heading>
                        <Text>{about_description}</Text>
                        <ButtonPurchase mt="42px" target="_blank" href={get_elementor_link}>{get_elementor_text}</ButtonPurchase>
                    </Div>
                </Div>
            </Div>
        </Section>
    )
}

export default memo(SectionAbout);
