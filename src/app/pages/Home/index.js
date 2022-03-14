import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./home.style";
import { Div, GlobalStyle } from "../../styles/base.style";

// import SectionSpecial from "../../components/SectionSpecial";
// import SectionPrebuildDemo from "../../components/SectionPrebuildDemo";
import SectionHero from "../../components/SectionHero";
import SectionBestSeller from "../../components/SectionBestSeller";
import SectionTrusteds from "../../components/SectionTrusteds";
import SectionAbout from "../../components/SectionAbout";
// import SectionMobile from "../../components/SectionMobile";
// import SectionSpeed from "../../components/SectionSpeed";
// import SectionFooter from "../../components/SectionFooter";

import API from "../../services/api";
import JSON_DEMO from "./data";

const breakpoints = ['576px', '768px', '992px', '1200px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const LandingAPI = new API('alone-v2/');

const Home = () => {
    const [data, setData] = useState({isLoading: true, error: false});

    useEffect(() => {
        let mounted = true;
        const ele = document.getElementById('bt-loader');
        const fetchData = async () => {
            try {
                const rs = await LandingAPI.getData();
                if (mounted) {
                    setData({isLoading: false, ...rs})
                }
                if (ele) {
                    ele.classList.add('available');
                }
            } catch (e) {
                console.log(e)
                setData({isLoading: false, error: true, ...JSON_DEMO})
                if (ele) {
                    ele.classList.add('available');
                }
            }
        };

        fetchData()

        return () => mounted = false;
    }, []);
    //console.log(data);
    // // console.log("hihi")
    return (
        <ThemeProvider theme={{
            fontFamily: "'Ubuntu', sans-serif",
            breakpoints: breakpoints,
            colors: {
                accentColor: '#ffac02',
                textColor: '#4D6995',
                headingColor: '#002866',
            },
        }}>
            <GlobalStyle />
            {data.isLoading ? <Div>Loading...</Div> :
                <Wrapper>
                    <SectionHero {...data} />
                    <SectionBestSeller {...data} />
                    <SectionTrusteds {...data} />
                    <SectionAbout {...data} />
                </Wrapper>
            }
        </ThemeProvider>
    )
};

export default Home
