import { Div, Heading, Img, Link, Section } from "../../styles/base.style";
import { Flipper, Flipped } from "react-flip-toolkit";
import { memo, useEffect, useState } from "react";
import anime from "animejs";
import { FilterNavItem } from "./styles";

import New_Icon from '../../images/new-item.svg';

const FilterDemo = props => {
    const [classActive, setClassActive] = useState('all');
    const [homePagesTemp, setHomePagesTemp] = useState(props.demo_page);
    const [homePages, setHomePages] = useState(props.demo_page);

    const {cat_filter, isLoading, demo_page} = props;
    const category = cat_filter ? Object.entries(cat_filter) : [];

    useEffect(() => {
        setHomePages(demo_page)
        setHomePagesTemp(demo_page)
    }, [demo_page]);

    const filterHomePage = (e, filter) => {
        e.preventDefault();
        if (filter === classActive) return
        const has = Object.prototype.hasOwnProperty;

        let homePages = homePagesTemp.reduce((dataHomeNew, home, index, dataHome) => {
            let _has = has.call(home.category_filter, filter);

            if (_has) dataHomeNew[index] = home;

            return dataHomeNew;
        }, []);
        console.log(homePages)

        setClassActive(filter)
        setHomePages(homePages)
    }

    const onStart = (el, prevLocation, currentLocation) => {
        // console.log('on start');
    };

    const onComplete = (el, prevLocation, currentLocation) => {
        // console.log('on complete');
    };

    const onAppear = (el, index) => {
        // console.log('onAppear');
        anime({
            targets: el,
            opacity: [0, 1],
            scale: [0, 1],
            easing: "easeOutSine",
            delay: index * 40,
            duration: 400
        })
    };

    const shouldFlip = (prev, current) => {
        // console.log('should flip', prev, current);
    };

    const onExit = (el, index, removeElement) => {
        // console.log('onExit');
        anime({
            targets: el,
            opacity: 0,
            scale: 0.5,
            easing: "easeOutSine",
            duration: 400,
            delay: index * 40,
            complete: removeElement
        })
    };

    //console.log(homePages)

    const FilterNavigation = () =>
        <Div display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'} mb={35}>
            {category && category.map((cat, index) => {
                let filterClass = ['filter-nav'];
                if (cat[0]) {
                    filterClass.push(cat[0]);
                    if (cat[0] === classActive) {
                        filterClass.push('active');
                    }
                }
                if (cat[1]) {
                    return (
                        <FilterNavItem
                            onClick={e => filterHomePage(e, cat[0])}
                            href={'#'}
                            key={index}
                            className={filterClass.join(" ")}
                            data-filter={cat[0]}>
                            {cat[1]}
                        </FilterNavItem>
                    )
                }
                return false
            })}
        </Div>;

    const FilterItems = () =>
        <Div display={'grid'} gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']} gridGap={'20px'}>
            {
                homePages && homePages.map((home, index) => (
                    <Flipped
                        key={`home-${index}`}
                        flipId={`home-${index}`}
                        stagger="forward"
                        spring={'gentle'}

                        onStartImmediate={onStart}
                        onComplete={onComplete}
                        onAppear={onAppear}
                        onExit={onExit}
                        shouldInvert={shouldFlip}
                    >
                        <Div>
                            <Link position={'relative'} target="_blank" display="block" textAlign="center" href={home.link_demo_page ? home.link_demo_page : '#'}>
                                <Div borderRadius="10px" border="5px solid #fff" boxShadow="0px 4px 30px rgba(0, 0, 0, 0.25)">
                                    {(!home.new_label) ?
                                        <Img src={New_Icon} alt={'new'} position={'absolute'} top={0} left={-9} zIndex={9} /> : ''}
                                    <Img width="100%" src={home.image_featured} alt={home.name_demo_page} />
                                </Div>
                                <Heading className="text-uppercase" m="30px 0">{home.name_demo_page}</Heading>
                            </Link>
                        </Div>
                    </Flipped>
                ))
            }
        </Div>;

    return (
        <>
            {isLoading ?
                <Div>Loading...</Div> :
                <Div>
                    <Flipper
                        flipKey={`${classActive}`}
                        spring={'veryGentle'}
                        decisionData={props}
                    >
                        {FilterNavigation()}
                        {FilterItems()}
                    </Flipper>
                </Div>
            }
            </>
    );
};

//prebuild_demo_description: "Powerful and flexible wordpress theme that comes with 30 unique and stunning demos, suitable for all your idea !"
//prebuild_demo_heading: "39+ Prebuild Demo"
function SectionPrebuildDemo(props) {
    let {text_editor} = props
    let {prebuild_ss} = text_editor
    let {prebuild_demo_heading, prebuild_demo_description} = prebuild_ss
    return (
        <Section id="prebuild-demo-ss" p="110px 0 105px">
            <Div className="container">
                <Div className="row">
                    <Div className="offset-md-2 col-md-8 text-center">
                        <Heading className="text-uppercase" fontSize="46px" mb="15px">{prebuild_demo_heading}</Heading>
                        <Div mb="30px">{prebuild_demo_description}</Div>
                    </Div>
                </Div>
                <Div className="row">
                    <Div className="col-md-12">
                        <FilterDemo {...props} />
                    </Div>
                </Div>
            </Div>
        </Section>
    )
}

export default memo(SectionPrebuildDemo);
