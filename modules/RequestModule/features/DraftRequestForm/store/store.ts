import { makeAutoObservable } from 'mobx';

import { validationService } from '@example/shared';

import { TariffFormAutocompleteValue } from '../../TariffFormAutocomplete';
import { DraftRequestStage } from '../enums';

export type TariffStageValues = {
  tariff: TariffFormAutocompleteValue;
};

export type RequestInfoStageValues = {
  description: string;
};

export type DraftRequestFormValues = TariffStageValues & RequestInfoStageValues;

const REQUEST_INFO_STAGE_VALIDATION_SCHEMA = {
  description: validationService.string().required('Обязательное поле'),
};

const TARIFF_STAGE_VALIDATION_SCHEMA = {
  tariff: validationService.object().required('Обязательное поле'),
};

type Handlers = {
  onFinishSubmit: (values: DraftRequestFormValues) => Promise<void>;
};

export class DraftRequestFormStore {
  public currentStage = DraftRequestStage.tariff;

  public isLastStage = false;

  // TODO: сделать типизацию для схем валидаций. Избавиться от any
  // eslint-disable-next-line
  public validationSchema: Record<string, any> = TARIFF_STAGE_VALIDATION_SCHEMA;

  /**
   * @description Выбран догорой тариф
   * */
  public isSelectedExpensiveTariff = false;

  public tariffStageValues: TariffStageValues | undefined;

  constructor(private readonly handlers: Handlers) {
    this.handlers = handlers;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private onNextStage = (tariffStageValues: TariffStageValues) => {
    this.isSelectedExpensiveTariff = tariffStageValues.tariff.price > 200;
    this.tariffStageValues = tariffStageValues;
    this.currentStage = DraftRequestStage.info;
    this.isLastStage = true;
    this.validationSchema = REQUEST_INFO_STAGE_VALIDATION_SCHEMA;
  };

  public onSubmitRequest = (
    values: TariffStageValues | DraftRequestFormValues,
  ) => {
    if (!this.isLastStage) {
      this.onNextStage(values);

      return;
    }

    this.handlers.onFinishSubmit(values as DraftRequestFormValues);
  };
}

export const createDraftRequestFormStore = (handlers: Handlers) =>
  new DraftRequestFormStore(handlers);
