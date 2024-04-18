import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserInfoBox from "scenes/Boxes/UserInfoBox";
import FriendListBox from "scenes/Boxes/FriendListBox";
import PostFormBox from "scenes/Boxes/PostFormBox";
import PostsBox from "scenes/Boxes/PostsBox";
import AdBox from "scenes/Boxes/AdBox";
import MarketBox from "scenes/Boxes/MarketBox";
import AdoptBox from "scenes/Boxes/AdoptBox";
import Gallery from "scenes/Boxes/Gallery";


const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserInfoBox userId={_id} picturePath={picturePath} />
          <Box m="2rem 0" />
          <FriendListBox userId={_id} />
          <Box m="2rem 0" />
          <Gallery userId={_id}/>
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <PostFormBox picturePath={picturePath} />
          <PostsBox userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            < AdBox />
            <Box m="2rem 0" />
            <MarketBox userId={_id} />
            <Box m="2rem 0" />
            <AdoptBox userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
