import {
  Routes,
  Route
} from "react-router-dom";
import AuthLayOut from "./components/auth-layout/AuthLayout";
import authRoutes from "./routes/auth.routes";
import Login from "./pages/auth/login.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayOut />}>
        {
          authRoutes.map(({ path, element, index }) => {
            const Element = element;
            if (index) {
              return (
                <Route
                  index
                  key={path}
                  path={path}
                  element={<Element />}
                />

              )
            } else {
              return (
                <Route
                  key={path}
                  path={path}
                  element={<Element />}
                />

              )
            }

          })
        }
      </Route>
      <Route path="auth/login" element={<Login />} />
    </Routes >
  )
}

export default App;
