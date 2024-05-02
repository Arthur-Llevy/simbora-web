type User = {
  id: number;
  name: string;
  email: string;
  password: number;
  type: string;
  eventsAttended: number;
  eventsCreated: number;
  phone: number;
  events: {
    id: number;
    name: string;
    localization: string;
    type: string;
    date: number;
    startsAt: number;
    endsAt: number;
  }[];
}

type UserData = {
  user: User;
}

type UserDataContextType = {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

export type { User, UserData, UserDataContextType }