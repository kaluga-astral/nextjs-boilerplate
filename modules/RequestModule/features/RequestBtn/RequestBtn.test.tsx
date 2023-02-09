import { useEffect, useRef } from 'react';

import { renderWithTheme, screen } from '@example/shared/_tests';

import { RequestBtn } from './RequestBtn';

describe('RequestBtn', () => {
  it('Props:ref: is present', () => {
    const resultRef = { current: null };

    const ButtonWithRef = () => {
      const ref = useRef(null);

      useEffect(() => {
        resultRef.current = ref.current;
      }, []);

      return <RequestBtn ref={ref}>Btn</RequestBtn>;
    };

    renderWithTheme(<ButtonWithRef />);
    expect(resultRef?.current).not.toBeNull();
  });

  it('Props:disabled: блокирует кнопку', () => {
    renderWithTheme(<RequestBtn disabled>Btn</RequestBtn>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('Props:loading: блокирует кнопку', () => {
    renderWithTheme(<RequestBtn loading>Btn</RequestBtn>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('Props:loading: отображается лоадер', () => {
    renderWithTheme(<RequestBtn loading>Btn</RequestBtn>);

    const loader = screen.getByRole('progressbar');

    expect(loader).toBeVisible();
  });
});
