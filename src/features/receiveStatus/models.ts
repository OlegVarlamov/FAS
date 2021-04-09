export interface OrderState {
  isLoading: boolean;
  order?: OrderDetails;
  error?: SerializedError;
}

export interface OrderDetails {
  id: number;
  currency_in: Currencies;
  currency_out: Currencies;
  amount_in: number;
  precision_in: number;
  amount_out: number;
  precision_out: number;
  created_at: number;
  timeout: number;
  rate: number;
  rate_precision: number;
  rate_type: number;
  address: string;
  status: OrderStatuses;
  confirmations_need: number;
  confirmations_have: number;
  can_refund: number;
  rest_amount: number;
  transactions: TransactionDetails[];
}

export interface TransactionDetails {
  timestamp: number;
  amount: number;
  settings_id: number;
  txid: string;
  confirmations_need: number;
  confirmations_have: number;
  type: TransactionTypes;
  account_number: string;
}

export enum Currencies {
  BTC = "BTC",
  EUR = "EUR",
  USD = "USD",
  CZK = "CZK",
}

export interface SerializedError {
  field?: string;
  message?: string;
}

export enum TransactionTypes {
  "Deposit" = 1,
  "Withdraw",
}

export enum OrderStatuses {
  "New" = 1,
  "In progress",
  "Canceled",
  "Completed",
  "Waiting for payment",
}
