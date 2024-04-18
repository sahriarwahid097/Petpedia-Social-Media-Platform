import {
  EditOutlined,
  DeleteOutlined,
  ImageOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
} from "@mui/material";
import Layout from "components/Layout";
import Dropzone from "react-dropzone";
import UserImage from "components/UserImage";
import LayoutWrap from "components/LayoutWrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";


const GalleryPostFormBox = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
    window.alert("Post successful!");
    window.location.reload();
  };

  return (
    <LayoutWrap>
      <Layout gap="1.5rem">
        <UserImage image={picturePath} />
      </Layout>
      {isImage && (
        <Box
          width="100%"
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <Layout gap="1rem" {...getRootProps()} border={`2px dashed ${palette.primary.main}`} p="1rem" sx={{ "&:hover": { cursor: "pointer" } }}>
                <input {...getInputProps()} />
                {!image ? (
                  <Typography>Add Image Here</Typography>
                ) : (
                  <Layout gap="1rem">
                    <Typography>{image.name}</Typography>
                    <EditOutlined />
                  </Layout>
                )}
                {image && (
                  <IconButton onClick={() => setImage(null)} sx={{ width: "15%" }}>
                    <DeleteOutlined />
                  </IconButton>
                )}
              </Layout>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: "1.25rem 0" }} />

      <Layout gap="1.5rem">
        <Layout gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography color={mediumMain} sx={{ "&:hover": { cursor: "pointer", color: medium } }}>
            Image
          </Typography>
        </Layout>
        <Button
          onClick={handlePost}
          sx={{
            color: "white",
            backgroundColor: 'green',
            borderRadius: "3rem",
          }}
        >
          POST
        </Button>
      </Layout>
    </LayoutWrap>
  );
};

export default GalleryPostFormBox;
