import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import Sidebar from "./components/SideBar.jsx";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "https://we-track-api.vercel.app/api/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      {/* <Sidebar /> */}
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
