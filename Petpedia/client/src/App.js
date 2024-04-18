import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import Marketplace from "scenes/MarketPlace";
import Adoption from "scenes/Adoption";
import Gallerypage from "scenes/Gallerypage";
import Header from "scenes/landing_page/Header";
import Feature from "scenes/landing_page/Feature";
import Login from "scenes/landing_page/LoginSignUp";
import About from "scenes/landing_page/About";
import Contact from "scenes/landing_page/Contact";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Feature />
                  <Login/>
                  <About />
                  <Contact />
                </>
              }
            />
            <Route path="/signup" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
            <Route
              path="/marketplace/:userId"
              element={isAuth ? <Marketplace /> : <Navigate to="/" />}
            />
            <Route
              path="/adoption/:userId"
              element={isAuth ? <Adoption/> : <Navigate to="/" />}
            />
            <Route
              path="/gallery/:userId"
              element={isAuth ? <Gallerypage/> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
