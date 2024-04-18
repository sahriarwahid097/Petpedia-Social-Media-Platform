import { Typography, useTheme } from "@mui/material";
import Layout from "components/Layout";
import LayoutWrap from "components/LayoutWrap";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MarketBox = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }
  
  return (
    <LayoutWrap>
      <Layout>
        <Typography color={dark} variant="h5" fontWeight="500">
          Marketplace
        </Typography>
        <Typography color={medium} sx={{ textDecoration: 'underline', cursor: 'pointer' }} 
        onClick={() => navigate(`/marketplace/${userId}`)}>Visit</Typography>
      </Layout>
      <img
        width="100%"
        height="auto"
        alt="marketplace"
        src="http://localhost:3001/assets/market.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <Layout>
        <Typography color={main}>Petpedia Marketplace</Typography>
        <Typography color={medium}>petpedia.com</Typography>
      </Layout>
      <Typography color={medium} m="0.5rem 0">
      Welcome to PetPedia Marketplace - your hub for 
      top-quality pet food and accessories! Find everything 
      your furry friends need.
      </Typography>
    </LayoutWrap>
  );
};

export default MarketBox;
