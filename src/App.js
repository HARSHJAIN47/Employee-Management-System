import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/Authentication/Login/LoginPage";
import DashBoard from "./Components/DashBoard";
import ErrorPage from "./Components/ErrorPage";
import Protected from "./Components/Authentication/Protected";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          exact
          element={
            <Protected>
              <DashBoard />
            </Protected>
          }
        />
        <Route path="/" exact element={<LoginPage />} />
        <Route path="*" exact element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
