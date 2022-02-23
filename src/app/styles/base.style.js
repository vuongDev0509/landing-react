import styled, { createGlobalStyle } from "styled-components";
import {
    alignSelf,
    background,
    borderColor,
    borders,
    color,
    compose,
    display,
    flex,
    grid,
    height,
    letterSpacing,
    lineHeight,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    order,
    position,
    shadow,
    space,
    textAlign,
    typography,
    flexbox,
    width,
} from "styled-system";

const GlobalStyle = createGlobalStyle` 
:root{
--theme-color: ${props => props.theme.colors.accentColor}; 
--text-color: ${props => props.theme.colors.textColor}; 
--heading-color: ${props => props.theme.colors.headingColor}; 
--swiper-theme-color: ${props => props.theme.colors.accentColor};
}
body{
font-family: ${props => props.theme.fontFamily}; 
}
img { 
    max-width: 100%;
}
`;

const base = compose(
    () => ({boxSizing: 'border-box'}),
    space,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    color,
    typography,
    flex,
    order,
    alignSelf,
    borders,
    borderColor,
    display,
    textAlign,
    lineHeight,
    letterSpacing,
    position,
    shadow,
    background,
    grid,
    flexbox
);
base.propTypes = {
    ...space.propTypes,
    ...width.propTypes,
    ...minWidth.propTypes,
    ...maxWidth.propTypes,
    ...height.propTypes,
    ...minHeight.propTypes,
    ...maxHeight.propTypes,
    ...color.propTypes,
    ...typography.propTypes,
    ...flex.propTypes,
    ...order.propTypes,
    ...alignSelf.propTypes,
    ...borders.propTypes,
    ...borderColor.propTypes,
    ...display.propTypes,
    ...textAlign.propTypes,
    ...lineHeight.propTypes,
    ...letterSpacing.propTypes,
    ...position.propTypes,
    ...shadow.propTypes,
    ...background.propTypes,
    ...grid.propTypes,
};
const Button = styled('button')(base);
const Section = styled('section')(base);
const Div = styled('div')(base);
const Heading = styled('h3')(base);
const Text = styled('p')(base);
const Link = styled('a')(base);
const Img = styled('img')(base);

export default base;
export { GlobalStyle, Button, Section, Div, Heading, Text, Link, Img };
