import styled, { createGlobalStyle } from 'styled-components';
import fontRegular from '../fonts/Manrope-Regular.ttf';
import fontBold from '../fonts/Manrope-Bold.ttf';
import fontSemiBold from '../fonts/Manrope-SemiBold.ttf';

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Manrope';
  font-weight: 400 500 600;
  src: url(${fontRegular}),url(${fontSemiBold}), url(${fontBold}) ;
}

body {
  font-family: 'Manrope', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
}

p:last-child {
  /* margin-bottom: 0; */
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
}
`;

export const MainContainer = styled.div`
  padding: 0 44px;
  @media screen and (min-width: 1281px) {
    padding: 0 128px;
  }
`;
