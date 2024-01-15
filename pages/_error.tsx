import errorPlaceholderImg from '@example/shared/images/error-placeholder.png';
import { Placeholder } from '@example/shared';

export const ErrorPage = () => {
  return <Placeholder title="Произошла ошибка" imgSrc={errorPlaceholderImg} />;
};

export default ErrorPage;
