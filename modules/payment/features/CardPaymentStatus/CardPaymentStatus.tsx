import { ContentState, Placeholder, placeholderImgSrc } from '@example/shared';

export type CardPaymentProps = {
  isLoading: boolean;
  isError: boolean;
  errors?: string[];
  onRetry: () => void;
};

export const CardPaymentStatus = ({
  isLoading,
  errors,
  onRetry,
}: CardPaymentProps) => {
  return (
    <ContentState
      isError={Boolean(errors)}
      isLoading={isLoading}
      errorState={
        errors && {
          errorList: errors,
          // TODO: удалить после фикса бага с required параметром для imgAlt
          imgAlt: 'alt',
          onRetry,
        }
      }
    >
      <Placeholder title="Оплата прошла успешно" imgSrc={placeholderImgSrc} />
    </ContentState>
  );
};
