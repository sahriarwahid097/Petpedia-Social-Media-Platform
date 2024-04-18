
import LayoutWrap from "components/LayoutWrap";
const GalleryPostBox = ({
  picturePath,
}) => {
  return (
    <LayoutWrap m="2rem 0">
      {picturePath && (
        <img
          width="100%"
          height="80%"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}
    </LayoutWrap>
  );
};

export default GalleryPostBox;
