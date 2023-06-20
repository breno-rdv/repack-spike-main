import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import React from 'react';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { RoundBoxContainer, StatusText } from './FinancingStatusBox.css';

export enum AvailableStatus {
  IN_PROGRESS = 'inProgress',
  PENDENCY = 'pendency',
  CONCLUDED = 'concluded',
  CANCELED = 'canceled',
}

export interface IFinancingStatusBoxProps {
  financingStatusText: AvailableStatus;
  testID?: string;
}

export const FinancingStatusBox: React.FC<IFinancingStatusBoxProps> = ({
  financingStatusText,
  testID = 'financingStatusBox',
}: IFinancingStatusBoxProps) => {
  const { locale } = useLocale();

  let statusText;
  let textColor;
  let boxBorderColor;
  let boxBackgroundColor;

  switch (financingStatusText) {
    case AvailableStatus.IN_PROGRESS:
      statusText = translateWithFallback('FinancingStatusInProgress', 'In Progress', locale);
      textColor = theme.BLUE_COLOR_1;
      boxBorderColor = theme.BLUE_COLOR_1;
      boxBackgroundColor = theme.BLUE_COLOR_2;
      break;
    case AvailableStatus.PENDENCY:
      statusText = translateWithFallback('FinancingStatusPendency', 'Pendency', locale);
      textColor = theme.ORANGE_COLOR_1;
      boxBorderColor = theme.ORANGE_COLOR_2;
      boxBackgroundColor = theme.ORANGE_COLOR_3;
      break;
    case AvailableStatus.CONCLUDED:
      statusText = translateWithFallback('FinancingStatusConcluded', 'Concluded', locale);
      textColor = theme.GREEN_COLOR_1;
      boxBorderColor = theme.GREEN_COLOR_1;
      boxBackgroundColor = theme.GREEN_COLOR_2;
      break;
    case AvailableStatus.CANCELED:
      statusText = translateWithFallback('FinancingStatusCanceled', 'Canceled', locale);
      textColor = theme.RED_COLOR_1;
      boxBorderColor = theme.RED_COLOR_1;
      boxBackgroundColor = theme.ORANGE_COLOR_3;
      break;
    default:
      statusText = translateWithFallback('FinancingStatusInProgress', 'In Progress', locale);
      textColor = theme.BLUE_COLOR_1;
      boxBorderColor = theme.BLUE_COLOR_1;
      boxBackgroundColor = theme.BLUE_COLOR_2;
  }

  return (
    <RoundBoxContainer testID={testID} style={{ borderColor: boxBorderColor, backgroundColor: boxBackgroundColor }}>
      <StatusText style={{ color: textColor }} testID="financingStatus">
        {statusText}
      </StatusText>
    </RoundBoxContainer>
  );
};
