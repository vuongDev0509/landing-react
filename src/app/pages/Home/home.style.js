import styled from 'styled-components'
import base from "../../styles/base.style";

const Wrapper = styled('div')(base);
const LinkPurchase = styled('a')(base, `
font-size: 22px;
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
background-color: var(--theme-color);
margin-left: -15px;
margin-right: -15px;
padding 34px 10px;
font-weight: bold;
color: var(--heading-color);
transition: .3s;
&:hover{
    background: var(--heading-color);
    color: white
}
`);
const TrustItem = styled('div')`
${base};
h3{
    font-size: 50px;
    margin-bottom: 10px;
    line-height: 1;
}
h4{
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
}
`;

const ButtonPurchase = styled('a')`
${base};

font-size: 16px;
line-height: 150%;
text-align: center;
text-transform: uppercase;
background: #FFFFFF;
box-shadow: 0px 6px 10px rgba(77, 79, 209, 0.25);
border-radius: 10px;
color: #4D4FD1;
padding: 12px 55px;
display: inline-block;
font-weight: 800;
text-decoration: none;
transition: .3s;
&:hover{
    background: #6FD3E2;
    color: #000C36;
    text-decoration: none;
}
`;

const ButtonPurchaseTransparent = styled(ButtonPurchase)`
background: transparent;
color: white;
text-decoration: none;
border: 2px solid;
&:hover{
    background: var(--theme-color);
    color: var(--heading-color);
}
`;

export { Wrapper, LinkPurchase, TrustItem, ButtonPurchase, ButtonPurchaseTransparent }

