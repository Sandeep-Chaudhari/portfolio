import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Resume', 'Contact'];

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <HideOnScroll>
         <Box>
       
      <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 100%)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 212, 255, 0.2)',
          zIndex: 1200,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  cursor: 'pointer',
                }}
              >
                SC
              </Box>
            </motion.div>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ScrollLink to={item.toLowerCase()} smooth duration={500}>
                    <Button
                      sx={{
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -5,
                          left: 0,
                          width: '0%',
                          height: '2px',
                          background: 'linear-gradient(90deg, #00d4ff, #ff006e)',
                          transition: 'width 0.3s ease',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {item}
                    </Button>
                  </ScrollLink>
                </motion.div>
              ))}
            </Box>

            {/* Mobile Navigation */}
            <IconButton
              sx={{ display: { xs: 'block', md: 'none' }, color: '#00d4ff' }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 100%)',
            backdropFilter: 'blur(10px)',
            borderLeft: '1px solid rgba(0, 212, 255, 0.2)',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: '#00d4ff' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              onClick={() => toggleDrawer(false)}
            >
              <ListItem button sx={{ '&:hover': { backgroundColor: 'rgba(0, 212, 255, 0.1)' } }}>
                <ListItemText
                  primary={item}
                  sx={{
                    '& .MuiTypography-root': {
                      color: '#00d4ff',
                      fontWeight: 600,
                    },
                  }}
                />
              </ListItem>
            </ScrollLink>
          ))}
        </List>
      </Drawer>
       </Box>
    </HideOnScroll>
  );
};

export default Navbar;
