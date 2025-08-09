// filepath: /my-react-app/my-react-app/src/types/index.ts
export interface User {
  id: string;
  username: string;
  password: string;
  role: Role;
}

export type Role = 'admin' | 'user';

export interface UserManagement {
  users: User[];
  addUser: (user: User) => void;
  editUser: (id: string, updatedUser: Partial<User>) => void;
  deleteUser: (id: string) => void;
}