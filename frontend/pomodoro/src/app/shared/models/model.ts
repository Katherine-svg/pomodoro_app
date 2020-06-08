export enum Role {
    User = 'User',
    Admin = 'Admin'
  }

  export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: string;
    token?: string;
}