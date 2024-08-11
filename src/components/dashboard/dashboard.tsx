import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { DashboardCtx } from "../../context/dashboard";
import Table from "../table/table";
import { DashboardCtxType } from "../../types/dashboard";
import Modal from "../modal";

const Dashboard: React.FC = () => {
  const { modalData, list } = useContext(DashboardCtx) as DashboardCtxType;

  return (
    <Grid container direction="column" minHeight={480}>
      <Table list={list || []} />
      {modalData && <Modal />}
    </Grid>
  );
};

export default Dashboard;
