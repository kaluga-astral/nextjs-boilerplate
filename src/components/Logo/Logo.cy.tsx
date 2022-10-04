import { Logo } from './Logo';

describe('Logo.cy.ts', () => {
  it('mount', () => {
    cy.mount(<Logo />);
  });
});
