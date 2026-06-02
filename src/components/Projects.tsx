import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
// import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import angelai from "../assets/angelai.webp";
import akosMD from "../assets/akosMD.png";
import eonMed from "../assets/eonproLogo.png";

const Projects = () => {
  const projects = [
    {
      title: "Angel AI – AI-Powered Business Platform",
      description:
        "Responsive, high-performance event and marketing landing pages with a JSON-driven dynamic architecture hosted on AWS S3. Boosted engagement and reduced content update time.",
      technologies: [
        "React.js",
        "JavaScript",
        "AWS S3",
        "SEO",
        "GitHub Copilot",
      ],
      image: angelai,
      github: "#",
      live: "https://www.angelai.com/",
      highlights: [
        "JSON-driven Dynamic Pages",
        "Core Web Vitals +18–22%",
        "Session Duration +15–20%",
      ],
    },
    {
      title: "EonMeds — Multi-Tenant Healthcare Platform",
      description:
        "End-to-end healthcare modules for onboarding, doctor availability, appointment scheduling, subscriptions, billing, and payments — integrated with Heyflow and Square.",
      technologies: [
        "React.js",
        "TypeScript",
        "Redux",
        "TanStack Query",
        "MUI",
        "Node.js",
      ],
      image: eonMed,
      github: "#",
      live: "https://www.eonmeds.com/",
      highlights: [
        "Workflow Efficiency +30–35%",
        "Page Load Time -20–25%",
        "Heyflow & Square Integration",
      ],
    },
    {
      title: "Akos MD — Telemedicine & EHR Platform",
      description:
        "Responsive telemedicine interfaces with dynamic patient and provider workflows. Integrated with healthcare APIs and SMART on FHIR for clinical data interoperability.",
      technologies: [
        "React.js",
        "TypeScript",
        "Material-UI",
        "SMART on FHIR",
        "REST APIs",
      ],
      image: akosMD,
      github: "#",
      live: "https://akosmd.com/",
      highlights: [
        "SMART on FHIR Integration",
        "Reusable Components",
        "Accessibility Focused",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <Box
      id="projects"
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
              Featured Projects
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

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      background:
                        "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 110, 0.05) 100%)",
                      border: "2px solid rgba(0, 212, 255, 0.15)",
                      borderRadius: "15px",
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "rgba(0, 212, 255, 0.4)",
                        boxShadow: "0 20px 50px rgba(0, 212, 255, 0.15)",
                      },
                    }}
                  >
                    {/* Project Image/Emoji */}
                    <Box
                      sx={{
                        height: "200px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <Box
                          component="img"
                          src={project.image}
                          alt={project.title}
                          sx={{
                            width: "100%",
                            height: "100%",
                            padding: "20px",
                            objectFit: "contain",
                            backgroundColor: "white",
                          }}
                        />
                      </motion.div>
                    </Box>

                    <CardContent
                      sx={{ flex: 1, display: "flex", flexDirection: "column" }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color: "#ffffff",
                          mb: 1,
                          fontWeight: 700,
                          fontSize: "1.3rem",
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#b0bec5",
                          mb: 2,
                          flex: 1,
                          lineHeight: 1.6,
                          minHeight: "80px",
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Highlights */}
                      <Box sx={{ mb: 2 }}>
                        {project.highlights.map((highlight, idx) => (
                          <Typography
                            key={idx}
                            variant="caption"
                            sx={{
                              display: "block",
                              color: "#00d4ff",
                              mb: 0.5,
                              fontSize: "0.85rem",
                              "&::before": {
                                content: '"✓ "',
                                fontWeight: 700,
                              },
                            }}
                          >
                            {highlight}
                          </Typography>
                        ))}
                      </Box>

                      {/* Technologies */}
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 3,
                        }}
                      >
                        {project.technologies.map((tech, idx) => (
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

                      {/* Buttons */}
                      <Box sx={{ display: "flex", gap: 1 }}>
                        {/* <Button
                          startIcon={<GitHubIcon />}
                          variant="outlined"
                          size="small"
                          sx={{
                            color: "#00d4ff",
                            borderColor: "#00d4ff",
                            flex: 1,
                            "&:hover": {
                              backgroundColor: "rgba(0, 212, 255, 0.1)",
                              borderColor: "#4dd0ff",
                            },
                          }}
                        >
                          Code
                        </Button> */}
                        <Button
                          startIcon={<LaunchIcon />}
                          variant="outlined"
                          size="small"
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: "#00d4ff",
                            borderColor: "#00d4ff",
                            flex: 1,
                            "&:hover": {
                              backgroundColor: "rgba(255, 0, 110, 0.1)",
                              borderColor: "#4dd0ff",
                            },
                          }}
                        >
                          Live Demo
                        </Button>
                      </Box>
                    </CardContent>
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

export default Projects;
