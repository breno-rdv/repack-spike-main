import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ButtonContainer } from './Loader.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { Layout } from '../Layout';

interface LoaderProps {
  isButton?: boolean;
  color?: string;
}

export const Loader: React.FC<LoaderProps> = ({ isButton, color }) => {
  if (isButton) {
    return (
      <ButtonContainer>
        <ActivityIndicator testID="loaderButton" size="small" color={color ? color : theme.PRIMARY_COLOR} />
      </ButtonContainer>
    );
  } else {
    return (
      <Layout>
        <ActivityIndicator testID="loader" size="large" color={theme.PRIMARY_COLOR} />
      </Layout>
    );
  }
};
