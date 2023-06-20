import React from 'react';
import { PressableProps } from 'react-native';
import { TitleText, SubtitleText } from './Title.css';

export interface TitleProps {
  title: string;
  subtitle?: string;
}

export const Title: React.FC<TitleProps & PressableProps> = props => {
  return (
    <>
      <TitleText testID="title">{props.title}</TitleText>
      <SubtitleText testID="subtitle">{props.subtitle}</SubtitleText>
    </>
  );
};
