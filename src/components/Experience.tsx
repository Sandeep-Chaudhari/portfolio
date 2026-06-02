import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import TimelineIcon from "@mui/icons-material/Timeline";

const Experience = () => {
  const experiences = [
    // {
    //   company: "Self-Employed / Freelance",
    //   position: "Frontend Engineer",
    //   period: "Jan 2026 – Present",
    //   duration: "Remote",
    //   description:
    //     "Built an interactive coding platform featuring Java and React coding questions with a custom compiler integration.",
    //   achievements: [
    //     "Developed a compiler-powered module that executes and evaluates Java and React coding questions in real-time",
    //     "Designed the frontend interface for users to write, test, and submit code solutions",
    //     "Integrated compiler APIs to provide instant feedback on code correctness and performance",
    //     "Created a library of coding questions covering core Java concepts and React component challenges",
    //     "Built a responsive, clean UI for seamless developer experience across devices",
    //   ],
    //   technologies: [
    //     "React.js",
    //     "JavaScript",
    //     "Java",
    //     "Compiler APIs",
    //     "HTML/CSS",
    //   ],
    // },
    {
      company: "XL Dynamics India Pvt. Ltd.",
      position: "Frontend Engineer",
      period: "Aug 2025 – Dec 2025",
      duration: "Remote, India",
      description:
        "Project: AngelAi Marketing & Event Platform — Developed custom interactive widgets and supporting side pages for a live financial services website.",
      achievements: [
        "Designed and deployed a custom widget used in production on AngelAi.com, directly supporting core user engagement metrics",
        "Built and maintained multiple side pages, ensuring consistent layout and performance across the site",
        "Increased user engagement and average session duration by 15–20% through optimized widget and page interactions",
        "Improved Core Web Vitals and PageSpeed scores by 18–22% across the implemented pages and widget",
        "Applied SEO best practices to side pages, contributing to 10–15% better search visibility for those routes",
        "Built reusable UI components shared between the widget and side pages, reducing development effort by ~35%",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "HTML/CSS",
        "AWS S3 (assumed hosting)",
        "GitHub Copilot",
        "ChatGPT",
      ],
    },
    {
      company: "Thinkitive Technologies Pvt. Ltd.",
      position: "Software Engineer",
      period: "May 2023 – Aug 2025",
      duration: "Pune, Maharashtra",
      description:
        "Projects: EonMeds (Multi-Tenant Healthcare Platform) & Akos MD (Telemedicine & EHR Integration). Built end-to-end healthcare modules and telemedicine workflows.",
      achievements: [
        "Developed healthcare modules for onboarding, scheduling, subscriptions, billing — improving workflow efficiency 30–35%",
        "Built scalable apps with React.js, TypeScript, Redux, TanStack Query — reducing page load time by 20–25%",
        "Integrated secure REST APIs with Node.js backend, improving responsiveness by 18–22%",
        "Integrated Heyflow and Square — increasing successful transaction completion by 25%",
        "Integrated SMART on FHIR systems for seamless clinical data visualization and interoperability",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Redux",
        "TanStack Query",
        "Material-UI",
        "Node.js",
        "SMART on FHIR",
      ],
    },
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #0a0e27 0%, #0f1629 100%)",
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
              Work Experience
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

          {/* Timeline */}
          <Box sx={{ position: "relative" }}>
            {/* Vertical Line */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "2px",
                background:
                  "linear-gradient(180deg, rgba(0, 212, 255, 0.5) 0%, rgba(255, 0, 110, 0.5) 100%)",
                transform: "translateX(-50%)",
              }}
            />

            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Grid
                  container
                  spacing={4}
                  sx={{
                    mb: 4,
                    alignItems: "stretch",
                  }}
                >
                  {/* Timeline Dot and Company Info (Left on Desktop) */}
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: {
                          xs: "flex-start",
                          md: index % 2 === 0 ? "flex-end" : "flex-start",
                        },
                        textAlign: {
                          xs: "left",
                          md: index % 2 === 0 ? "right" : "left",
                        },
                        pr: { md: index % 2 === 0 ? 3 : 0 },
                        pl: { md: index % 2 === 0 ? 0 : 3 },
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color: "#00d4ff",
                          fontWeight: 700,
                          mb: 1,
                          fontSize: "1.3rem",
                        }}
                      >
                        {exp.position}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#b0bec5",
                          fontSize: "1rem",
                          mb: 0.5,
                        }}
                      >
                        {exp.company}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          alignItems: "center",
                          flexWrap: "wrap",
                          justifyContent: {
                            xs: "flex-start",
                            md: index % 2 === 0 ? "flex-end" : "flex-start",
                          },
                        }}
                      >
                        <Chip
                          icon={<TimelineIcon />}
                          label={exp.period}
                          size="small"
                          sx={{
                            background: "rgba(255, 0, 110, 0.15)",
                            color: "#ff006e",
                            fontWeight: 600,
                            border: "1px solid rgba(255, 0, 110, 0.2)",
                          }}
                        />
                        <Chip
                          label={exp.duration}
                          size="small"
                          sx={{
                            background: "rgba(0, 212, 255, 0.15)",
                            color: "#00d4ff",
                            fontWeight: 600,
                            border: "1px solid rgba(0, 212, 255, 0.2)",
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>

                  {/* Timeline Circle (Center on Desktop, Hidden on Mobile) */}
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      position: "relative",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      minWidth: 0,
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      <Box
                        sx={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)",
                          border: "4px solid #0a0e27",
                          boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
                          position: "relative",
                          zIndex: 2,
                        }}
                      />
                    </motion.div>
                  </Box>

                  {/* Card (Right on Desktop) */}
                  <Grid item xs={12} md={6}>
                    <Card
                      sx={{
                        background:
                          "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 110, 0.05) 100%)",
                        border: "2px solid rgba(0, 212, 255, 0.15)",
                        borderRadius: "15px",
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "rgba(0, 212, 255, 0.4)",
                          boxShadow: "0 20px 50px rgba(0, 212, 255, 0.15)",
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#b0bec5",
                            mb: 2,
                            lineHeight: 1.6,
                          }}
                        >
                          {exp.description}
                        </Typography>

                        <Typography
                          variant="h6"
                          sx={{
                            color: "#00d4ff",
                            fontWeight: 600,
                            mb: 1,
                            fontSize: "0.95rem",
                          }}
                        >
                          Key Achievements:
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                          {exp.achievements.map((achievement, idx) => (
                            <Typography
                              key={idx}
                              variant="body2"
                              sx={{
                                color: "#b0bec5",
                                mb: 0.8,
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <span
                                style={{
                                  color: "#ff006e",
                                  fontWeight: 700,
                                  marginRight: "0.5rem",
                                  flexShrink: 0,
                                }}
                              >
                                →
                              </span>
                              {achievement}
                            </Typography>
                          ))}
                        </Box>

                        {/* Technologies */}
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {exp.technologies.map((tech, idx) => (
                            <Chip
                              key={idx}
                              label={tech}
                              size="small"
                              sx={{
                                background: "rgba(0, 212, 255, 0.15)",
                                color: "#00d4ff",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                border: "1px solid rgba(0, 212, 255, 0.2)",
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;
