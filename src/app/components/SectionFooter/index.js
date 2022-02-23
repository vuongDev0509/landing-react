import { Div, Heading, Img, Section, Text } from "../../styles/base.style";
import bgLast from "../../images/bg-ss-last.jpeg";
import elite from "../../images/elite.png";
import { ButtonPurchase, ButtonPurchaseTransparent } from "../../pages/Home/home.style";
import { memo } from "react";

function SectionFooter({text_editor, general}) {
    let {purchase_link, portfolio_link} = general
    return (
        <Section id="last-ss" p="130px 0" position="relative">
            <Div position="absolute" top="0" left="0" width="100%"
                 height="100%" zIndex="1"
                 backgroundImage={`url(${bgLast})`}
                 backgroundSize={'cover'}
                 backgroundPosition={'center'}
            />
            <Div zIndex="2" position="relative" className="container">
                <Div className="row">
                    <Div className="col-md-12 text-center">
                        <Div m="auto" mb="14px" fontSize="18px" color="white">Proud to be a member of The Envato Elite Club</Div>
                        <Heading fontSize="36px" mb="22px" color="white">A Theme By Envato Elite Author!</Heading>
                        <Img src={elite} alt="elite" mb="32px" />
                        <Div mb="45px" fontSize="24px" color="white">Trusted By <Text fontSize="50px" color="accentColor" borderBottom="2px solid" as="span">12,000+</Text> Customers</Div>
                        <Div display="inline-flex"
                             justifyContent="center"
                             flexDirection={['column', 'column', 'row']}>
                            <ButtonPurchase href={portfolio_link} target="_blank" m={['0 0 15px', '0 0 15px', '0 15px 0 0']}>View Portfolio</ButtonPurchase>
                            <ButtonPurchaseTransparent href={purchase_link} target="_blank">Purchase ALone</ButtonPurchaseTransparent>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Section>
    )
}

export default memo(SectionFooter);
