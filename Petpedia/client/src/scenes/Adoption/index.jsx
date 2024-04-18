import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdoptPostFormBox from "scenes/Boxes/AdoptPostFormBox";
import AdoptPostsBox from "scenes/Boxes/AdoptPostsBox";
import AdoptionNavbar from "scenes/AdoptionNavbar";
import AdBox from "scenes/Boxes/AdBox";
import MarketBox from "scenes/Boxes/MarketBox";


const Adoption = () => {
  const { _id } = useSelector((state) => state.user);
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
      <AdoptionNavbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display="flex"
        justifyContent="space-between"
        flexDirection={isNonMobileScreens ? "row" : "column"}
        alignItems="flex-start"
      >
        {/* Left Column */}
        <Box
          flexBasis={isNonMobileScreens ? "65%" : "100%"}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <AdoptPostFormBox picturePath={user.picturePath} />
          <AdoptPostsBox userId={userId} isProfile />
        </Box>
        
        
        {/* Right Column */}
        {isNonMobileScreens && (
          <Box
            flexBasis="30%"
            mt={isNonMobileScreens ? undefined : "2rem"}
            display="flex"
            flexDirection="column"
            gap="1rem"
          >
            <AdBox />
            <MarketBox userId={_id}/>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Adoption;


