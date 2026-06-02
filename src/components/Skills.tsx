import React from 'react';
import { Box, Container, Typography, Grid, LinearProgress, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      color: '#00d4ff',
      skills: [
        { name: 'React.js', level: 92 },
        { name: 'Next.js', level: 80 },
        { name: 'TypeScript', level: 88 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'Redux Toolkit / Context API', level: 88 },
        { name: 'HTML5 & CSS3', level: 92 },
      ],
    },
    {
      category: 'Backend & Cloud',
      color: '#ff006e',
      skills: [
        { name: 'Node.js & Express.js', level: 82 },
        { name: 'REST APIs & JWT', level: 88 },
        { name: 'AWS (EC2, S3, CloudFront, Lambda)', level: 80 },
        { name: 'PostgreSQL / MySQL', level: 78 },
        { name: 'MongoDB & Mongoose', level: 78 },
        { name: 'CI/CD Pipelines', level: 75 },
      ],
    },
    {
      category: 'UI & Testing',
      color: '#00d4ff',
      skills: [
        { name: 'Material-UI', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Vitest & Jest', level: 85 },
        { name: 'React Testing Library', level: 85 },
        { name: 'Responsive Design & A11y', level: 90 },
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

  const SkillItem = ({ skill, color }: { skill: { name: string; level: number }; color: string }) => (
    <motion.div variants={itemVariants}>
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography
            variant="body2"
            sx={{
              color: '#ffffff',
              fontWeight: 600,
            }}
          >
            {skill.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: color,
              fontWeight: 700,
            }}
          >
            {skill.level}%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={skill.level}
          sx={{
            height: '8px',
            borderRadius: '10px',
            backgroundColor: 'rgba(0, 212, 255, 0.1)',
            '& .MuiLinearProgress-bar': {
              background: `linear-gradient(90deg, ${color}, ${color}cc)`,
              borderRadius: '10px',
            },
          }}
        />
      </Box>
    </motion.div>
  );

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0a0e27 0%, #0f1629 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Skills & Expertise
            </Typography>
            <Box
              sx={{
                width: '60px',
                height: '4px',
                background: 'linear-gradient(90deg, #00d4ff, #ff006e)',
                mx: 'auto',
                borderRadius: '2px',
              }}
            />
          </motion.div>

          <Grid container spacing={4}>
            {skillCategories.map((category, categoryIndex) => (
              <Grid item xs={12} md={4} key={categoryIndex}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 110, 0.05) 100%)',
                      border: '2px solid rgba(0, 212, 255, 0.15)',
                      borderRadius: '20px',
                      p: 4,
                      backdropFilter: 'blur(10px)',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(0, 212, 255, 0.3)',
                        boxShadow: '0 15px 40px rgba(0, 212, 255, 0.1)',
                        transform: 'translateY(-10px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                        pb: 2,
                        borderBottom: `2px solid rgba(${category.color === '#00d4ff' ? '0, 212, 255' : '255, 0, 110'}, 0.2)`,
                      }}
                    >
                      <Box
                        sx={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '10px',
                          background: `linear-gradient(135deg, ${category.color}, ${category.color}99)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#ffffff',
                            fontWeight: 700,
                          }}
                        >
                          {category.category.charAt(0)}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '1.3rem',
                        }}
                      >
                        {category.category}
                      </Typography>
                    </Box>

                    {category.skills.map((skill, skillIndex) => (
                      <SkillItem key={skillIndex} skill={skill} color={category.color} />
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Additional Tech Stack */}
          <motion.div variants={itemVariants} style={{ marginTop: '4rem', textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                color: '#ffffff',
                mb: 3,
                fontWeight: 600,
              }}
            >
              Tech Stack & Tools
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
              {[
                'React.js',
                'Next.js',
                'TypeScript',
                'JavaScript',
                'Redux Toolkit',
                'Node.js',
                'Express.js',
                'REST APIs',
                'AWS',
                'S3',
                'Lambda',
                'PostgreSQL',
                'MongoDB',
                'Vitest',
                'Jest',
                'Material-UI',
                'Tailwind CSS',
                'SMART on FHIR',
                'Figma',
                'JIRA',
                'GitHub Copilot',
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Chip
                    label={tech}
                    sx={{
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(255, 0, 110, 0.2) 100%)',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      color: '#00d4ff',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      padding: '0.5rem',
                      '&:hover': {
                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.3) 0%, rgba(255, 0, 110, 0.3) 100%)',
                        borderColor: 'rgba(0, 212, 255, 0.5)',
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
