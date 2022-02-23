import styled from "styled-components";
import base from "../../styles/base.style";

const FilterNavItem = styled('a')`
${base};

//font-family: 'Ubuntu'; 
font-weight: 500;
text-align: center;
text-transform: uppercase;
display: inline-block;
padding: 12px 22px;
color: var(--heading-color);
transition: .3s; 
border-radius: 23px;
margin-bottom: 5px;
& + a{
margin-left: 5px;
}
&.active,
&:hover{
background: var(--theme-color);
opacity: 1;
color: var(--heading-color);
}
`;

export { FilterNavItem }

