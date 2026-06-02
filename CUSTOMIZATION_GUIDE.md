# 🎨 Portfolio Customization Guide

This guide will help you customize your portfolio with your own information, projects, and styling.

## 📝 Step-by-Step Customization

### 1. Personal Information

#### Update Your Name & Title

**File:** `src/components/Hero.tsx`

```typescript
// Update the hero section
<Typography variant="h1">
  Hi, I'm [Your Name]  // Change "Sandeep" to your name
</Typography>

<Typography variant="h3">
  [Your Job Title]  // Change "Front-end Developer" to your title
</Typography>

// Update the description
<Typography variant="body1">
  With 2.7 years of experience in building... // Update your experience
</Typography>
```

#### Update Contact Information

**File:** `src/components/Contact.tsx`

```typescript
const contactInfo = [
  {
    title: "Email",
    value: "your.email@example.com", // Add your email
    link: "mailto:your.email@example.com",
  },
  {
    title: "Phone",
    value: "+1 (555) 123-4567", // Add your phone
    link: "tel:+15551234567",
  },
  {
    title: "Location",
    value: "Your City, Country", // Add your location
    link: "#",
  },
];
```

#### Update Social Links

**Files:** `src/components/Contact.tsx` and `src/components/Footer.tsx`

```typescript
const socialLinks = [
  {
    icon: <LinkedInIcon />,
    url: 'https://linkedin.com/in/your-profile',  // Your LinkedIn
    label: 'LinkedIn',
  },
  {
    icon: <GitHubIcon />,
    url: 'https://github.com/your-username',  // Your GitHub
    label: 'GitHub',
  },
  {
    icon: <TwitterIcon />,
    url: 'https://twitter.com/your-handle',  // Your Twitter
    label: 'Twitter',
  },
];
```

### 2. About Section

**File:** `src/components/About.tsx`

Update your bio:

```typescript
<Typography variant="body1">
  I'm a passionate front-end developer with over X years of experience...
  // Write your own professional summary (2-3 paragraphs)
</Typography>
```

Update statistics:

```typescript
<Grid container spacing={2}>
  <Grid item xs={6}>
    <Typography variant="h3">10+</Typography>
    <Typography>Years of Experience</Typography>
  </Grid>
  // Update with your actual numbers
</Grid>
```

### 3. Skills Section

**File:** `src/components/Skills.tsx`

Update skill categories:

```typescript
const skillCategories = [
  {
    category: "Frontend",
    color: "#00d4ff",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      // Add your skills with proficiency levels (0-100)
      { name: "Your Skill", level: 85 },
    ],
  },
  // Add more categories as needed
];
```

Update tech stack chips:

```typescript
{[
  'React',
  'TypeScript',
  'Your Tech',
  // Add all technologies you want to showcase
].map((tech, index) => (
  <Chip label={tech} />
))}
```

### 4. Projects Section

**File:** `src/components/Projects.tsx`

Update featured projects:

```typescript
const projects = [
  {
    title: "Project Name",
    description: "Brief description of what the project does",
    technologies: ["React", "TypeScript", "Node.js"],
    image: "🎨", // Use emoji or change to actual image
    github: "https://github.com/your/project",
    live: "https://project-link.com",
    highlights: ["Key feature 1", "Key feature 2", "Key feature 3"],
  },
  // Add more projects
];
```

**Tips for projects:**

- Include 4-6 of your best projects
- Add real links to GitHub and live demos
- Highlight key achievements for each project
- Use relevant emojis or upload actual project screenshots

### 5. Work Experience Section

**File:** `src/components/Experience.tsx`

Update your work history:

```typescript
const experiences = [
  {
    company: "Company Name",
    position: "Your Job Title",
    period: "2020 - Present",
    duration: "4+ years",
    description: "Description of your role and responsibilities",
    achievements: [
      "Achievement 1 with measurable impact",
      "Achievement 2 with numbers if possible",
      "Achievement 3 demonstrating growth",
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
  },
  // Add more positions (newest first)
];
```

### 6. Resume Section

**File:** `src/components/Resume.tsx`

Update resume file reference:

```typescript
const handleDownloadResume = () => {
  const resumePath = "/Your-Resume-Name.pdf"; // Update filename
  // Keep the rest of the code the same
};
```

**Steps:**

1. Place your PDF resume in the `public` folder
2. Update the filename in the code above
3. The resume will be available for download and viewing

### 7. Navigation Links

**File:** `src/components/Navbar.tsx`

If you want to add/remove sections:

```typescript
const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Resume",
  "Contact",
];
// Add or remove items from this array (must match section IDs)
```

## 🎨 Color Customization

### Change Theme Colors

**File:** `src/App.tsx`

