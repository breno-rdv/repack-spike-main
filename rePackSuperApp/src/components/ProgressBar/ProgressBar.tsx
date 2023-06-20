import React from 'react';
import { CustomProgressBar, ErrorUnit, SuccessUnit } from './ProgressBar.css';

export interface CardProps {
  testID?: string;
  total: number;
  success: number;
  error: number;
}

export const ProgressBar: React.FC<CardProps> = ({ testID, total, success, error }) => {
  const successPerc = total != 0 ? (success / total) * 100 + '%' : 0 + '%';
  const errorPerc = total != 0 ? (error / total) * 100 + '%' : 0 + '%';

  return (
    <CustomProgressBar testID={testID}>
      <SuccessUnit successPerc={successPerc} />
      <ErrorUnit errorPerc={errorPerc} />
    </CustomProgressBar>
  );
};
