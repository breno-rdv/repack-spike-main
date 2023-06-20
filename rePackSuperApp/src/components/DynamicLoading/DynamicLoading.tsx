import React, { useCallback, useState } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import { WhiteLayout } from '../Layout/Layout';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import {
  InfoContainer,
  ProgressLinearBar,
  ProgressLinearBarContent,
  PrimaryText,
  PrimaryTextContainer,
} from './DynamicLoading.css';

export interface DynamicLoadingProps {
  forcedTimeout?: number;
}

export const DynamicLoading: React.FC<DynamicLoadingProps> = ({ forcedTimeout }: DynamicLoadingProps) => {
  const { locale } = useLocale();

  const [textIndex, setTextIndex] = useState(0);
  const [progressTimer, setProgressTimer] = useState(0);
  const [timeoutTimer, setTimeoutTimer] = useState(0);
  const timerCallback = useCallback(() => setProgressTimer(currTimer => currTimer + 1), []);
  const timeoutTimerCallback = useCallback(() => setTimeoutTimer(currTimer => currTimer + 1), []);

  const loadingTexts = [
    `${translateWithFallback('LoadingPage1', 'Wait a minute', locale)} ...`,
    `${translateWithFallback('LoadingPage2', 'Your request is being processed', locale)} ...`,
    `${translateWithFallback('LoadingPage3', 'Almost there', locale)} ...`,
  ];

  const handleProgressChange = interval => {
    if (progressTimer > 100 && textIndex < 2) {
      clearInterval(interval);
      setProgressTimer(0);
      setTextIndex(prevState => prevState + 1);
    } else if (progressTimer > 100) {
      clearInterval(interval);
      setProgressTimer(0);
      setTextIndex(0);
    }
    if (forcedTimeout && timeoutTimer === forcedTimeout) {
      clearInterval(interval);
      DeviceEventEmitter.emit('timeoutConnection');
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const interval = setInterval(() => {
        timerCallback();
      }, 25);
      handleProgressChange(interval);
      return () => clearInterval(interval);
    }, [progressTimer])
  );

  useFocusEffect(
    React.useCallback(() => {
      const intervalTimeout = setInterval(() => {
        timeoutTimerCallback();
      }, 1000);
      return () => clearInterval(intervalTimeout);
    }, [timeoutTimer])
  );

  return (
    <WhiteLayout>
      <InfoContainer>
        <PrimaryTextContainer>
          <PrimaryText testID="primaryText">{loadingTexts[textIndex]}</PrimaryText>
        </PrimaryTextContainer>
        <ProgressLinearBar testID="progressLinearBar">
          <ProgressLinearBarContent testID="progressLinearBarContent" completed={progressTimer} />
        </ProgressLinearBar>
      </InfoContainer>
    </WhiteLayout>
  );
};
