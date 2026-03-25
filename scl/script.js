// ========================================
// MOBILE NAVIGATION TOGGLE
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ========================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
            e.preventDefault();
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// NAVBAR BACKGROUND ON SCROLL
// ========================================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// ACTIVE NAV LINK HIGHLIGHTING
// ========================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navHeight = navbar.offsetHeight;
        
        if (pageYOffset >= (sectionTop - navHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// SCROLL ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
const animateElements = document.querySelectorAll('.research-card, .news-item, .experience-item, .project-card, .publication-item, .project-detailed, .small-project-card, .achievement-card');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// COPY EMAIL TO CLIPBOARD
// ========================================

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.getAttribute('href').replace('mailto:', '');
        
        // Try to copy to clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                // Show a temporary tooltip
                const originalText = link.innerHTML;
                link.innerHTML = '<i class="fas fa-check"></i> Email copied!';
                
                setTimeout(() => {
                    link.innerHTML = originalText;
                }, 2000);
            }).catch(err => {
                console.log('Could not copy email:', err);
            });
        }
    });
});

// ========================================
// SCROLL TO TOP BUTTON (Optional Enhancement)
// ========================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
    scrollTopBtn.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
    scrollTopBtn.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
});

// ========================================
// LOADING ANIMATION
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// EXTERNAL LINKS OPEN IN NEW TAB
// ========================================

document.querySelectorAll('a[href^="http"]').forEach(link => {
    // Check if it's not already set to open in new tab
    if (!link.getAttribute('target')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ========================================
// CONSOLE MESSAGE (Optional Easter Egg)
// ========================================

console.log(
    '%c🚀 Welcome to my website!',
    'color: #2563eb; font-size: 20px; font-weight: bold;'
);
console.log(
    '%cInterested in collaborating? Reach out at thirulok@umich.edu',
    'color: #64748b; font-size: 14px;'
);

// ========================================
// LIGHTBOX FOR PROJECT IMAGES
// ========================================

// Create lightbox overlay
const lightboxOverlay = document.createElement('div');
lightboxOverlay.className = 'lightbox-overlay';
const lightboxImg = document.createElement('img');
lightboxOverlay.appendChild(lightboxImg);
document.body.appendChild(lightboxOverlay);

// Click on project images to enlarge
document.querySelectorAll('.project-detailed img').forEach(img => {
    img.style.cursor = 'pointer';
    img.setAttribute('title', 'Click to enlarge');
    img.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close lightbox on click
lightboxOverlay.addEventListener('click', () => {
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========================================
// BIBTEX TOGGLE (For Publications Page)
// ========================================

document.querySelectorAll('.bibtex-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const container = this.closest('.publication-item').querySelector('.bibtex-container');
        
        if (container) {
            if (container.style.display === 'none' || !container.style.display) {
                container.style.display = 'block';
                this.innerHTML = '<i class="fas fa-times"></i> Hide BibTeX';
            } else {
                container.style.display = 'none';
                this.innerHTML = '<i class="fas fa-quote-left"></i> BibTeX';
            }
        }
    });
});

// ========================================
// COPY BIBTEX TO CLIPBOARD
// ========================================

document.querySelectorAll('.bibtex-container').forEach(container => {
    const copyBtn = document.createElement('button');
    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
    copyBtn.className = 'copy-bibtex-btn';
    copyBtn.style.cssText = `
        padding: 0.5rem 1rem;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: 500;
        margin-top: 0.5rem;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    `;
    
    container.appendChild(copyBtn);
    
    copyBtn.addEventListener('click', () => {
        const code = container.querySelector('code').textContent;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(code).then(() => {
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyBtn.style.background = '#10b981';
                
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
                    copyBtn.style.background = 'var(--primary-color)';
                }, 2000);
            });
        }
    });
    
    copyBtn.addEventListener('mouseenter', () => {
        copyBtn.style.transform = 'translateY(-2px)';
    });
    
    copyBtn.addEventListener('mouseleave', () => {
        copyBtn.style.transform = 'translateY(0)';
    });
});