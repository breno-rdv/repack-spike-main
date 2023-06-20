import React from 'react';
import { Image, TouchableOpacityProps } from 'react-native';
import { IconContainer, TextContainer, SuccessAlert, WarningAlert, CriticalAlert, InfoAlert } from './StateAlert.css';
import { MediumText } from '../../../../../p1p3-mobile/src/assets/theme.css';

import successIcon from '../../../../../p1p3-mobile/src/assets/icons/alert/success/success.png';
import warningIcon from '../../../../../p1p3-mobile/src/assets/icons/alert/warning/warning.png';
import criticalIcon from '../../../../../p1p3-mobile/src/assets/icons/critical/critical.png';
import infoIcon from '../../../../../p1p3-mobile/src/assets/icons/alert/information/info.png';

export type AlertType = 'fail' | 'success' | 'warning' | 'info';

export interface IAlertProps {
  text: string;
  type: AlertType;
  testID?: string;
  endHandler?: any;
}

export const StateAlert: React.FC<IAlertProps & TouchableOpacityProps> = ({
  text,
  type,
  testID = 'alert',
  endHandler,
}: IAlertProps & TouchableOpacityProps) => {
  setTimeout(() => {
    endHandler(false);
  }, 3000);

  return (
    <>
      {type === 'success' && (
        <SuccessAlert testID={testID}>
          <IconContainer>
            <Image source={successIcon} />
          </IconContainer>
          <TextContainer>
            <MediumText>{text}</MediumText>
          </TextContainer>
        </SuccessAlert>
      )}

      {type === 'warning' && (
        <WarningAlert testID={testID}>
          <IconContainer>
            <Image source={warningIcon} />
          </IconContainer>
          <TextContainer>
            <MediumText>{text}</MediumText>
          </TextContainer>
        </WarningAlert>
      )}

      {type === 'fail' && (
        <CriticalAlert testID={testID}>
          <IconContainer>
            <Image source={criticalIcon} />
          </IconContainer>
          <TextContainer>
            <MediumText>{text}</MediumText>
          </TextContainer>
        </CriticalAlert>
      )}

      {type === 'info' && (
        <InfoAlert testID={testID}>
          <IconContainer>
            <Image source={infoIcon} />
          </IconContainer>
          <TextContainer>
            <MediumText>{text}</MediumText>
          </TextContainer>
        </InfoAlert>
      )}
    </>
  );
};
