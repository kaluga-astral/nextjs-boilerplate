import { Router } from '@tanstack/react-router';

export * as v from '@astral/validations';

export { notify } from '@astral/ui';

// eslint-disable-next-line import/no-extraneous-dependencies
export { fakerRU as faker } from '@faker-js/faker';

const router = new Router({});

export { router, Router };
