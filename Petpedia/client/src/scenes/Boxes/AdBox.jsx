import { Typography, useTheme } from "@mui/material";
import Layout from "components/Layout";
import LayoutWrap from "components/LayoutWrap";

const AdBox = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <LayoutWrap>
      <Layout>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </Layout>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/ads.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <Layout>
        <Typography color={main}>Bestbuy Catfood</Typography>
        <Typography color={medium}>bestbuy.com</Typography>
      </Layout>
      <Typography color={medium} m="0.5rem 0">
      The purr-fect blend of nutrition and affordability, 
      ensuring your feline friend stays healthy 
      and happy without breaking the bank.
      </Typography>
    </LayoutWrap>
  );
};

export default AdBox;
