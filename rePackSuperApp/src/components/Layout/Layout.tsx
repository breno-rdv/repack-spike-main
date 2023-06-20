import React from 'react';
import { GlobalStyle } from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const Layout: React.FC = ({ children }) => {
  return <GlobalStyle>{children}</GlobalStyle>;
};

export const WhiteLayout: React.FC = ({ children }) => {
  return <GlobalStyle style={{ backgroundColor: `${theme.WHITE}` }}>{children}</GlobalStyle>;
};
