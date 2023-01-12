import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";

const BrandingWrapper = styled(Box)(({ theme }) => ({
  height: "70vh",
  backgroundColor: "#dedede",
  // padding: theme.spacing(4), //* padding:4 * 8px
  padding: "2rem",
  margin: "4rem 0",
  clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)", //https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8rem",
}));

const Branding = () => {
  return (
    <BrandingWrapper>
      <Stack spacing={2} sx={{ width: "50%" }}>
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            lineHeight: "1.2",
            fontFamily: "georgia",
            // wordSpacing: "1rem",
          }}
        >
          Lets Grow Your Brand <br /> To The Next Level
        </Typography>
        <Typography>
          Define your brand's unique value proposition: Clearly communicate the
          unique value that your brand offers to customers, and use it as the
          foundation for all of your marketing efforts.
        </Typography>
        <Button sx={{ width: "50%", textTransform: "capitalize" }}>
          Hire Us
        </Button>
      </Stack>
      <Box sx={{ width: "50%", display: ["none", "none", "block"] }}>
        <img src="https://picsum.photos/id/5/1200" width="100%" />
      </Box>
    </BrandingWrapper>
  );
};

export default Branding;
