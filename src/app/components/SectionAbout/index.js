import { Div, Heading, Img, Section, Text } from "../../styles/base.style";
import { ButtonPurchase, ButtonBlueGray } from "../../pages/Home/home.style";
// import bgElementor from "../../images/bg-elementor.png";
// import elementor from "../../images/elementor.png";
// import { ButtonPurchase } from "../../pages/Home/home.style";
import { memo } from "react";

// Import global Images
import bgAbout from "../../images/bg-about-v2.jpg";
import imageAbout from "../../images/image-ab-2-v2.png";

//about_description: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply free text dolore magna aliqua lonm andhn."
//about_heading: "New 30+ Elementor widgets to design awesome & responsive property detail pages"
//about_over: "Over 1,400 reviews with average 5-Star"
function SectionAbout({about_section, general}) {
    // let {about_ss} = text_editor
    // let {about_description, about_heading, about_over} = about_ss
    // let {purchase_link, purchase_text, get_elementor_link, get_elementor_text} = general

    let {heading, sub_heading, description} = about_section ;
    let {get_elementor_link, get_elementor_text} = general;
    //console.log(general);

    let bg = {
        backgroundImage: `url(${bgAbout})`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: '8', 
        width: '100%',
    }

    return (
        <Section id="about-ss" p="80px 0 30px 0" style={bg}>
            <Div className="container">
                <Div className="row" alignItems='center' alignContent='center'>
                    <Div className="col-md-6 text-left" mb={['30px', '30px', 0]}>
                        <Heading as="h1" color="#fff" fontSize="54px" lineHeight="140%" fontWeight="400" m="0" fontStyle="italic" > {heading} </Heading>
                        <Heading as="h3" color="#6FD3E2" fontSize="24px" lineHeight="150%" fontWeight="800" m="18px 0 0 0 "> {sub_heading} </Heading>
                        <Text color="#E0E2E7" fontSize="16px" lineHeight="150%" fontWeight="400" m="30px 0 0 0  " >{description}</Text>
                        <ButtonBlueGray mt="30px" target="_blank" href={get_elementor_link}>{get_elementor_text}</ButtonBlueGray>
                    </Div>

                    <Div className="col-md-6">
                        <Img src={imageAbout} alt="image"></Img>
                    </Div>
                </Div>
            </Div>
        </Section>
    )
}

export default memo(SectionAbout);
