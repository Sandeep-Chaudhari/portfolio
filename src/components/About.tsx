import React from "react";
import { Box, Container, Typography, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const highlights = [
    {
      icon: <CodeIcon sx={{ fontSize: "3rem", color: "#00d4ff" }} />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and well-documented code following best practices.",
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: "3rem", color: "#ff006e" }} />,
      title: "Problem Solving",
      description:
        "Breaking down complex problems and implementing innovative solutions.",
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: "3rem", color: "#00d4ff" }} />,
      title: "Performance",
      description:
        "Optimizing applications for speed, efficiency, and user experience.",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #0f1629 0%, #0a0e27 100%)",
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
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            style={{ marginBottom: "3rem", textAlign: "center" }}
          >
            <Typography
              variant="h2"
              sx={{
                background: "linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              About Me
            </Typography>
            <Box
              sx={{
                width: "60px",
                height: "4px",
                background: "linear-gradient(90deg, #00d4ff, #ff006e)",
                mx: "auto",
                borderRadius: "2px",
              }}
            />
          </motion.div>

          {/* Main About Section */}
          <Grid container spacing={4} sx={{ alignItems: "center", mb: 6 }}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#b0bec5",
                    mb: 3,
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                  }}
                >
                  I'm a Frontend Engineer based in Pune with 2.7 years of
                  experience building scalable web applications using React.js,
                  TypeScript, Redux Toolkit, JavaScript (ES6+), and Node.js. I
                  focus on performance optimization, automated testing, and
                  shipping reusable components that deliver real impact.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#b0bec5",
                    mb: 3,
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                  }}
                >
                  At XL Dynamics, I built JSON-driven dynamic landing pages on
                  AWS S3 and improved Core Web Vitals by 18–22%. Before that at
                  Thinkitive, I delivered end-to-end healthcare modules for
                  EonMeds and Akos MD — integrating SMART on FHIR, Heyflow, and
                  Square into telemedicine workflows.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#b0bec5",
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                  }}
                >
                  I'm experienced with AWS (EC2, S3, CloudFront, Lambda), REST
                  APIs, CI/CD pipelines, and automated testing using Vitest,
                  Jest, and React Testing Library. I leverage AI tools like
                  GitHub Copilot and Claude to ship faster without compromising
                  quality.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 110, 0.1) 100%)",
                    border: "2px solid rgba(0, 212, 255, 0.2)",
                    borderRadius: "20px",
                    p: 4,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: "#00d4ff",
                          fontWeight: 700,
                          fontSize: "2.5rem",
                        }}
                      >
                        2.7
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#b0bec5" }}>
                        Years of Experience
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: "#ff006e",
                          fontWeight: 700,
                          fontSize: "2.5rem",
                        }}
                      >
                        3+
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#b0bec5" }}>
                        Projects Completed
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: "#00d4ff",
                          fontWeight: 700,
                          fontSize: "2.5rem",
                        }}
                      >
                        2
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#b0bec5" }}>
                        Companies Worked
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: "#ff006e",
                          fontWeight: 700,
                          fontSize: "2.5rem",
                        }}
                      >
                        100%
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#b0bec5" }}>
                        Quality Driven
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Highlights */}
          <Grid container spacing={3}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      background:
                        "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 110, 0.1) 100%)",
                      border: "1px solid rgba(0, 212, 255, 0.2)",
                      borderRadius: "15px",
                      p: 3,
                      textAlign: "center",
                      backdropFilter: "blur(10px)",
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "rgba(0, 212, 255, 0.5)",
                        boxShadow: "0 10px 30px rgba(0, 212, 255, 0.1)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{highlight.icon}</Box>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#ffffff",
                        mb: 1,
                        fontWeight: 600,
                      }}
                    >
                      {highlight.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#b0bec5" }}>
                      {highlight.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
