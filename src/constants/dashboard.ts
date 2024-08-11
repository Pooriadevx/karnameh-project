import { GridColDef } from "@mui/x-data-grid";
import { UserType } from "../types/dashboard";

export const userColumns: GridColDef<UserType>[] = [
  {
    field: "id",
    headerName: "Id",
    sortable: false,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  {
    field: "username",
    headerName: "UserName",
    flex: 1,
    sortable: false,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    sortable: false,
  },
  {
    field: "website",
    headerName: "Website",
    flex: 1,
    sortable: false,
  },
];
