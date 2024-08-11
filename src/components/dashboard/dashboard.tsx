import React, { useContext, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { DashboardCtx } from "../../context/dashboard";
import Table from "../table/table";
import { DashboardCtxType } from "../../types/dashboard";
import Modal from "../modal";

const Dashboard: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const { modalData, list } = useContext(DashboardCtx) as DashboardCtxType;

  const currentList = !!list
    ? list.filter(
        (user) =>
          user.name.toLowerCase().includes(value.toLowerCase()) ||
          user.email.toLowerCase().includes(value.toLowerCase())
      )
    : [];

  return (
    <Grid container direction="column" minHeight={480}>
      <Grid item margin={2}>
        <TextField
          placeholder="search..."
          value={value}
          size="small"
          spellCheck
          onChange={({ target }) => setValue(target.value)}
        />
      </Grid>
      <Table list={currentList} />
      {modalData && <Modal />}
    </Grid>
  );
};

export default Dashboard;
