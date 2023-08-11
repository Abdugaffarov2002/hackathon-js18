import React from "react";
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

//-------------------------------------------------------------------------//
const SocialMediaWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .MuiIconButton-root": {
    margin: theme.spacing(0, 1),
  },
  marginBottom: theme.spacing(2),
}));

//-------------------------------------------------------------------------//

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#263238" }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              <Box>
                <Typography variant="body2" color="white">
                  Makers 2023 (C)
                </Typography>
              </Box>
              <SocialMediaWrapper>
                <IconButton
                  size="large"
                  color="inherit"
                  aria-label="Facebook"
                  onClick={() =>
                    window.open("https://www.facebook.com", "_blank")
                  }
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  size="large"
                  color="inherit"
                  aria-label="Twitter"
                  onClick={() =>
                    window.open("https://www.twitter.com", "_blank")
                  }
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  size="large"
                  color="inherit"
                  aria-label="Instagram"
                  onClick={() =>
                    window.open("https://www.instagram.com", "_blank")
                  }
                >
                  <Instagram />
                </IconButton>
              </SocialMediaWrapper>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Footer;
