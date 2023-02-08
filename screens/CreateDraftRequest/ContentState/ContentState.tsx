import disconnectionImgSrc from 'images/disconnection.svg';
import { ReactNode } from 'react';

import { ContentState } from '@example/shared';

type ContentStateProps = {
  children: ReactNode;
  isError: boolean;
  errorMessage?: string;
  isLoading: boolean;
  isSuccess: boolean;
  onRetryCreate: () => void;
};

export const CreateDraftContentState = ({
  isLoading,
  isError,
  errorMessage,
  children,
  isSuccess,
  onRetryCreate,
}: ContentStateProps) => {
  return (
    <ContentState
      isCustom={isSuccess}
      customState={{
        title: 'Заявка успешно создана',
        imgSrc: disconnectionImgSrc,
        imgAlt: 'Вынутая розетка',
        description:
          'Через 3 сек. вы будете переведены на редактирование заявки',
      }}
      errorState={{
        title: 'Произошла ошибка',
        errorList: [errorMessage as string],
        imgSrc: disconnectionImgSrc,
        imgAlt: 'Вынутая розетка',
        onRetry: onRetryCreate,
      }}
      isError={isError}
      isLoading={isLoading}
    >
      {children}
    </ContentState>
  );
};
