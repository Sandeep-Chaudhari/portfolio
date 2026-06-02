import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      url: "https://linkedin.com/in/sandeep-chaudhari-72395025b",
      label: "LinkedIn",
    },
    {
      icon: <GitHubIcon />,
      url: "https://github.com/sandeepchaudhari",
      label: "GitHub",
    },
    {
      icon: <TwitterIcon />,
      url: "https://twitter.com/sandeepchaudhari",
      label: "Twitter",
    },
  ];

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #0a0e27 0%, #000000 100%)",
        py: { xs: 6, md: 8 },
        borderTop: "1px solid rgba(0, 212, 255, 0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Grid container spacing={4} sx={{ mb: 4 }}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    background:
                      "linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                  }}
                >
                  Sandeep Chaudhari
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#b0bec5",
                    lineHeight: 1.8,
                    maxWidth: "300px",
                  }}
                >
                  A passionate frontend developer crafting beautiful and
                  functional web experiences. 2.7 years of expertise in React,
                  TypeScript, and modern web technologies.
                </Typography>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#ffffff",
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Quick Links
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {footerLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#b0bec5",
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "#00d4ff",
                          },
                        }}
                      >
                        → {link.label}
                      </Typography>
                    </motion.a>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Social Links */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#ffffff",
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Follow Me
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconButton
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: "#00d4ff",
                          background: "rgba(0, 212, 255, 0.1)",
                          border: "1px solid rgba(0, 212, 255, 0.2)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#ffffff",
                            background:
                              "linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)",
                            borderColor: "transparent",
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider
            sx={{
              my: 3,
              borderColor: "rgba(0, 212, 255, 0.1)",
            }}
          />

          {/* Bottom Section */}
          <motion.div variants={itemVariants} style={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{
                color: "#b0bec5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 0.5,
                mb: 1,
              }}
            >
              Made with
              <FavoriteIcon
                sx={{
                  fontSize: "1rem",
                  color: "#ff006e",
                }}
              />
              by Sandeep Chaudhari
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: "#666",
                display: "block",
              }}
            >
              © {currentYear} Sandeep Chaudhari. All rights reserved.
            </Typography>

            <Box
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#666",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#00d4ff",
                  },
                }}
              >
                Privacy Policy
              </Typography>
              <span style={{ color: "#666" }}>|</span>
              <Typography
                variant="caption"
                sx={{
                  color: "#666",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#00d4ff",
                  },
                }}
              >
                Terms of Service
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>

      {/* Background Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: -100,
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default Footer;
