import React from "react";
import Dashboard from "./components/dashboard/dashboard";
import DashboardProvider from "./context/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <DashboardProvider>
        <Dashboard />
      </DashboardProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
