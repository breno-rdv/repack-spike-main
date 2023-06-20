import React from 'react';
import { CalloutButtonStyled, CalloutButtonText } from './CalloutButton.css';

export type CalloutButtonProps = {
  action: () => void;
  message: string;
  testID: string;
};

export const CalloutButton = ({ action, message, testID, ...props }: CalloutButtonProps) => {
  return (
    <CalloutButtonStyled testID={testID} onPress={action} {...props}>
      <CalloutButtonText testID="calloutButtonText" {...props}>
        {message}
      </CalloutButtonText>
    </CalloutButtonStyled>
  );
};
