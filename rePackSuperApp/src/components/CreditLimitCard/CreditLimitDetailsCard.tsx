import React from 'react';
import {
  Card,
  DataRow,
  FirstData,
  LightMediumText,
  Line,
  MainBoldLargeText,
  NormalText,
  SecondData,
  TextRow,
  ValueText,
} from './CreditLimitCard.css';

export interface ICardProps {
  testID: string;
  cardTitle: string;
  amount: string;
  firstDataTitle: string;
  dueDate: string;
  secondDataTitle: string;
  lastUpdateDate: string;
  cardText: string;
}

export const CreditLimitDetailsCard: React.FC<ICardProps> = ({
  testID,
  cardTitle,
  amount,
  firstDataTitle,
  dueDate,
  secondDataTitle,
  lastUpdateDate,
  cardText,
}: ICardProps) => {
  return (
    <Card testID={testID}>
      <LightMediumText testID={'title'}>{cardTitle}</LightMediumText>
      <MainBoldLargeText testID={'amount'}>{amount}</MainBoldLargeText>
      <Line />
      <DataRow>
        <FirstData>
          <NormalText testID={'firstDataTitle'}>{firstDataTitle}</NormalText>
          <ValueText testID={'nextDueDate'}>{dueDate}</ValueText>
        </FirstData>
        <SecondData>
          <NormalText testID={'secondDataTitle'}>{secondDataTitle}</NormalText>
          <ValueText testID={'lastDueDate'}>{lastUpdateDate}</ValueText>
        </SecondData>
      </DataRow>
      <TextRow>
        <NormalText testID={'cardText'}>{cardText}</NormalText>
      </TextRow>
    </Card>
  );
};
