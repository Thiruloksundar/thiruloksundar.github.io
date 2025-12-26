# Personal Academic Website

A modern, clean, and responsive personal academic website for showcasing research, publications, and projects.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Looks great on all devices (desktop, tablet, mobile)
- **Easy Navigation**: Sticky navbar with smooth scrolling
- **Publications Page**: Dedicated page for research papers with BibTeX support
- **Projects Showcase**: Detailed project descriptions with GitHub links
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📁 File Structure

```
thiruloksundar.github.io/
├── index.html              # Main homepage
├── publications.html       # Publications page
├── projects.html           # Projects page
├── css/
│   └── style.css          # Main stylesheet
├── scl/
│   └── script.js          # JavaScript functionality
├── docs/
│   ├── CV.pdf             # Your CV/Resume
│   └── Mohan_Rasu.pdf     # Your publication PDF
├── media/
│   └── thiru.jpg          # Your profile photo
└── README.md              # This file
```

## 🛠️ Setup Instructions

### 1. Clone or Download

If you haven't already, clone your repository:
```bash
git clone https://github.com/Thiruloksundar/thiruloksundar.github.io.git
cd thiruloksundar.github.io
```

### 2. Replace Files

Replace the following files with the new versions I've created:
- `index.html`
- `publications.html` (new file)
- `projects.html` (new file)
- `css/style.css`
- `scl/script.js`

### 3. Update Content

#### Profile Photo
- Place your photo at `media/thiru.jpg`
- Recommended size: 400x400px or larger, square aspect ratio

#### CV/Resume
- Place your CV at `docs/CV.pdf`
- Update the year in the filename if needed

#### Publications
- Add your publication PDFs to the `docs/` folder
- Update the links in `publications.html`

### 4. Customize Content

#### Personal Information
In `index.html`, update:
- Your name
- Email address
- GitHub, LinkedIn, Scholar profile links
- About section text
- Research interests
- Experience details
- News updates

#### Publications Page
In `publications.html`, update:
- Publication titles, authors, venues
- Abstract text
- Links to papers, code, datasets
- BibTeX citations

#### Projects Page
In `projects.html`, update:
- Project descriptions
- GitHub repository links
- Technologies used
- Achievement details

### 5. Deploy to GitHub Pages

1. Commit all changes:
```bash
git add .
git commit -m "Update website with new design"
```

2. Push to GitHub:
```bash
git push origin main
```

3. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Save

4. Your website will be live at: `https://thiruloksundar.github.io`

## 🎨 Customization

### Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main blue color */
    --primary-dark: #1e40af;       /* Darker blue */
    --accent-color: #3b82f6;       /* Accent blue */
    /* ... other colors ... */
}
```

### Fonts

The website uses the Inter font family. To change:

1. Replace the Google Fonts link in HTML files:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

2. Update the CSS variable:
```css
--font-primary: 'YourFont', sans-serif;
```

### Sections

To add/remove sections in `index.html`:

1. Add HTML for the section
2. Add corresponding navigation link in navbar
3. Style the section in `css/style.css`

## 📱 Mobile Menu

The website includes a responsive hamburger menu for mobile devices. It automatically appears on screens smaller than 768px.

## ✨ Features Details

### Smooth Scrolling
Click any navigation link to smoothly scroll to that section.

### Scroll-to-Top Button
A button appears when you scroll down, clicking it takes you back to the top.

### BibTeX Toggle
On the publications page, click "BibTeX" to show/hide citation code.

### Copy to Clipboard
Click the copy button in BibTeX sections to copy citations to clipboard.

### Loading Animations
Elements fade in as you scroll down the page for a smooth user experience.

## 🔧 Troubleshooting

### Images Not Showing
- Check file paths are correct
- Ensure image files are in the `media/` folder
- Verify file names match (case-sensitive)

### Links Not Working
- Make sure all href attributes point to correct files
- Check that linked files exist in your repository

### CSS Not Loading
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that `style.css` is in the `css/` folder
- Verify the link tag in HTML points to correct path

### Mobile Menu Not Working
- Ensure `script.js` is loaded
- Check browser console for JavaScript errors

## 🌟 Best Practices

1. **Keep Content Updated**: Regularly update your news, publications, and projects
2. **Optimize Images**: Compress images before uploading to improve loading speed
3. **Test Responsiveness**: Check your site on different devices
4. **Update Links**: Ensure all external links are working
5. **Backup**: Keep backups of your content before making major changes

## 📧 Support

If you need help with customization or encounter any issues:
- Check the browser console for error messages
- Verify all files are in correct locations
- Ensure GitHub Pages is properly enabled

## 🎯 Future Enhancements

Consider adding:
- Blog section for writing about research
- Gallery for conference photos
- Teaching section for courses
- Contact form
- Dark mode toggle
- Analytics (Google Analytics)

## 📄 License

This is a personal academic website template. Feel free to use and modify for your own purposes.

---

**Last Updated**: January 2025

**Created by**: Thirulok Sundar Mohan Rasu

**Questions?** Feel free to reach out!