import { createQueryClient } from '@astral/react-query';

export const queryClient = createQueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
