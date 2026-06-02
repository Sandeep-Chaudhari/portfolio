import React from "react";
import { Box, Container, Typography, Grid, Button, Card } from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import DescriptionIcon from "@mui/icons-material/Description";
import FileOpenIcon from "@mui/icons-material/FileOpen";

const Resume = () => {
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
      number: "2.7",
      label: "Years Experience",
    },
    {
      number: "3+",
      label: "Projects Delivered",
    },
    {
      number: "8.4",
      label: "CGPA (B.Sc. CS)",
    },
    {
      number: "100%",
      label: "Quality Driven",
    },
  ];

  const handleDownloadResume = () => {
    const resumePath = "/Sandeep-Chaudhari-Resume-Front-End.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Sandeep-Chaudhari-Resume-Front-End.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    const resumePath = "/Sandeep-Chaudhari-Resume-Front-End.pdf";
    window.open(resumePath, "_blank");
  };

  return (
    <Box
      id="resume"
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
              My Resume
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

          {/* Main Resume Section */}
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {/* Resume Preview Card */}
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 110, 0.05) 100%)",
                    border: "2px solid rgba(0, 212, 255, 0.2)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Box
                    sx={{
                      height: "500px",
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 4,
                      textAlign: "center",
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <DescriptionIcon
                        sx={{
                          fontSize: "6rem",
                          color: "#00d4ff",
                          mb: 2,
                        }}
                      />
                    </motion.div>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#ffffff",
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      Sandeep Chaudhari
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#00d4ff",
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      Frontend Engineer
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#b0bec5",
                        mb: 3,
                        maxWidth: "320px",
                      }}
                    >
                      Comprehensive resume showcasing 2.7 years of experience in
                      React.js, TypeScript, AWS, and healthcare platform
                      development.
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="contained"
                          startIcon={<DownloadIcon />}
                          onClick={handleDownloadResume}
                          sx={{
                            background:
                              "linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)",
                            color: "#000",
                            fontWeight: 700,
                            px: 3,
                            py: 1.5,
                            "&:hover": {
                              background:
                                "linear-gradient(135deg, #4dd0ff 0%, #00b3ff 100%)",
                            },
                          }}
                        >
                          Download
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outlined"
                          startIcon={<FileOpenIcon />}
                          onClick={handleViewResume}
                          sx={{
                            borderColor: "#ff006e",
                            color: "#ff006e",
                            fontWeight: 700,
                            px: 3,
                            py: 1.5,
                            "&:hover": {
                              borderColor: "#ff1a7f",
                              backgroundColor: "rgba(255, 0, 110, 0.1)",
                            },
                          }}
                        >
                          View
                        </Button>
                      </motion.div>
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>

            {/* Resume Highlights */}
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#ffffff",
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  Key Highlights
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 2,
                  }}
                >
                  {highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, rotateY: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        sx={{
                          background:
                            "linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(255, 0, 110, 0.15) 100%)",
                          border: "1px solid rgba(0, 212, 255, 0.2)",
                          borderRadius: "15px",
                          p: 2,
                          textAlign: "center",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            borderColor: "rgba(0, 212, 255, 0.4)",
                            boxShadow: "0 10px 30px rgba(0, 212, 255, 0.15)",
                          },
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            color: "#00d4ff",
                            fontWeight: 700,
                            fontSize: "2rem",
                            mb: 1,
                          }}
                        >
                          {item.number}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#b0bec5",
                            fontWeight: 600,
                          }}
                        >
                          {item.label}
                        </Typography>
                      </Card>
                    </motion.div>
                  ))}
                </Box>

                {/* Additional Info */}
                <Box sx={{ mt: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#ffffff",
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    What's Inside
                  </Typography>
                  <Box>
                    {[
                      "Professional Summary",
                      "Technical Skills (React, TypeScript, AWS)",
                      "XL Dynamics & Thinkitive Experience",
                      "EonMeds & Akos MD Projects",
                      "B.Sc. Computer Science — CGPA 8.4",
                      "AI Tools & Modern Stack",
                    ].map((item, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        sx={{
                          color: "#b0bec5",
                          mb: 1,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#00d4ff",
                            marginRight: "0.75rem",
                            flexShrink: 0,
                          }}
                        />
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Call to Action */}
          <motion.div variants={itemVariants} style={{ textAlign: "center" }}>
            <Card
              sx={{
                background:
                  "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 110, 0.1) 100%)",
                border: "2px solid rgba(0, 212, 255, 0.2)",
                borderRadius: "20px",
                p: 4,
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#ffffff",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Interested in Working Together?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#b0bec5",
                  mb: 3,
                }}
              >
                Review my full resume and get in touch to discuss how I can help
                with your project.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)",
                    color: "#000",
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                  }}
                  onClick={handleDownloadResume}
                >
                  Download Resume
                </Button>
              </Box>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Resume;
