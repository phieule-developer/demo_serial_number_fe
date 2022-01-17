import {
  Routes,
  Route
} from "react-router-dom";
import PageLayout from "./components/page-layout/page-layout.jsx";
import authRoutes from "./routes/auth.routes";
import Login from "./pages/auth/login.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout></PageLayout>}>
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
