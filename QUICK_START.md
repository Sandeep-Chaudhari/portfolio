# 🚀 Quick Start Guide

## Get Your Portfolio Running in 3 Steps

### Step 1: Navigate to Project
```bash
cd sandeepportfolio
```

### Step 2: Start Development Server
```bash
npm start
```

The site will open at `http://localhost:3000`

### Step 3: Start Customizing!
See `CUSTOMIZATION_GUIDE.md` for detailed instructions

---

## 📋 Quick Customization Checklist

### Essential Updates
- [ ] Update name and title in `src/components/Hero.tsx`
- [ ] Update about section in `src/components/About.tsx`
- [ ] Update skills in `src/components/Skills.tsx`
- [ ] Add your projects in `src/components/Projects.tsx`
- [ ] Update work experience in `src/components/Experience.tsx`
- [ ] Add your resume in `public/` folder
- [ ] Update contact info in `src/components/Contact.tsx`
- [ ] Update social links in `Contact.tsx` and `Footer.tsx`

### Nice to Have
- [ ] Customize colors in `src/App.tsx`
- [ ] Update favicon in `public/`
- [ ] Customize animations
- [ ] Add project images
- [ ] Fine-tune spacing and typography

### Before Deployment
- [ ] Test on mobile, tablet, desktop
- [ ] Check all links work
- [ ] Verify contact form
- [ ] Test resume download
- [ ] Check spelling and grammar
- [ ] Update meta tags in `public/index.html`

---

## 🎯 Most Important Files to Edit

| File | Purpose | What to Change |
|------|---------|-----------------|
| `src/components/Hero.tsx` | Landing section | Name, title, bio |
| `src/components/About.tsx` | About me | Professional summary, stats |
| `src/components/Skills.tsx` | Skills showcase | Your tech stack |
| `src/components/Projects.tsx` | Work samples | Your projects |
| `src/components/Experience.tsx` | Job history | Work experience |
| `src/components/Contact.tsx` | Contact info | Email, phone, links |
| `src/App.tsx` | Theme | Colors, fonts |
| `public/index.html` | Meta tags | Site title, description |

---

## 🎨 Quick Color Change

Open `src/App.tsx` and modify:

```typescript
primary: {
  main: '#00d4ff',    // Change this
},
secondary: {
  main: '#ff006e',    // And this
},
```

---

## 📊 Sections Overview

Your portfolio includes:

1. **Navbar** - Fixed navigation with scroll spy
2. **Hero** - Eye-catching introduction
3. **About** - Professional background
4. **Skills** - Technical expertise with bars
5. **Projects** - Featured work (6 projects)
6. **Experience** - Timeline of jobs
7. **Resume** - PDF download section
8. **Contact** - Form + social links
9. **Footer** - Links and credits

---

## 🎬 Features Included

✅ Smooth scroll navigation
✅ Beautiful animations throughout
✅ Responsive design (mobile-first)
✅ Dark theme with vibrant accents
✅ Contact form
✅ Resume download
✅ Social media links
✅ Fully typed with TypeScript
✅ Accessible design
✅ Performance optimized

---

## 💻 Command Reference

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject (not recommended)
npm run eject
```

---

## 📞 Need Help?

1. **Check CUSTOMIZATION_GUIDE.md** for detailed instructions
2. **Check PORTFOLIO_README.md** for deployment options
3. **Review component files** - they're well-commented
4. **Check browser console** for any errors

---

## 🚀 Deployment Options

### Quick Deploy to Vercel
1. Push to GitHub
2. Connect to Vercel
3. Auto-deployed!

### Or Deploy to Netlify
1. Build: `npm run build`
2. Deploy `build` folder
3. Done!

See PORTFOLIO_README.md for detailed deployment steps.

---

## ⚡ Next Steps

1. **Update your information** (Hero, About, Contact)
2. **Add your projects** (with real links)
3. **Customize colors** if you want
4. **Test on your phone**
5. **Deploy when ready!**

---

**Happy customizing! 🎉**

Need inspiration? Check out the placeholder content as examples of what to include.
