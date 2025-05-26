export interface Transaction {
  id: number;
  transactionId: string;
  amount: number;
  status: string;
  datePaid: string;
  cardNetwork: string;
  transactionType: string;
  [key: string]: unknown; // <-- this allows any other keys as well
}
