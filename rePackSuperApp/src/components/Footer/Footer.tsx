import React from 'react';
import { Card, FooterText } from './Footer.css';

export interface CardProps {
  footerText: string;
}

export const Footer: React.FC<CardProps> = ({ footerText }) => {
  return (
    <Card testID="footer">
      <FooterText testID="footerText">{footerText}</FooterText>
    </Card>
  );
};
