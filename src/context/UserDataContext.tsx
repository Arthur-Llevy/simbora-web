import { createContext, useState, ReactNode } from 'react';
import { UserData, UserDataContextType } from './userDataContextTypes';

const initialUserData: UserData = {
  user: {
    id: 0,
    name: '',
    email: '',
    password: 0,
    type: '',
    eventsAttended: 0,
    eventsCreated: 0,
    phone: 0,
    events: [
      {
        id: 0,
        name: '',
        localization: '',
        type: '',
        date: 0,
        startsAt: 0,
        endsAt: 0,
      },
    ],
  },
};

export const UserDataContext = createContext<UserDataContextType>({
  userData: initialUserData,
  setUserData: () => {},
});

export const UserDataProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>(initialUserData);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
