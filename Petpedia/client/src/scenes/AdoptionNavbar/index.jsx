import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode as setAppMode, setLogout as logoutUser } from "state";
import { useNavigate } from "react-router-dom";
import Layout from "components/Layout";


const AdoptionNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const isDesktopView = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const lightColor = theme.palette.neutral.light;
  const darkColor = theme.palette.neutral.dark;
  const bgColor = theme.palette.background.default;// eslint-disable-next-line
  const primaryColor = theme.palette.primary.light;
  const altBgColor = theme.palette.background.alt;

  const fullName = `${userState.firstName} ${userState.lastName}`;

  const handleAppModeToggle = () => {
    dispatch(setAppMode());
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Layout padding="1rem 6%" backgroundColor={altBgColor}>
      <Layout gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="pink"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: "green",
              cursor: "pointer",
            },
          }}
        >
          Adoption
        </Typography>
        {isDesktopView && (
          <Layout
            backgroundColor={lightColor}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </Layout>
        )}
      </Layout>

      {isDesktopView ? (
        <Layout gap="2rem">
          <IconButton onClick={handleAppModeToggle}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: darkColor, fontSize: "25px" }} />
            )}
          </IconButton>
          <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: lightColor,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: lightColor,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </Layout>
      ) : (
        <IconButton onClick={handleMenuToggle}>
          <Menu />
        </IconButton>
      )}

      {!isDesktopView && isMobileMenuOpen && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={bgColor}
        >
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton onClick={handleMenuToggle}>
              <Close />
            </IconButton>
          </Box>
          <Layout
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton onClick={handleAppModeToggle} sx={{ fontSize: "25px" }}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: darkColor, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: lightColor,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: lightColor,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Select>
            </FormControl>
          </Layout>
        </Box>
      )}
    </Layout>
  );
};

export default AdoptionNavbar;



