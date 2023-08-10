import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "../views/Dashboard";
import { List } from "../views/List";
import { Layout } from "../components/Layout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/list/:type" element={<List />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
