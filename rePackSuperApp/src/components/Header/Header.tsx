import React, { useState, ReactNode } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { useAuth } from '../../../../../p1p3-mobile/src/contexts/AuthContext/AuthContext';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { useRouteName } from '../../../../../p1p3-mobile/src/contexts/RouteNameContext/RouteNameContext';
import { useHome } from '../../../../../p1p3-mobile/src/scenes/HomeScene/HomeContext';

import { clearStackAndroid } from '../../../../../p1p3-mobile/src/managers/Stack';
import { EV_HOME_MENU_BUTTON_PRESSED, logEvent } from '../../../../../p1p3-mobile/src/managers/MetricsManager';

import chevronLeftIcon from '../../../../../p1p3-mobile/src/assets/icons/header/chevron-left.png';
import menuIcon from '../../../../../p1p3-mobile/src/assets/icons/header/menu.png';
import closeMenuIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/closeMenuIcon.png';

import { Menu } from '../MenuModal/MenuModal';
import { MenuModalView } from '../MenuModal/MenuModal.css';

const styles = StyleSheet.create({
  headerIos: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  headerAndroid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flex: 5,
    flexDirection: 'row',
  },
  headerLeftBackButton: {
    flexDirection: 'row',
    marginRight: 16,
  },
  headerModalButton: {
    width: '100%',
    alignItems: 'flex-end',
  },
  headerTitle: {
    flex: 1,
    color: '#FFF',
    fontFamily: 'Noto Sans',
    fontSize: 16,
  },
  headerSubTitle: {
    flex: 1,
    color: '#FFF',
    fontFamily: 'Noto Sans',
    fontSize: 14,
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  headerSubTitleButton: {
    flex: 1,
  },
  headerSubTitleButtonText: {
    color: '#FFF',
    fontFamily: 'Noto Sans',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  headerIcon: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: 10,
  },
  headerMenuTitle: {
    flex: 1,
    flexDirection: 'column',
  },
  headerMenuSubTitle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerMenuSubtitleHome: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
  },
});

interface HeaderProps {
  title?: string;
  subtitleButton?: string;
  subtitleButtonOnPress?: () => void;
  backButton?: boolean;
  backButtonAction?(): void;
  icon?: any;
  customRightIcon?: ReactNode;
  customRightIconAction?: () => void;
}

export const Header: React.FC<TouchableOpacityProps & HeaderProps> = ({
  title,
  subtitleButton,
  subtitleButtonOnPress,
  backButton,
  backButtonAction,
  icon,
  customRightIcon,
  customRightIconAction,
}) => {
  const navigation = useNavigation();
  const { locale } = useLocale();
  const { logout } = useAuth();
  const { routeName } = useRouteName();
  const { isLoadingBankBill, isLoadingCreditLimit } = useHome();

  const [modalVisible, setModalVisible] = useState(false);

  useFocusEffect(clearStackAndroid(navigation, locale, logout));

  const headerStyle = () => {
    if (Platform.OS === 'ios') {
      return styles.headerIos;
    } else {
      return styles.headerAndroid;
    }
  };

  const assembleHeaderStyle = () => {
    if (!subtitleButton) {
      if (routeName === 'Home') return styles.headerMenuSubtitleHome;
      return styles.headerMenuSubTitle;
    }
    return styles.headerMenuTitle;
  };
  return (
    <>
      <MenuModalView>
        <Menu
          modalVisible={modalVisible}
          onPressHandler={() => {
            setModalVisible(false);
          }}
        />
      </MenuModalView>
      <View testID="header" style={headerStyle()}>
        <View style={styles.headerLeft}>
          {backButton && (
            <TouchableOpacity
              testID="backButton"
              onPress={backButtonAction ? backButtonAction : () => navigation.goBack()}
              style={styles.headerLeftBackButton}
            >
              <Image source={chevronLeftIcon} />
            </TouchableOpacity>
          )}
          {icon && <Image style={styles.headerIcon} source={icon} />}
          <View testID="headerMenuTitle" style={assembleHeaderStyle()}>
            <Text style={styles.headerTitle} ellipsizeMode="tail" numberOfLines={1}>
              {title}
            </Text>
            {!!subtitleButton && (
              <TouchableOpacity
                testID="subtitleButton"
                style={styles.headerSubTitleButton}
                onPress={subtitleButtonOnPress}
                disabled={isLoadingBankBill || isLoadingCreditLimit}
              >
                <Text style={styles.headerSubTitleButtonText}>{subtitleButton}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.headerRight}>
          {customRightIcon ? (
            <TouchableOpacity
              style={styles.headerModalButton}
              onPress={() => {
                customRightIconAction();
              }}
              testID="custom-right-icon-action"
            >
              <Image source={customRightIcon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.headerModalButton}
              onPress={() => {
                logEvent(EV_HOME_MENU_BUTTON_PRESSED);
                setModalVisible(!modalVisible);
              }}
              testID="drawer"
            >
              {!modalVisible ? <Image source={menuIcon} /> : <Image source={closeMenuIcon} />}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};
