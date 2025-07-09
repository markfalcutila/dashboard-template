export interface MerchantModel {
  id: number;
  code: string;
  name: string;
  isEnabled: boolean;
  merchantPaymentMethods?: any[];
}

export interface CreateMerchantInputModel {
  code: string;
  name: string;
  successUrl: string;
  failUrl: string;
  webhook: string;
  isWebhookEnabled: boolean;
  isEnabled: boolean;
}

export interface UpdateMerchantInputModel {
  code: string;
  name: string;
  successUrl?: any;
  failUrl?: any;
  merchantLogoUrl?: any;
  webhook?: any;
  isWebhookEnabled?: any;
  isEnabled: boolean;
}
