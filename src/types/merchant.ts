export interface Merchant {
  id: number;
  name: string;
  code: string;
  category: string;
  network: string;
  city: string;
  country: string;
  lastUpdated: string;
  status: string;
  [key: string]: unknown; // <-- this allows any other keys as well
}
