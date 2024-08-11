import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DashboardCtx } from "../../context/dashboard";
import { DashboardCtxType, TablePropsType } from "../../types/dashboard";
import { userColumns } from "../../constants/dashboard";
import classes from "./table.module.css";

const Table: React.FC<TablePropsType> = ({ list }) => {
  const { setModalData, loading } = useContext(
    DashboardCtx
  ) as DashboardCtxType;

  return (
    <DataGrid
      disableColumnMenu
      disableColumnResize
      onRowClick={({ row }) => setModalData(row)}
      rows={list}
      columns={userColumns}
      initialState={{
        pagination: {
          paginationModel: { pageSize: 5 },
        },
      }}
      classes={{
        row: classes.row,
        cell: classes.cell,
        columnHeader: classes.columnHeader,
      }}
      pageSizeOptions={[5]}
      rowSelection={false}
      loading={loading}
    />
  );
};

export default Table;
