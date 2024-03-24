export type ApiUser = {
  id: number;
  active: boolean;
  balance: number;
  currency: string;
  currencyId: number;
  isHaveFirstDeposit: boolean;
  isPaymentSystemUser: boolean;
  isVerificated: boolean;
  login: string;
  permission: {
    canAddSameRole: boolean;
    canTransaction: boolean;
    canCreateRoles: null | string;
  };
  role: string;
  roleId: number;
  secondLifeBonusBalance: number;
  statusId: null | string;
};

export type AuthRequest = {
  login: string;
  password: string;
};
