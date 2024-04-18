import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MarketPostFormBox from "scenes/Boxes/MarketPostFormBox";
import MarketPostsBox from "scenes/Boxes/MarketPostsBox";
import MarketNavbar from "scenes/MarketNavbar";
import AdBox from "scenes/Boxes/AdBox";
import AdoptBox from "scenes/Boxes/AdoptBox";

const Marketplace = () => {
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
      <MarketNavbar />
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
          <MarketPostFormBox picturePath={user.picturePath} />
          <MarketPostsBox userId={userId} isProfile />
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
            <AdoptBox userId={_id}/>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Marketplace;


