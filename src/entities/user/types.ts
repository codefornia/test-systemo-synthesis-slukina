import { ApiUser } from '@shared/api/bet4skill';

export type User = Pick<ApiUser, 'id' | 'balance' | 'currency'>;
