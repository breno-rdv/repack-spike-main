import React from 'react';
import 'react-native';
import { act, render } from '../../../../../p1p3-mobile/src/test';
import { MenuCard } from './MenuCard';
import homeIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/home.png';
import rightArrowIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/rightArrow.png';

describe('Load financing details card ', function () {
  let iconImg: any;
  let menuText: string;
  let secondaryIcon: any;
  let onPressHandler: any;

  beforeEach(async () => {});
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render all components', async () => {
    iconImg = homeIcon;
    menuText = 'InitialPage';
    secondaryIcon = rightArrowIcon;
    onPressHandler = {};

    const testRenderer = render(
      <MenuCard
        iconImg={iconImg}
        menuText={menuText}
        secondaryIcon={secondaryIcon}
        onPressHandler={() => {
          onPressHandler;
        }}
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});
  });
});
