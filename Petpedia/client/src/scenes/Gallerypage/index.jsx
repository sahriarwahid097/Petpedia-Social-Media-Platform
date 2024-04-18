import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GalleryNavbar from "scenes/GalleryNavber";
import GalleryPostFormBox from "scenes/Boxes/GalleryPostFormBox";
import GalleryPostsBox from "scenes/Boxes/GalleryPostsBox";


const Gallery = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

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

  if (!user) return null;

  return (
    <Box>
      <GalleryNavbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display="flex"
        justifyContent="space-between"
        flexDirection={isNonMobileScreens ? "row" : "column"}
        alignItems="center"
      >
      </Box> 
        {isNonMobileScreens && (
        <Box
        flexBasis="80%"
        mt={isNonMobileScreens ? undefined : "2rem"}
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gap="1rem"
          >
            <GalleryPostsBox userId={userId} isProfile />
        </Box>
        
        )}
    </Box>
  );
};

export default Gallery;




