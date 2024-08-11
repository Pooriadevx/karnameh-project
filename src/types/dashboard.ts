export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
};

type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};

type GeoType = {
  lat: string;
  lng: string;
};

type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type DashboardCtxType = {
  list: UserType[] | null;
  setModalData: React.Dispatch<React.SetStateAction<UserType | null>>;
  modalData: UserType | null;
  loading: boolean;
};

export type TablePropsType = { list: UserType[] };
