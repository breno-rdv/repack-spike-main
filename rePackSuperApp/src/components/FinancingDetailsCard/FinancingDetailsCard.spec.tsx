import React from 'react';
import 'react-native';
import { act, render } from '../../../../../p1p3-mobile/src/test';
import { AvailableStatus } from '../StatusBox/StatusBox';
import { FinancingDetailsCard } from './FinancingDetailsCard';

describe('Load financing details card ', function () {
  let isLoadingFinancingDetails: boolean;
  let stageStatus: AvailableStatus;
  let stageStatusDetailKey: string;
  let phaseStatusKey: string;
  let updateDate: string;

  let testRenderer: any;

  beforeEach(async () => {});
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should display shimmer when loading financing details card', async () => {
    isLoadingFinancingDetails = true;
    stageStatus = AvailableStatus.IN_PROGRESS;
    stageStatusDetailKey = '';
    phaseStatusKey = '';
    updateDate = '';
    const testRenderer = render(
      <FinancingDetailsCard
        isLoadingFinancingDetails={isLoadingFinancingDetails}
        stageStatus={stageStatus}
        stageStatusDetailKey={stageStatusDetailKey}
        phaseStatusKey={phaseStatusKey}
        updateDate={updateDate}
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('financingDetailsCardShimmer')).toBeTruthy();
  });

  it('should have in progress values stages for CreditAnalysis phase', async () => {
    isLoadingFinancingDetails = false;
    stageStatus = 'inProgress';
    stageStatusDetailKey = 'ContractProcessOpened';
    phaseStatusKey = 'CreditAnalysis';
    updateDate = '';
    const testRenderer = render(
      <FinancingDetailsCard
        isLoadingFinancingDetails={isLoadingFinancingDetails}
        stageStatus={stageStatus}
        stageStatusDetailKey={stageStatusDetailKey}
        phaseStatusKey={phaseStatusKey}
        updateDate={updateDate}
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('CreditAnalysisView')).toBeTruthy();
    expect(testRenderer.getByTestId('phaseInProgress')).toBeTruthy();
    expect(testRenderer.getByTestId('inProgressIcon')).toBeTruthy();
  });

  it('should have canceled values stages for CreditAnalysis phase', async () => {
    isLoadingFinancingDetails = false;
    stageStatus = 'canceled';
    stageStatusDetailKey = 'ItWasNotPossibleToContinueProcess';
    phaseStatusKey = 'CreditAnalysis';
    updateDate = '';
    const testRenderer = render(
      <FinancingDetailsCard
        isLoadingFinancingDetails={isLoadingFinancingDetails}
        stageStatus={stageStatus}
        stageStatusDetailKey={stageStatusDetailKey}
        phaseStatusKey={phaseStatusKey}
        updateDate={updateDate}
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('CreditAnalysisView')).toBeTruthy();
    expect(testRenderer.getByTestId('canceledPhase')).toBeTruthy();
    expect(testRenderer.getByTestId('canceledIcon')).toBeTruthy();
  });

  it('should have pendency values stages for CreditAnalysis phase', async () => {
    isLoadingFinancingDetails = false;
    stageStatus = 'pendency';
    stageStatusDetailKey = 'ContractProcessOpened';
    phaseStatusKey = 'CreditAnalysis';
    updateDate = '';
    const testRenderer = render(
      <FinancingDetailsCard
        isLoadingFinancingDetails={isLoadingFinancingDetails}
        stageStatus={stageStatus}
        stageStatusDetailKey={stageStatusDetailKey}
        phaseStatusKey={phaseStatusKey}
        updateDate={updateDate}
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('CreditAnalysisView')).toBeTruthy();
    expect(testRenderer.getByTestId('pendencyPhase')).toBeTruthy();
    expect(testRenderer.getByTestId('pendencyIcon')).toBeTruthy();
  });

  it('should have in progress values stages for DocumentAndWarrantyAnalysis phase', async () => {
    isLoadingFinancingDetails = false;
    stageStatus = 'inProgress';
    stageStatusDetailKey = 'ContractDocumentsAndWarrantyInAnalysis';
    phaseStatusKey = 'DocumentAndWarrantyAnalysis';
    updateDate = '';
    const testRenderer = render(
      <FinancingDetailsCard
        isLoadingFinancingDetails={isLoadingFinancingDetails}
        stageStatus={stageStatus}
        stageStatusDetailKey={stageStatusDetailKey}
        phaseStatusKey={phaseStatusKey}
        updateDate={updateDate}
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('DocumentAndWarrantyAnalysisView')).toBeTruthy();
    expect(testRenderer.getByTestId('phaseConcluded')).toBeTruthy();
    expect(testRenderer.getByTestId('concludedIcon')).toBeTruthy();
    expect(testRenderer.getByTestId('phaseInProgress')).toBeTruthy();
    expect(testRenderer.getByTestId('inProgressIcon')).toBeTruthy();
  });

  it('should have pendency values stages for DocumentAndWarrantyAnalysis phase', async () => {
    isLoadingFinancingDetails = false;
    stageStatus = 'pendency';
    stageStatusDetailKey = 'ContractContractingPendency';
    phaseStatusKey = 'DocumentAndWarrantyAnalysis';
    updateDate = '';
    const testRenderer = render(
      <FinancingDetailsCard
        isLoadingFinancingDetails={isLoadingFinancingDetails}
        stageStatus={stageStatus}
        stageStatusDetailKey={stageStatusDetailKey}
        phaseStatusKey={phaseStatusKey}
        updateDate={updateDate}
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('DocumentAndWarrantyAnalysisView')).toBeTruthy();
    expect(testRenderer.getByTestId('phaseConcluded')).toBeTruthy();
    expect(testRenderer.getByTestId('concludedIcon')).toBeTruthy();
    expect(testRenderer.getByTestId('pendencyPhase')).toBeTruthy();
    expect(testRenderer.getByTestId('pendencyIcon')).toBeTruthy();
  });

  it('should have in progress values stages for ContractEmission phase', async () => {
    isLoadingFinancingDetails = false;
    stageStatus = 'inProgress';
    stageStatusDetailKey = 'ContractFormalizationInProgress';
    phaseStatusKey = 'ContractEmission';
    updateDate = '';
    const testRenderer = render(
      <FinancingDetailsCard
        isLoadingFinancingDetails={isLoadingFinancingDetails}
        stageStatus={stageStatus}
        stageStatusDetailKey={stageStatusDetailKey}
        phaseStatusKey={phaseStatusKey}
        updateDate={updateDate}
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('ContractEmissionView')).toBeTruthy();
    const phaseConcluded = testRenderer.getAllByTestId('phaseConcluded');
    expect(phaseConcluded).toHaveLength(2);
    const phaseConcludedIcon = testRenderer.getAllByTestId('concludedIcon');
    expect(phaseConcludedIcon).toHaveLength(2);
    expect(testRenderer.getByTestId('phaseInProgress')).toBeTruthy();
    expect(testRenderer.getByTestId('inProgressIcon')).toBeTruthy();
  });

  it('should have in progress values stages for InvoicingAuthorization phase', async () => {
    isLoadingFinancingDetails = false;
    stageStatus = 'inProgress';
    stageStatusDetailKey = 'ContractInvoicingDone';
    phaseStatusKey = 'InvoicingAuthorization';
    updateDate = '';
    const testRenderer = render(
      <FinancingDetailsCard
        isLoadingFinancingDetails={isLoadingFinancingDetails}
        stageStatus={stageStatus}
        stageStatusDetailKey={stageStatusDetailKey}
        phaseStatusKey={phaseStatusKey}
        updateDate={updateDate}
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('InvoicingAuthorizationView')).toBeTruthy();
    const phaseConcluded = testRenderer.getAllByTestId('phaseConcluded');
    expect(phaseConcluded).toHaveLength(3);
    const phaseConcludedIcon = testRenderer.getAllByTestId('concludedIcon');
    expect(phaseConcludedIcon).toHaveLength(3);
    expect(testRenderer.getByTestId('phaseInProgress')).toBeTruthy();
    expect(testRenderer.getByTestId('inProgressIcon')).toBeTruthy();
  });

  it('should have pendency values stages for InvoicingAuthorization phase', async () => {
    isLoadingFinancingDetails = false;
    stageStatus = 'pendency';
    stageStatusDetailKey = 'ContractInvoicingPendency';
    phaseStatusKey = 'InvoicingAuthorization';
    updateDate = '';
    const testRenderer = render(
      <FinancingDetailsCard
        isLoadingFinancingDetails={isLoadingFinancingDetails}
        stageStatus={stageStatus}
        stageStatusDetailKey={stageStatusDetailKey}
        phaseStatusKey={phaseStatusKey}
        updateDate={updateDate}
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('InvoicingAuthorizationView')).toBeTruthy();
    const phaseConcluded = testRenderer.getAllByTestId('phaseConcluded');
    expect(phaseConcluded).toHaveLength(3);
    const phaseConcludedIcon = testRenderer.getAllByTestId('concludedIcon');
    expect(phaseConcludedIcon).toHaveLength(3);
    expect(testRenderer.getByTestId('pendencyPhase')).toBeTruthy();
    expect(testRenderer.getByTestId('pendencyIcon')).toBeTruthy();
  });

  it('should have in progress values stages for ResourceRelease phase', async () => {
    isLoadingFinancingDetails = false;
    stageStatus = 'inProgress';
    stageStatusDetailKey = 'ContractEquipmentPaymentRequest';
    phaseStatusKey = 'ResourceRelease';
    updateDate = '';
    const testRenderer = render(
      <FinancingDetailsCard
        isLoadingFinancingDetails={isLoadingFinancingDetails}
        stageStatus={stageStatus}
        stageStatusDetailKey={stageStatusDetailKey}
        phaseStatusKey={phaseStatusKey}
        updateDate={updateDate}
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('ResourceReleaseView')).toBeTruthy();
    const phaseConcluded = testRenderer.getAllByTestId('phaseConcluded');
    expect(phaseConcluded).toHaveLength(4);
    const phaseConcludedIcon = testRenderer.getAllByTestId('concludedIcon');
    expect(phaseConcludedIcon).toHaveLength(4);
    expect(testRenderer.getByTestId('phaseInProgress')).toBeTruthy();
    expect(testRenderer.getByTestId('inProgressIcon')).toBeTruthy();
  });

  it('should have pendency values stages for ResourceRelease phase', async () => {
    isLoadingFinancingDetails = false;
    stageStatus = 'pendency';
    stageStatusDetailKey = 'ContractPendencyRelease';
    phaseStatusKey = 'ResourceRelease';
    updateDate = '';
    const testRenderer = render(
      <FinancingDetailsCard
        isLoadingFinancingDetails={isLoadingFinancingDetails}
        stageStatus={stageStatus}
        stageStatusDetailKey={stageStatusDetailKey}
        phaseStatusKey={phaseStatusKey}
        updateDate={updateDate}
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('ResourceReleaseView')).toBeTruthy();
    const phaseConcluded = testRenderer.getAllByTestId('phaseConcluded');
    expect(phaseConcluded).toHaveLength(4);
    const phaseConcludedIcon = testRenderer.getAllByTestId('concludedIcon');
    expect(phaseConcludedIcon).toHaveLength(4);
    expect(testRenderer.getByTestId('pendencyPhase')).toBeTruthy();
    expect(testRenderer.getByTestId('pendencyIcon')).toBeTruthy();
  });

  it('should have concluded values stages for ResourceRelease phase', async () => {
    isLoadingFinancingDetails = false;
    stageStatus = 'concluded';
    stageStatusDetailKey = 'ContractTotalResourceRelease';
    phaseStatusKey = 'ResourceRelease';
    updateDate = '';
    const testRenderer = render(
      <FinancingDetailsCard
        isLoadingFinancingDetails={isLoadingFinancingDetails}
        stageStatus={stageStatus}
        stageStatusDetailKey={stageStatusDetailKey}
        phaseStatusKey={phaseStatusKey}
        updateDate={updateDate}
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('ResourceReleaseView')).toBeTruthy();
    const phaseConcluded = testRenderer.getAllByTestId('phaseConcluded');
    expect(phaseConcluded).toHaveLength(5);
    const phaseConcludedIcon = testRenderer.getAllByTestId('concludedIcon');
    expect(phaseConcludedIcon).toHaveLength(5);
  });
});
