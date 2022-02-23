import { Div, Heading, Img, Section } from "../../styles/base.style";
import specAutoUpdate from '../../images/specials/auto-updates.png'
import specBackgrounds from '../../images/specials/backgrounds.png'
import specMegaMenu from '../../images/specials/built-in-mega-menu.png'
import specDemoImport from '../../images/specials/click-demo-import.png'
import specColors from '../../images/specials/colors.png'
import specCustomizable from '../../images/specials/fully-customizable.png'
import specAdmin from '../../images/specials/powerful-admin-pannel.png'
import specRetina from '../../images/specials/responsive-retina-ready.png'
import specShortcode from '../../images/specials/shortcode-generator.png'
import specSidebar from '../../images/specials/sidebar-widgets.png'
import specSpeed from '../../images/specials/speed.png'
import specTypo from '../../images/specials/typo.png'
import { memo } from "react";

const specialItems = [
    {
        title: 'Powerful admin pannel',
        icon: specAdmin
    },
    {
        title: '1 Click Demo Import',
        icon: specDemoImport
    },
    {
        title: 'Fully Customizable',
        icon: specCustomizable
    },
    {
        title: 'Shortcode generator',
        icon: specShortcode
    },
    {
        title: 'Built-in-Mega Menu',
        icon: specMegaMenu
    },
    {
        title: 'Responsive Retina Ready',
        icon: specRetina
    },
    {
        title: 'Sidebar Widgets',
        icon: specSidebar
    },
    {
        title: 'Auto Updates',
        icon: specAutoUpdate
    },
    {
        title: 'Good Speed & Performance',
        icon: specSpeed
    },
    {
        title: 'Advanced Typography',
        icon: specTypo
    },
    {
        title: 'Unlimited Colors',
        icon: specColors
    },
    {
        title: 'Custom Backgrounds',
        icon: specBackgrounds
    },
]

function SectionSpecial() {
    return (
        <Section id="special-ss" p="120px 0 115px" bg="#E8F8FE">
            <Div className="container">
                <Div className="row">
                    <Div className="col-md-12 text-center">
                        <Heading className="text-uppercase" fontSize="46px" texAlign="center" mb="15px">What's Special in Alone</Heading>
                        <Div mb="42px" texAlign="center">Strongest Easy to custom and multiple layout for your choice</Div>
                    </Div>
                </Div>
                <Div className="row" ml="-10px" mr="-10px">
                    {
                        specialItems.map((e, i) => {
                            let v = (i + 1) % 4;
                            let vT = Math.ceil(v);
                            let idx = (v !== 0 ? vT : 4)

                            return (
                                <Div data-anm={idx} key={'spec-' + i} className="col-md-3" mb="20px" pl="10px" pr="10px">
                                    <Div boxShadow="0px 4px 30px rgba(0, 0, 0, 0.1)" cursor="pointer" height="100%" borderRadius="10px" textAlign="center" bg="white" p="44px 60px">
                                        <Img height="64px" width="auto" mb="18px" src={e.icon} alt={e.title} />
                                        <Heading className="text-uppercase" fontSize="18px">{e.title}</Heading>
                                    </Div>
                                </Div>
                            )
                        })
                    }
                </Div>
            </Div>
        </Section>
    );
}

export default memo(SectionSpecial);
