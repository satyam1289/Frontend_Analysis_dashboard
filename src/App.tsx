import { Routes, Route, Navigate } from "react-router-dom";
import { Auth } from "./components/auth/Auth";
import { Dashboard } from "./Dashboard";

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
