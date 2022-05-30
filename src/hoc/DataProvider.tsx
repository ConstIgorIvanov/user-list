import React from 'react';
import { user } from '../types/types';

export const DataContext = React.createContext<DataContextInterface>(null!);

export interface DataContextInterface {
  users: user[] | null;
  setUsers: React.Dispatch<React.SetStateAction<user[] | null>>;
  findCurrent: (id: number) => void;
  setCurrentUser: React.Dispatch<React.SetStateAction<user | null>>;
  currentUser: user | null;
  sortSity: () => void;
  sortCompany: () => void;
}

export const DataProvider = ({ children }: React.ReactNode | any) => {
  const [users, setUsers] = React.useState<user[] | null>(null);
  const [currentUser, setCurrentUser] = React.useState<user | null>(null);

  const findCurrent = (id: number) => {
    if (users) {
      const current = users.find((user) => user.id === id);
      if (current) {
        setCurrentUser(current);
      }
    }
  };

  const sortSity = () => {
    if (users) {
      const newUsers: user[] = JSON.parse(JSON.stringify(users));
      newUsers.sort((a: user, b: user) => (a.address.city > b.address.city ? 1 : -1));
      setUsers(newUsers);
    }
  };
  const sortCompany = () => {
    if (users) {
      const newUsers: user[] = JSON.parse(JSON.stringify(users));
      newUsers.sort((a: user, b: user) => (a.company.name > b.company.name ? 1 : -1));
      setUsers(newUsers);
    }
  };
  const value: DataContextInterface = {
    users,
    setUsers,
    findCurrent,
    setCurrentUser,
    currentUser,
    sortSity,
    sortCompany,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
