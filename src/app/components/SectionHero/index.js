import { Div, Heading, Img, Section, Text } from "../../styles/base.style";
import cup from "../../images/icon-arrow.svg";
import bgHeroLayout2 from "../../images/BG-Header-V2.jpg";
import { ButtonPurchase } from "../../pages/Home/home.style";
import { memo } from "react";
import CountUp from 'react-countup';

//hero_description: "Customers have designed their Nonprofit projects with Alone"
//highly_customizable: "Highly Customizable"
//multipurpose: "Multipurpose Non-profit WordPress Theme"
//non_profit_wordpress_theme: "Non-profit WordPress Theme"
//sales_over: "Sales Over"
//sell_number: "5700+"
function SectionHero({hero_section, general}) {

    let {purchase_link, purchase_text} = general
    let {
        hero_description, highly_customizable,
        multipurpose, non_profit_wordpress_theme,
        sales_over, sell_number
    } = hero_section

    let bg = {
        backgroundImage: `url(${bgHeroLayout2})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: '999'
    }
    return (
        
        <Section id="hero-ss" style={bg} p="0" pt="90px">
            <Div className="container" maxWidth="1158px"> 
                <Div className="hero-content row" minHeight={['900px',]}> 
                    <Div className="col-md-6">  
                        <Heading color="white" fontStyle="italic" m="0" as="h1" fontWeight="bold" lineHeight="70px" fontSize={['54px', '46px', '54px']}>
                            {highly_customizable} - <Heading as="span" fontWeight="400">{non_profit_wordpress_theme}</Heading>
                        </Heading>

                        <Div fontSize="140px" color="#30F3FF" m="0" mt="29px" letterSpacing="5px" fontWeight="800" lineHeight="100%">
                            <CountUp start={0} end={sell_number} /><span>+</span>
                        </Div>
                        
                        <Div className="hero_meta" display={'flex'} alignItems='center'm="0" mt="40px" > 
                            <Div className="hero_meta_icon" p="0" pr="18px"> 
                                <Img src={cup} alt="cup" maxWidth="72.5px"/>
                            </Div>
                            <Div className="__meta"> 
                                <Heading color="#fff" fontSize="24px" lineHeight="150%" fontWeight="800" m="0"> {sales_over} </Heading>
                                <Heading as="h5" color="#fff" fontSize="16px" lineHeight="150%" fontWeight="400" m="0" mt="4px" >{multipurpose}</Heading>
                            </Div>
                        </Div>

                        <ButtonPurchase mt="54px" target="_blank" href={purchase_link}>{purchase_text}</ButtonPurchase>

                    </Div>
                </Div>
            </Div>
        </Section>
    )
}

export default memo(SectionHero);
