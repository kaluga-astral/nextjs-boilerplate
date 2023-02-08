import disconnectionImgSrc from 'images/disconnection.svg';
import { ReactNode } from 'react';

import { ContentState } from '@example/shared';

type ContentStateProps = {
  children: ReactNode;
  isError: boolean;
  errorMessage?: string;
  isLoading: boolean;
  isSuccess: boolean;
  onRetryEdit: () => void;
};

export const EditDraftContentState = ({
  isLoading,
  isError,
  errorMessage,
  children,
  isSuccess,
  onRetryEdit,
}: ContentStateProps) => {
  return (
    <ContentState
      isCustom={isSuccess}
      customState={{
        title: 'Заявка успешно изменена',
        imgSrc: disconnectionImgSrc,
        imgAlt: 'Вынутая розетка',
        description: 'Через 3 сек. вы будете переведены на список заявок',
      }}
      errorState={{
        title: 'Произошла ошибка',
        errorList: [errorMessage as string],
        imgSrc: disconnectionImgSrc,
        imgAlt: 'Вынутая розетка',
        onRetry: onRetryEdit,
      }}
      isError={isError}
      isLoading={isLoading}
    >
      {children}
    </ContentState>
  );
};
