import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

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

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: "2.5rem" }} />,
      title: "Email",
      value: "sandeepchaudhari7788@gmail.com",
      link: "mailto:sandeepchaudhari7788@gmail.com",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: "2.5rem" }} />,
      title: "Phone",
      value: "+91 84689 58696",
      link: "tel:+918468958696",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: "2.5rem" }} />,
      title: "Location",
      value: "Pune, India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon sx={{ fontSize: "1.8rem" }} />,
      url: "https://linkedin.com/in/sandeep-chaudhari-72395025b",
      label: "LinkedIn",
    },
    {
      icon: <GitHubIcon sx={{ fontSize: "1.8rem" }} />,
      url: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <EmailIcon sx={{ fontSize: "1.8rem" }} />,
      url: "mailto:sandeepchaudhari7788@gmail.com",
      label: "Email",
    },
  ];

  return (
    <Box
      id="contact"
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
              Get In Touch
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
            <Typography
              variant="body1"
              sx={{
                color: "#b0bec5",
                mt: 2,
                fontSize: "1.05rem",
              }}
            >
              Have a project in mind or want to collaborate? Let's connect!
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 110, 0.05) 100%)",
                    border: "2px solid rgba(0, 212, 255, 0.15)",
                    borderRadius: "20px",
                    p: 4,
                    backdropFilter: "blur(10px)",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#ffffff",
                      fontWeight: 700,
                      mb: 3,
                    }}
                  >
                    Send me a Message
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{
                        mb: 2,
                        "& .MuiOutlinedInput-root": {
                          color: "#ffffff",
                          "& fieldset": {
                            borderColor: "rgba(0, 212, 255, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(0, 212, 255, 0.5)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#00d4ff",
                          },
                        },
                        "& .MuiOutlinedInput-input::placeholder": {
                          color: "#b0bec5",
                          opacity: 0.7,
                        },
                        "& .MuiInputBase-input": {
                          color: "#ffffff",
                        },
                        "& .MuiInputLabel-root": {
                          color: "#b0bec5",
                          "&.Mui-focused": {
                            color: "#00d4ff",
                          },
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{
                        mb: 2,
                        "& .MuiOutlinedInput-root": {
                          color: "#ffffff",
                          "& fieldset": {
                            borderColor: "rgba(0, 212, 255, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(0, 212, 255, 0.5)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#00d4ff",
                          },
                        },
                        "& .MuiOutlinedInput-input::placeholder": {
                          color: "#b0bec5",
                          opacity: 0.7,
                        },
                        "& .MuiInputBase-input": {
                          color: "#ffffff",
                        },
                        "& .MuiInputLabel-root": {
                          color: "#b0bec5",
                          "&.Mui-focused": {
                            color: "#00d4ff",
                          },
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      sx={{
                        mb: 2,
                        "& .MuiOutlinedInput-root": {
                          color: "#ffffff",
                          "& fieldset": {
                            borderColor: "rgba(0, 212, 255, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(0, 212, 255, 0.5)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#00d4ff",
                          },
                        },
                        "& .MuiOutlinedInput-input::placeholder": {
                          color: "#b0bec5",
                          opacity: 0.7,
                        },
                        "& .MuiInputBase-input": {
                          color: "#ffffff",
                        },
                        "& .MuiInputLabel-root": {
                          color: "#b0bec5",
                          "&.Mui-focused": {
                            color: "#00d4ff",
                          },
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={5}
                      sx={{
                        mb: 3,
                        "& .MuiOutlinedInput-root": {
                          color: "#ffffff",
                          "& fieldset": {
                            borderColor: "rgba(0, 212, 255, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(0, 212, 255, 0.5)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#00d4ff",
                          },
                        },
                        "& .MuiOutlinedInput-input::placeholder": {
                          color: "#b0bec5",
                          opacity: 0.7,
                        },
                        "& .MuiInputBase-input": {
                          color: "#ffffff",
                        },
                        "& .MuiInputLabel-root": {
                          color: "#b0bec5",
                          "&.Mui-focused": {
                            color: "#00d4ff",
                          },
                        },
                      }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        sx={{
                          background: submitted
                            ? "linear-gradient(135deg, #4caf50 0%, #45a049 100%)"
                            : "linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)",
                          color: "#000",
                          fontWeight: 700,
                          py: 1.5,
                          fontSize: "1rem",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-2px)",
                            boxShadow: "0 10px 30px rgba(0, 212, 255, 0.3)",
                          },
                        }}
                      >
                        {submitted ? "✓ Message Sent!" : "Send Message"}
                      </Button>
                    </motion.div>
                  </Box>
                </Card>
              </motion.div>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} md={6}>
              {/* Contact Info Cards */}
              <motion.div
                variants={itemVariants}
                style={{ marginBottom: "2rem" }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#ffffff",
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  Contact Information
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: 2,
                    mb: 4,
                  }}
                >
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                      style={{ textDecoration: "none" }}
                    >
                      <Card
                        sx={{
                          background:
                            "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 110, 0.05) 100%)",
                          border: "2px solid rgba(0, 212, 255, 0.15)",
                          borderRadius: "15px",
                          p: 2.5,
                          backdropFilter: "blur(10px)",
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            borderColor: "rgba(0, 212, 255, 0.4)",
                            boxShadow: "0 10px 30px rgba(0, 212, 255, 0.15)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            color: "#00d4ff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#b0bec5",
                              fontSize: "0.9rem",
                            }}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: "#ffffff",
                              fontWeight: 600,
                            }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </Card>
                    </motion.a>
                  ))}
                </Box>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#ffffff",
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  Connect With Me
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconButton
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "#00d4ff",
                          background: "rgba(0, 212, 255, 0.15)",
                          border: "2px solid rgba(0, 212, 255, 0.2)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#ffffff",
                            background:
                              "linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)",
                            borderColor: "#ff006e",
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>

                {/* Additional Text */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#b0bec5",
                    mt: 4,
                    lineHeight: 1.8,
                  }}
                >
                  I'm always open to new opportunities and interesting projects.
                  Whether you have a question or just want to say hi, feel free
                  to reach out. I'll get back to you as soon as possible!
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
