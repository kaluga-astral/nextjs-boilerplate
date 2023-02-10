import { useRouter as useNextRouter } from 'next/router';

import { Router } from '../../../services';

// Так как singleton роутера был модифицирован, то хук должен возвращать актуальный тип
export const useRouter = (): Router => useNextRouter() as Router;
