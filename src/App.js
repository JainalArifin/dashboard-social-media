import { ROUTES } from "./configs";
import { Routes, Route, Navigate } from "react-router-dom";
import { Users } from "~/pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.USERS()} />} />
      <Route path={ROUTES.USERS()} element={<Users />} />
    </Routes>
  );
}

export default App;
