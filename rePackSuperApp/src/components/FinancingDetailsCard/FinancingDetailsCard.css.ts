import styled from 'styled-components/native';
import { CustomMediumText, MediumText } from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { AvailableStatus } from '../StatusBox/StatusBox';

const handleColorType = stageStatus => {
  switch (stageStatus) {
    case AvailableStatus.IN_PROGRESS:
      return theme.BLUE_COLOR_1;
    case AvailableStatus.PENDENCY:
      return theme.ORANGE_COLOR_2;
    case AvailableStatus.CANCELED:
      return theme.RED_COLOR_1;
    case AvailableStatus.CONCLUDED:
      return theme.GREEN_COLOR_1;
    default:
      return theme.GRAY_COLOR_500;
  }
};

export const FullColumnContainer = styled.View`
  width: 100%;
  padding-left: 10px;
  padding-top: 32px;
  flex: 1;
`;

export const WrapperView = styled.View`
`;

export const NoPadColumnContainer = styled.View`
  flex-direction: column;
  width: 100%;
	flex: 1;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const StageCardView = styled.View`
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 12px;
  border-color: ${props => handleColorType(props.stageValue)};
  border-left-width: 5px;
`;

export const PrimaryText = styled(CustomMediumText)`
  padding-left: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: ${theme.GRAY_COLOR_1000}
`;

export const SecondaryText = styled(MediumText)`
  padding-top: 4px;
  padding-left: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  color: ${theme.GRAY}
`;

export const TertiaryText = styled(MediumText)`
  padding-left: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color:${theme.GRAY}
`;

export const BoldLinkPhone = styled(CustomMediumText)`
  padding-left:8px;
  color: ${theme.GRAY_COLOR_1000};
  font-weight: 700;
  line-height: 22px;
`;
