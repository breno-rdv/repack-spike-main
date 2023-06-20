import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '../../../../../p1p3-mobile/src/contexts/AuthContext/AuthContext';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import { MenuCard } from '../MenuCard/MenuCard';
import { MenuScrollView, MenuModal } from './MenuModal.css';
import aboutIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/about.png';
import bankBillsIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/bankBills.png';
import callIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/call.png';
import contractsIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/contracts.png';
import financingIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/financings.png';
import helpIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/help.png';
import homeIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/home.png';
import IncomeTaxStatementIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/IncomeTaxStatement.png';
import closeIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/logout.png';
import rightArrowIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/rightArrow.png';
import settingsIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/settings.png';
import trashIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/trash.png';

import { getDefaultHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform, StatusBar } from 'react-native';
import { FeatureFlags, FeatureFlagService } from '../../../../../p1p3-mobile/src/services/FeatureFlagService/FeatureFlagService';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export interface IMenuModalProps {
  testID?: string;
  modalVisible: boolean;
  onPressHandler: any;
}

export const Menu: React.FC<IMenuModalProps> = props => {
  const { locale } = useLocale();
  const navigation = useNavigation();
  const route = useRoute();
  const { logout } = useAuth();
  const featureFlagService = FeatureFlagService.getInstance();

  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();

  let headerHeight;
  if (Platform.OS === 'ios') {
    headerHeight = route.name === 'Home' ? theme.HOME_HEADER_HEIGHT : getDefaultHeaderHeight(frame, false, insets.top);
  } else {
    if (route.name === 'Home') {
      headerHeight = theme.HOME_HEADER_HEIGHT + StatusBar.currentHeight;
    } else {
      frame.height = frame.height + insets.top;
      headerHeight = getDefaultHeaderHeight(frame, false, StatusBar.currentHeight);
    }
  }

  const [displayFinancing, setDisplayFinancing] = useState(false);
  const [displayBankBills, setDisplayBankBills] = useState(false);
  const [displayContracts, setDisplayContracts] = useState(false);
  const [displayIncomeTax, setDisplayIncomeTax] = useState(false);
  const [displayOldBankBills, setDisplayOldBankBills] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (props.modalVisible) {
      setModalVisible(props.modalVisible);
    }
  }, [props.modalVisible]);

  useEffect(() => {
    checkFeatures();
  }, []);

  const checkFeatures = () => {
    setDisplayFinancing(featureFlagService.isFeatureEnabled(FeatureFlags.FINANCING_FEATURE));
    setDisplayBankBills(featureFlagService.isFeatureEnabled(FeatureFlags.BANK_BILLS_FEATURE));
    setDisplayContracts(featureFlagService.isFeatureEnabled(FeatureFlags.CONTRACT_FEATURE));
    setDisplayIncomeTax(featureFlagService.isFeatureEnabled(FeatureFlags.INCOME_TAX_FEATURE));
    setDisplayOldBankBills(() => {
      return (
        !featureFlagService.isFeatureEnabled(FeatureFlags.BANK_BILLS_FEATURE) &&
        featureFlagService.isFeatureEnabled(FeatureFlags.BANK_BILLS_FEATURE_OLD)
      );
    });
  };

  return (
    <MenuModal
      coverScreen={true}
      statusBarTranslucent={true}
      animationType="slide"
      visible={modalVisible}
      onBackdropPress={() => {
        props.onPressHandler();
        setModalVisible(false);
      }}
      headerHeight={headerHeight}
    >
      <MenuScrollView>
        <MenuCard
          testID="Home"
          iconImg={homeIcon}
          menuText={translateWithFallback('InitialPage', 'Initial Page', locale)}
          secondaryIcon={rightArrowIcon}
          onPressHandler={() => {
            props.onPressHandler();
            setModalVisible(false);
            navigation.navigate('Home', { screen: 'Home' });
          }}
        />
        {displayBankBills || displayOldBankBills ? (
          <MenuCard
            testID="BankBills"
            iconImg={bankBillsIcon}
            menuText={translateWithFallback('BankBills', 'Bank Bills', locale)}
            secondaryIcon={rightArrowIcon}
            onPressHandler={() => {
              props.onPressHandler();
              setModalVisible(false);
              if (displayOldBankBills) {
                navigation.navigate('OldBankBill');
              } else {
                navigation.navigate('BankBill');
              }
            }}
          />
        ) : null}

        {displayFinancing ? (
          <MenuCard
            testID="Financings"
            iconImg={financingIcon}
            menuText={translateWithFallback('FinancingAndProposal', 'Financing and Proposal', locale)}
            secondaryIcon={rightArrowIcon}
            onPressHandler={() => {
              props.onPressHandler();
              setModalVisible(false);
              navigation.navigate('Financings');
            }}
          />
        ) : null}

        {displayContracts ? (
          <MenuCard
            testID="Contracts"
            iconImg={contractsIcon}
            menuText={translateWithFallback('Contracts', 'Contracts', locale)}
            secondaryIcon={rightArrowIcon}
            onPressHandler={() => {
              props.onPressHandler();
              setModalVisible(false);
              navigation.navigate('NewContracts');
            }}
          />
        ) : null}

        {displayIncomeTax ? (
          <MenuCard
            testID="IR"
            iconImg={IncomeTaxStatementIcon}
            menuText={translateWithFallback('IncomeTaxStatementMenu', 'Income Tax Statement', locale)}
            secondaryIcon={rightArrowIcon}
            onPressHandler={() => {
              props.onPressHandler();
              setModalVisible(false);
              navigation.navigate('IR');
            }}
          />
        ) : null}

        <MenuCard
          testID="FAQ"
          iconImg={helpIcon}
          menuText={translateWithFallback('FAQMenu', 'Often Questions', locale)}
          secondaryIcon={rightArrowIcon}
          onPressHandler={() => {
            props.onPressHandler();
            setModalVisible(false);
            navigation.navigate('FAQWeb');
          }}
        />

        <MenuCard
          testID="ContactUs"
          iconImg={callIcon}
          menuText={translateWithFallback('ContactUs', 'Contact Us', locale)}
          secondaryIcon={rightArrowIcon}
          onPressHandler={() => {
            props.onPressHandler();
            setModalVisible(false);
            navigation.navigate('ContactUsWeb');
          }}
        />

        <MenuCard
          testID="Settings"
          iconImg={settingsIcon}
          menuText={translateWithFallback('Settings', 'Settings', locale)}
          secondaryIcon={rightArrowIcon}
          onPressHandler={() => {
            props.onPressHandler();
            setModalVisible(false);
            navigation.navigate('Settings');
          }}
        />

        <MenuCard
          testID="Cancel Account"
          iconImg={trashIcon}
          menuText={translateWithFallback('CancelAccount', 'Cancel Account', locale)}
          secondaryIcon={rightArrowIcon}
          onPressHandler={() => {
            props.onPressHandler();
            setModalVisible(false);
            navigation.navigate('CancelAccount');
          }}
        />

        <MenuCard
          testID="About"
          iconImg={aboutIcon}
          menuText={translateWithFallback('About', 'About', locale)}
          secondaryIcon={rightArrowIcon}
          onPressHandler={() => {
            props.onPressHandler();
            setModalVisible(false);
            navigation.navigate('About');
          }}
        />

        <MenuCard
          testID="Logout"
          iconImg={closeIcon}
          menuText={translateWithFallback('SignOut', 'Sign Out', locale)}
          secondaryIcon={rightArrowIcon}
          onPressHandler={() => {
            logout();
          }}
        />
      </MenuScrollView>
    </MenuModal>
  );
};