```typescript
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#00d4ff", // Change cyan color
      light: "#4dd0ff",
      dark: "#0099cc",
    },
    secondary: {
      main: "#ff006e", // Change pink color
      light: "#ff1a7f",
      dark: "#cc0056",
    },
    background: {
      default: "#0a0e27", // Dark background
      paper: "#0f1629", // Card background
    },
    text: {
      primary: "#ffffff", // Main text
      secondary: "#b0bec5", // Secondary text
    },
  },
});
```

### Recommended Color Schemes

**Modern Blue:**

```
Primary: #0066ff (Blue)
Secondary: #ff0066 (Pink)
Background: #0a0f2e
```

**Professional Purple:**

```
Primary: #7c3aed (Purple)
Secondary: #ec4899 (Pink)
Background: #0f0a1f
```

**Green & Teal:**

```
Primary: #14b8a6 (Teal)
Secondary: #f59e0b (Amber)
Background: #0f2a2a
```

## 📐 Typography Customization

**File:** `src/App.tsx`

```typescript
typography: {
  fontFamily: '"Poppins", sans-serif',  // Change font
  h1: {
    fontWeight: 700,
    fontSize: '3.5rem',
  },
  // Customize other typography sizes
},
```

**Font Options:**

- Poppins (current - modern)
- Inter (clean, professional)
- Roboto (versatile)
- JetBrains Mono (technical)

## 🎬 Animation Customization

### Adjust Animation Speed

**File:** `src/components/*.tsx`

```typescript
animate={{ y: [0, -20, 0] }}
transition={{
  duration: 3,  // Increase for slower, decrease for faster
  repeat: Infinity,
  ease: 'easeInOut',
}}
```

### Animation Easing Options

- 'linear' - constant speed
- 'easeInOut' - smooth start and end
- 'easeIn' - slow start
- 'easeOut' - slow end
- 'circInOut' - circular easing

### Disable Animations (for slower devices)

Add to `src/index.css`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## 📱 Responsive Design Customization

### Adjust Breakpoints

**File:** `src/App.tsx`

```typescript
// Current breakpoints
xs: 0px (mobile)
sm: 600px (tablet)
md: 960px (desktop)
lg: 1280px (large desktop)
```

## 🔧 Form Customization

**File:** `src/components/Contact.tsx`

The contact form fields are:

- Name
- Email
- Subject
- Message

To add more fields:

```typescript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
  phone: '',  // Add new field
});

// Add TextField for the new field
<TextField
  name="phone"
  label="Your Phone"
  type="tel"
  value={formData.phone}
  onChange={handleChange}
/>
```

## 🖼️ Adding Images

To add project images instead of emojis:

**File:** `src/components/Projects.tsx`

```typescript
// Replace emoji with actual image
image: require('../assets/project1.png'),

// Or use in the component
<Box
  sx={{
    backgroundImage: `url(${project.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',
  }}
/>
```

## 📝 Meta Tags Customization

**File:** `public/index.html`

```html
<meta name="description" content="Your professional description" />
<meta name="keywords" content="Your skills, React Developer, etc" />
<meta name="author" content="Your Name" />
<meta name="theme-color" content="#0a0e27" />
```

## 🚀 Performance Tips

1. **Optimize Images**
   - Use WebP format for images
   - Compress images before uploading
   - Use appropriate sizes

2. **Code Splitting**
   - Components are already optimized
   - React will lazy-load as needed

3. **Caching**
   - Service workers enabled by default
   - Browser caching configured

## 🔐 Security Tips

1. **Never commit sensitive data**
   - Email addresses (mask with contact form)
   - Phone numbers (use contact form)
   - API keys (use environment variables)

2. **Environment Variables**
   - Create `.env` file for secrets
   - Use in code: `process.env.REACT_APP_API_KEY`

## 📱 Testing on Different Devices

### Desktop

- Chrome DevTools (F12)
- Firefox DevTools (F12)
- Safari DevTools

### Mobile

- Chrome Mobile
- Safari iOS
- Firefox Mobile

Use responsive mode: `Ctrl+Shift+M` (Windows/Linux) or `Cmd+Shift+M` (Mac)

## 🆘 Common Issues & Solutions

### Issue: Changes not reflecting

**Solution:** Clear browser cache or do hard refresh (`Ctrl+Shift+R`)

### Issue: Build errors

**Solution:**

```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Issue: Animations not smooth

**Solution:** Check browser hardware acceleration is enabled

### Issue: Form not working

**Solution:** Verify email service integration (currently logs to console)

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Material-UI Documentation](https://mui.com/material-ui)
- [Framer Motion Docs](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Need more help? Check the PORTFOLIO_README.md file for setup and deployment instructions!**
