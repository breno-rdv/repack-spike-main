import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import React from 'react';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { RoundBoxContainer, StatusText } from './StatusBox.css';

export enum AvailableStatus {
  IN_PROGRESS = 'inProgress',
  PENDENCY = 'pendency',
  CONCLUDED = 'concluded',
  CANCELED = 'canceled',
}

export enum BankBillStatus {
  DUE_TODAY = 'TODAY',
  OVERDUE = 'OVERDUE',
  OPEN = 'FUTURE',
}

export interface IStatusBoxProps {
  financingStatusText?: AvailableStatus;
  bankBillStatusText?: BankBillStatus;
  testID?: string;
}

export const StatusBox: React.FC<IStatusBoxProps> = ({
  financingStatusText,
  bankBillStatusText,
  testID,
}: IStatusBoxProps) => {
  const { locale } = useLocale();

  let statusText;
  let textColor;
  let boxBorderColor;
  let boxBackgroundColor;

  const handleColors = (color: string) => {
    switch (color) {
      case 'blue':
        textColor = theme.BLUE_COLOR_1;
        boxBorderColor = theme.BLUE_COLOR_1;
        boxBackgroundColor = theme.BLUE_COLOR_2;
        break;
      case 'orange':
        textColor = theme.ORANGE_COLOR_1;
        boxBorderColor = theme.ORANGE_COLOR_2;
        boxBackgroundColor = theme.ORANGE_COLOR_3;
        break;
      case 'green':
        textColor = theme.GREEN_COLOR_1;
        boxBorderColor = theme.GREEN_COLOR_1;
        boxBackgroundColor = theme.GREEN_COLOR_2;
        break;
      case 'red':
        textColor = theme.RED_COLOR_1;
        boxBorderColor = theme.RED_COLOR_1;
        boxBackgroundColor = theme.ORANGE_COLOR_3;
        break;
    }
  };

  if (financingStatusText) {
    switch (financingStatusText) {
      case AvailableStatus.IN_PROGRESS:
        statusText = translateWithFallback('FinancingStatusInProgress', 'In Progress', locale);
        handleColors('blue');
        break;
      case AvailableStatus.PENDENCY:
        statusText = translateWithFallback('FinancingStatusPendency', 'Pendency', locale);
        handleColors('orange');
        break;
      case AvailableStatus.CONCLUDED:
        statusText = translateWithFallback('FinancingStatusConcluded', 'Concluded', locale);
        handleColors('green');
        break;
      case AvailableStatus.CANCELED:
        statusText = translateWithFallback('FinancingStatusCanceled', 'Canceled', locale);
        handleColors('red');
        break;
      default:
        statusText = translateWithFallback('FinancingStatusInProgress', 'In Progress', locale);
        textColor = theme.BLUE_COLOR_1;
        boxBorderColor = theme.BLUE_COLOR_1;
        boxBackgroundColor = theme.BLUE_COLOR_2;
    }
  }

  if (bankBillStatusText) {
    switch (bankBillStatusText) {
      case BankBillStatus.DUE_TODAY:
        statusText = translateWithFallback('BankBillStatusDueToday', 'Due today', locale);
        handleColors('blue');
        break;
      case BankBillStatus.OPEN:
        statusText = translateWithFallback('BankBillStatusOpen', 'Open', locale);
        handleColors('green');
        break;
      case BankBillStatus.OVERDUE:
        statusText = translateWithFallback('BankBillStatusOverdue', 'Overdue', locale);
        handleColors('red');
        break;
      default:
        statusText = translateWithFallback('BankBillStatusDueToday', 'Due today', locale);
        textColor = theme.BLUE_COLOR_1;
        boxBorderColor = theme.BLUE_COLOR_1;
        boxBackgroundColor = theme.BLUE_COLOR_2;
    }
  }

  return (
    <RoundBoxContainer testID="statusBox" style={{ borderColor: boxBorderColor, backgroundColor: boxBackgroundColor }}>
      <StatusText style={{ color: textColor }} testID={testID}>
        {statusText}
      </StatusText>
    </RoundBoxContainer>
  );
};
