import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogContent, Typography } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import MapLeaflet from "./map";
import { DashboardCtx } from "../context/dashboard";
import { DashboardCtxType, UserType } from "../types/dashboard";

const Modal: React.FC = () => {
  const { modalData, setModalData } = useContext(
    DashboardCtx
  ) as DashboardCtxType;

  const { address, company, email, name, phone, username, website } =
    modalData as UserType;

  return (
    <Dialog open={!!modalData} onClose={() => setModalData(null)}>
      <DialogTitle>User Detail</DialogTitle>
      <DialogContent dividers>
        <Typography variant="h5" gutterBottom>
          {name}
        </Typography>
        <Typography gutterBottom>Email: {username}</Typography>
        <Typography gutterBottom>Email: {email}</Typography>
        <Typography gutterBottom>Phone: {phone}</Typography>
        <Typography gutterBottom>Website: {website}</Typography>
        <Typography gutterBottom>Company: {company.name}</Typography>
        <Typography gutterBottom>
          Address:
          {`${address.street}, ${address.city}, ${address.zipcode}`}
        </Typography>
        <div style={{ height: 150 }}>
          <MapLeaflet
            position={[Number(address.geo.lat), Number(address.geo.lng)]}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
