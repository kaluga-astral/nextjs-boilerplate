import {
  FormTextField,
  Typography,
  formatPriceToView,
  useFormContext,
  useFormWatch,
} from '@example/shared';

import { RequestInfoStageValues } from '../../store';

export type RequestInfoStageProps = {
  isShowTariffPrice: boolean;
  tariffPrice: number;
};

export const RequestInfoStage = ({
  isShowTariffPrice,
  tariffPrice,
}: RequestInfoStageProps) => {
  const { control } = useFormContext<RequestInfoStageValues>();

  const description = useFormWatch({ control, name: 'description' });

  return (
    <div>
      <FormTextField name="description" label="Описание" control={control} />
      {isShowTariffPrice && (
        <Typography>{formatPriceToView(tariffPrice)}</Typography>
      )}
      {!description && <Typography>Очень нужно описание</Typography>}
    </div>
  );
};
