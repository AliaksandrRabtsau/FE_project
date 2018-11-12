export interface User {
  id: number;
  name: string;
  age: number;
  password: string;
  dateOfBirth: Date;
  dateOfFirstLogin: Date;
  dateOfNextNotification: Date;
  information: string;
  admin: string;
}
