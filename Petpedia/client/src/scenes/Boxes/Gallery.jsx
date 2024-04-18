import { Typography, useTheme } from "@mui/material";
import Layout from "components/Layout";
import LayoutWrap from "components/LayoutWrap";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Gallery = ({ userId, picturePath }) => {
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
          Gallery
        </Typography>
        <Typography color={medium} sx={{ textDecoration: 'underline', cursor: 'pointer' }} 
        onClick={() => navigate(`/gallery/${userId}`)}>See More</Typography>
      </Layout>
      <img
        width="100%"
        height="auto"
        alt="marketplace"
        src="http://localhost:3001/assets/gallery.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <Layout>
        <Typography color={main}>Take a glance at your  gallery</Typography>
      </Layout>
      <Typography color={medium} m="0.5rem 0">
      Your gallery collectively keeps track of the photos you share.
      You can browse through your gallery to look back at your precious moments.
      </Typography>
    </LayoutWrap>
  );
};

export default Gallery;
