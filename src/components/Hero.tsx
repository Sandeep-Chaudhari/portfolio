import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link as ScrollLink } from "react-scroll";
import myImage from "../assets/myImage2.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: 8,
        background:
          "linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          top: "10%",
          right: "-10%",
          animation: "pulse 8s ease-in-out infinite",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(255, 0, 110, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          bottom: "10%",
          left: "-5%",
          animation: "pulse 6s ease-in-out infinite",
        },
        "@keyframes pulse": {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#00d4ff",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    mb: 2,
                  }}
                >
                  Welcome to my portfolio
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 2,
                    background:
                      "linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 800,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                  }}
                >
                  Hi, I'm Sandeep
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#b0bec5",
                    mb: 3,
                    fontWeight: 600,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Front-end Developer
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#b0bec5",
                    mb: 4,
                    maxWidth: "500px",
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                  }}
                >
                  With 2.7 years of experience in building responsive,
                  user-friendly web applications. Specializing in React,
                  TypeScript, and modern web technologies. Passionate about
                  creating elegant solutions to complex problems.
                </Typography>
              </motion.div>

              <motion.div
                variants={itemVariants}
                style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
              >
                <ScrollLink to="projects" smooth duration={500}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background:
                        "linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)",
                      color: "#000",
                      fontWeight: 700,
                      px: 4,
                      py: 1.5,
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #4dd0ff 0%, #00b3ff 100%)",
                        transform: "translateY(-3px)",
                        boxShadow: "0 10px 30px rgba(0, 212, 255, 0.3)",
                      },
                    }}
                  >
                    View My Work
                  </Button>
                </ScrollLink>

                <ScrollLink to="contact" smooth duration={500}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: "#ff006e",
                      color: "#ff006e",
                      fontWeight: 700,
                      px: 4,
                      py: 1.5,
                      "&:hover": {
                        borderColor: "#ff1a7f",
                        backgroundColor: "rgba(255, 0, 110, 0.1)",
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    Get in Touch
                  </Button>
                </ScrollLink>
              </motion.div>
            </Grid>

            {/* <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '400px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(255, 0, 110, 0.2) 100%)',
                    border: '2px solid rgba(0, 212, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '5rem',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  }}
                >
                  💻
                </Box>
              </motion.div>
            </Grid> */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "2px solid rgba(0, 212, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  }}
                >
                  <Box
                    component="img"
                    src={myImage}
                    alt="Sandeep Chaudhari"
                    sx={{
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <ScrollLink to="about" smooth duration={500}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              color: "#00d4ff",
            }}
          >
            <Typography variant="body2" sx={{ mb: 1 }}>
              Scroll to explore
            </Typography>
            <ArrowDownwardIcon sx={{ fontSize: "2rem" }} />
          </Box>
        </ScrollLink>
      </motion.div>
    </Box>
  );
};

export default Hero;
