// eslint-disable-next-line import/no-extraneous-dependencies
import { MemoryRouter } from 'next-router-mock';

import type { Router } from '../services';

export const createRouterMock = () => new MemoryRouter() as unknown as Router;
