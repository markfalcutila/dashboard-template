export interface UserManagement {
  id: number;
  firstName: string;
  LastName: string;
  email: string;
  mobileNumber: string;
  username: string;
  password: string;
  role: string;
  status: string;
  [key: string]: unknown; // <-- this allows any other keys as well
}
