import React from 'react';
import { render, fireEvent } from '../../../../../p1p3-mobile/src/test';
import { BankBillFilterModal } from './BankBillFilterModal';
import { act } from 'react-native-testing-library';

const contractsArrayMock = [
  {
    contract: '12341/12',
    selected: true,
  },
  {
    contract: '12343/12',
    selected: true,
  },
  {
    contract: '12342/12',
    selected: true,
  },
];

describe('<BankBillFilterModal />', function () {
  const defaultProps = {
    actionDispatcher: jest.fn(),
    applyFilters: jest.fn(),
    clearFilters: jest.fn(),
    buttonText: 'button',
    contractsToBeFiltered: [
      {
        contract: '12341/12',
        selected: true,
      },
    ],
    setContractToBeFiltered: jest.fn(),
    modalVisible: true,
    displayContractFilter: true,
    filterOverdueChecked: false,
    setFilterOverdueChecked: jest.fn(),
    filterDueTodayChecked: false,
    setFilterDueTodayChecked: jest.fn(),
    filterOpenChecked: false,
    setFilterOpenChecked: jest.fn(),
    setDueDateFilterActive: jest.fn(),
    setContractFilterActive: jest.fn(),
    setDisplayFilterModal: jest.fn(),
  };

  const renderComponent = (ownProps?: Record<string, any>) =>
    render(<BankBillFilterModal {...defaultProps} {...ownProps} />);

  beforeEach(async () => {
    jest.clearAllMocks();
  });
  beforeAll(async () => {
    jest.useFakeTimers();
  });
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render all modal items', async () => {
    const renderResult = renderComponent();

    const { getByTestId } = renderResult;
    expect(getByTestId('bankBillFilterModal')).toBeTruthy();
    expect(getByTestId('overlayView')).toBeTruthy();
    expect(getByTestId('exitButton')).toBeTruthy();
    expect(getByTestId('applyFilter')).toBeTruthy();
    expect(getByTestId('clearFilter')).toBeTruthy();
    expect(getByTestId('contractButton')).toBeTruthy();
    expect(getByTestId('dueDateButton')).toBeTruthy();
  });

  it('should render all items except the contract button', async () => {
    const renderResult = renderComponent({ displayContractFilter: false });

    const { getByTestId, queryByTestId } = renderResult;
    expect(getByTestId('bankBillFilterModal')).toBeTruthy();
    expect(getByTestId('overlayView')).toBeTruthy();
    expect(getByTestId('exitButton')).toBeTruthy();
    expect(getByTestId('applyFilter')).toBeTruthy();
    expect(getByTestId('clearFilter')).toBeTruthy();
    expect(getByTestId('dueDateButton')).toBeTruthy();
    expect(queryByTestId('contractButton')).toBeNull();
  });

  it('should pressOnClose when overlay view is pressed', async () => {
    const renderResult = renderComponent();

    expect(renderResult.getByTestId('bankBillFilterModal')).toBeTruthy();
    const overlayView = renderResult.getByTestId('overlayView');
    expect(overlayView).toBeTruthy();
    await act(async () => fireEvent.press(overlayView));
    expect(defaultProps.setDisplayFilterModal).toBeCalledTimes(1);
  });

  it('should press on close when exit icon is pressed', async () => {
    const renderResult = renderComponent();

    expect(renderResult.getByTestId('bankBillFilterModal')).toBeTruthy();
    const exitButton = renderResult.getByTestId('exitButton');
    expect(exitButton).toBeTruthy();
    await act(async () => fireEvent.press(exitButton));
    expect(defaultProps.setDisplayFilterModal).toBeCalledTimes(1);
    expect(defaultProps.clearFilters).toBeCalledTimes(1);
  });

  it('should render contracts checkbox when focus due date', async () => {
    const renderResult = renderComponent();

    const contractButton = renderResult.getByTestId('dueDateButton');
    fireEvent.press(contractButton);
    expect(renderResult.getByTestId('modalOverdueCheckBox')).toBeTruthy();
    expect(renderResult.getByTestId('bankBillStatusOverdueCheckboxText')).toBeTruthy();
    expect(renderResult.getByTestId('filterOverdueCheckbox')).toBeTruthy();
    expect(renderResult.getByTestId('modalDueTodayCheckBox')).toBeTruthy();
    expect(renderResult.getByTestId('bankBillStatusDueTodayCheckboxText')).toBeTruthy();
    expect(renderResult.getByTestId('filterDueTodayCheckbox')).toBeTruthy();
    expect(renderResult.getByTestId('modalOpenCheckBox')).toBeTruthy();
    expect(renderResult.getByTestId('bankBillStatusOpenCheckboxText')).toBeTruthy();
    expect(renderResult.getByTestId('filterOpenCheckbox')).toBeTruthy();
  });

  it('should render contracts checkbox when focus contracts', async () => {
    const renderResult = renderComponent();

    const contractButton = renderResult.getByTestId('contractButton');
    fireEvent.press(contractButton);
    expect(renderResult.getAllByTestId('modalContractCheckBox')).toHaveLength(1);
  });

  it('should call clear filter when clear filter button pressed', async () => {
    const renderResult = renderComponent();

    const clearFilterButton = renderResult.getByTestId('clearFilter');
    fireEvent.press(clearFilterButton);
    const modalContractCheckBox = renderResult.queryByText('modalContractCheckBox');
    expect(modalContractCheckBox).toBeNull();
  });

  it('should call apply filter when apply filter button pressed', async () => {
    const renderResult = renderComponent();

    const applyFilterButton = renderResult.getByTestId('applyFilter');
    await fireEvent.press(applyFilterButton);
    expect(defaultProps.actionDispatcher).toBeCalledTimes(1);
    expect(defaultProps.applyFilters).toBeCalledTimes(1);
    expect(defaultProps.setDueDateFilterActive).toBeCalledTimes(1);
    expect(defaultProps.setContractFilterActive).toBeCalledTimes(1);
  });
});
