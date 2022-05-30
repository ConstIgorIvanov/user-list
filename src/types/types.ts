export type user = {
  id: number;
  name: string;
  username: string;
  address: { street: string; city: string; zipcode: string };
  company: {
    name: string;
  };
  phone: string;
  website: string;
  email: string;
};
