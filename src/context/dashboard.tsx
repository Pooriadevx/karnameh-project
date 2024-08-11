import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { DashboardCtxType, UserType } from "../types/dashboard";
import { toast } from "react-toastify";

export const DashboardCtx = createContext<DashboardCtxType | null>(null);

const DashboardProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [list, setList] = useState<UserType[] | null>(null);
  const [modalData, setModalData] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(process.env.REACT_APP_API_URL as string)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
      })
      .then((res) => setList(res))
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DashboardCtx.Provider value={{ list, setModalData, modalData, loading }}>
      {children}
    </DashboardCtx.Provider>
  );
};

export default DashboardProvider;
