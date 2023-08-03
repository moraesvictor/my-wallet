import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../views/Dashboard";
import { List } from "../views/List";
import { Layout } from "../components/Layout";

export const AppRoutes = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/list/:type" element={<List />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
