import React from 'react';

import {
  Card,
  CardTitle,
  ButtonContainer,
  CardContainer,
  CardTextContainer,
  CardText,
  Button,
  ButtonText,
} from './HelpCard.css';

export interface CardProps {
  testID?: string;
  cardTitle: string;
  cardText: string;
  buttonText: string;
  onPressHandler: () => void;
  isLastElement?: boolean;
}

export const HelpCard: React.FC<CardProps> = ({ testID = 'pressableIT', ...props }) => {
  return (
    <Card testID={testID} onPress={props.onPressHandler} isLastElement={props.isLastElement}>
      <CardTitle testID={props.cardTitle}>{props.cardTitle}</CardTitle>
      <CardContainer>
        <CardTextContainer>
          <CardText testID="cardText">{props.cardText}</CardText>
        </CardTextContainer>

        <ButtonContainer>
          <Button
            testID="button"
            onPress={() => {
              props.onPressHandler();
            }}
          >
            <ButtonText testID="buttonText">{props.buttonText}</ButtonText>
          </Button>
        </ButtonContainer>
      </CardContainer>
    </Card>
  );
};
