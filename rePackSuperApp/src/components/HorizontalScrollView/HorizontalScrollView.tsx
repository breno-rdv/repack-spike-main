import React, { PropsWithChildren } from 'react';
import { Image } from 'react-native';
import { Card, CardScrollView, Content, HomeCardIcon, HomeCardTitle, Information } from './HorizontalScrollView.css';

export interface CardProps {
  testID?: string;
  icon?: any;
  cardTitle?: string;
  showCardInfoTitle: boolean;
}

export const HorizontalScrollView: React.FC<PropsWithChildren<CardProps>> = ({
  testID,
  icon,
  cardTitle,
  children,
  showCardInfoTitle,
}) => {
  return (
    <Card testID={testID}>
      {showCardInfoTitle ? (
        <Information>
          <HomeCardIcon>
            <Image testID="icon" source={icon} />
            <HomeCardTitle testID="cardText">{cardTitle}</HomeCardTitle>
          </HomeCardIcon>
        </Information>
      ) : null}

      <Content>
        <CardScrollView testID="cardContent" horizontal={true} showsHorizontalScrollIndicator={false}>
          {children}
        </CardScrollView>
      </Content>
    </Card>
  );
};
