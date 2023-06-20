import * as React from 'react';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import closeIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/close.png';
import filterIcon from '../../../../../p1p3-mobile/src/assets/icons/filter.png';
import { Image, Modal, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { CheckBoxContainer } from '../CheckBoxContainer/CheckBoxContainer';
import { Button } from '../Button';
import {
  FilterButton,
  FilterButtonText,
  FilterRow,
  FilterText,
  ExitIconView,
  ModalView,
  CloseImage,
  OverlayView,
  ButtonContainer,
  HeaderView,
  HeaderColumn,
  ImageView,
  GreenLink,
} from './BankBillFilterModal.css';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { IActionCreator } from '../../../../../p1p3-mobile/src/scenes/BankBillScene/store/actions';

export type BankBillFilterModalProps = {
  actionDispatcher: React.Dispatch<any>;
  applyFilters: IActionCreator;
  clearFilters: IActionCreator;
  buttonText: string;
  contractsToBeFiltered: any;
  setContractToBeFiltered: React.Dispatch<any>;
  modalVisible: boolean;
  displayContractFilter: boolean;
  filterOverdueChecked: boolean;
  setFilterOverdueChecked: React.Dispatch<React.SetStateAction<boolean>>;
  filterDueTodayChecked: boolean;
  setFilterDueTodayChecked: React.Dispatch<React.SetStateAction<boolean>>;
  filterOpenChecked: boolean;
  setFilterOpenChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setDueDateFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
  setContractFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BankBillFilterModal = ({
  applyFilters,
  actionDispatcher,
  clearFilters,
  buttonText,
  contractsToBeFiltered,
  setContractToBeFiltered,
  modalVisible,
  displayContractFilter,
  filterOverdueChecked,
  setFilterOverdueChecked,
  filterDueTodayChecked,
  setFilterDueTodayChecked,
  filterOpenChecked,
  setFilterOpenChecked,
  setDueDateFilterActive,
  setContractFilterActive,
  setDisplayFilterModal,
}: BankBillFilterModalProps) => {
  const { locale } = useLocale();
  const [focusDueDate, setFocusDueDate] = React.useState<boolean>(true);
  const [focusContract, setFocusContract] = React.useState(false);

  const handleApplyFilter = () => {
    actionDispatcher(applyFilters());
    if (filterOverdueChecked || filterDueTodayChecked || filterOpenChecked) {
      setDueDateFilterActive(true);
    } else {
      setDueDateFilterActive(false);
    }
    if (contractsToBeFiltered.filter(contract => contract.selected === true).length > 0) {
      setContractFilterActive(true);
    } else {
      setContractFilterActive(false);
    }
    setDisplayFilterModal(false);
  };

  const handleClearFilter = () => {
    clearFilters();
    setDueDateFilterActive(false);
    setContractFilterActive(false);
    setDisplayFilterModal(false);
    onPressDueDate();
  };

  const onPressDueDate = () => {
    setFocusDueDate(true);
    setFocusContract(false);
  };

  const onPressContract = () => {
    setFocusContract(true);
    setFocusDueDate(false);
  };

  return (
    <Modal
      testID="bankBillFilterModal"
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setDisplayFilterModal(false)}
    >
      <TouchableWithoutFeedback testID={'overlayView'} onPress={() => setDisplayFilterModal(false)}>
        <OverlayView />
      </TouchableWithoutFeedback>
      <ModalView>
        <HeaderView>
          <HeaderColumn>
            <FilterRow>
              <ImageView>
                <Image source={filterIcon} />
              </ImageView>
              <FilterText>{translateWithFallback('Filters', 'Filters', locale)}:</FilterText>
            </FilterRow>
            <FilterRow>
              <FilterButton
                testID={'dueDateButton'}
                onPress={onPressDueDate}
                backgroundColor={focusDueDate ? theme.PRIMARY_COLOR : theme.WHITE}
              >
                <FilterButtonText color={focusDueDate ? theme.WHITE : theme.PRIMARY_COLOR}>
                  {translateWithFallback('DueDate', 'Due Date', locale)}
                </FilterButtonText>
              </FilterButton>

              {displayContractFilter && (
                <FilterButton
                  testID={'contractButton'}
                  onPress={onPressContract}
                  backgroundColor={focusContract ? theme.PRIMARY_COLOR : theme.WHITE}
                >
                  <FilterButtonText color={focusContract ? theme.WHITE : theme.PRIMARY_COLOR}>
                    {translateWithFallback('Contract', 'Contract', locale)}
                  </FilterButtonText>
                </FilterButton>
              )}
            </FilterRow>
          </HeaderColumn>
          <ExitIconView
            testID={'exitButton'}
            onPress={() => {
              setDisplayFilterModal(false);
              clearFilters();
            }}
          >
            <CloseImage source={closeIcon} />
          </ExitIconView>
        </HeaderView>
        {focusDueDate ? (
          <>
            <CheckBoxContainer
              testID={'modalOverdueCheckBox'}
              testIDCheckBox={'filterOverdueCheckbox'}
              testIDCheckBoxText={'bankBillStatusOverdueCheckboxText'}
              onValueChange={setFilterOverdueChecked}
              checkBoxDisable={false}
              checkBoxValue={filterOverdueChecked}
              checkBoxText={translateWithFallback('BankBillStatusOverdue', 'Overdue', locale)}
            />
            <CheckBoxContainer
              testID={'modalDueTodayCheckBox'}
              testIDCheckBox={'filterDueTodayCheckbox'}
              testIDCheckBoxText={'bankBillStatusDueTodayCheckboxText'}
              onValueChange={setFilterDueTodayChecked}
              checkBoxDisable={false}
              checkBoxValue={filterDueTodayChecked}
              checkBoxText={translateWithFallback('BankBillStatusDueToday', 'Due Today', locale)}
            />
            <CheckBoxContainer
              testID={'modalOpenCheckBox'}
              testIDCheckBox={'filterOpenCheckbox'}
              testIDCheckBoxText={'bankBillStatusOpenCheckboxText'}
              onValueChange={setFilterOpenChecked}
              checkBoxDisable={false}
              checkBoxValue={filterOpenChecked}
              checkBoxText={translateWithFallback('BankBillStatusOpen', 'Open', locale)}
            />
          </>
        ) : (
          <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true} style={{ height: 90 }}>
            {contractsToBeFiltered.map((contract, index) => {
              return (
                <React.Fragment key={`${contract.number}`}>
                  <CheckBoxContainer
                    testID={'modalContractCheckBox'}
                    testIDCheckBox={`filterCheckBox:${contract.number}`}
                    onValueChange={newValue => {
                      actionDispatcher(setContractToBeFiltered(newValue, index));
                    }}
                    checkBoxDisable={false}
                    checkBoxValue={contract.selected}
                    checkBoxText={contract.number}
                  />
                </React.Fragment>
              );
            })}
          </ScrollView>
        )}
        <GreenLink testID={'clearFilter'} onPress={handleClearFilter}>
          {translateWithFallback('Clear', 'Clear', locale)}
        </GreenLink>
        <ButtonContainer>
          <Button testID="applyFilter" text={buttonText} onPress={handleApplyFilter} boldText />
        </ButtonContainer>
      </ModalView>
    </Modal>
  );
};
