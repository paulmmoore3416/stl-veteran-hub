// ============================================
// ST. LOUIS VETERAN RESOURCE HUB
// Interactive JavaScript Features
// ============================================

// ============================================
// CRISIS BANNER
// ============================================
function closeCrisisBanner() {
    const banner = document.getElementById('crisisBanner');
    banner.style.display = 'none';
    // Store in localStorage so it stays closed for the session
    localStorage.setItem('crisisBannerClosed', 'true');
}

// Check if banner was previously closed
window.addEventListener('DOMContentLoaded', () => {
    const bannerClosed = localStorage.getItem('crisisBannerClosed');
    if (bannerClosed === 'true') {
        const banner = document.getElementById('crisisBanner');
        banner.style.display = 'none';
    }
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('navMenu');
    const toggle = document.querySelector('.mobile-menu-toggle');

    if (navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !toggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for empty anchors
        if (href === '#') {
            return;
        }

        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 100; // Account for fixed header

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// RESOURCE FILTERING & SEARCH
// ============================================
function filterResources() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;

    const resourceCategories = document.querySelectorAll('.resource-category');

    let visibleCount = 0;

    resourceCategories.forEach(category => {
        const categoryValue = category.getAttribute('data-category');
        const cards = category.querySelectorAll('.resource-card');

        let categoryHasVisibleCards = false;

        // Check if category matches filter
        const categoryMatches = categoryFilter === 'all' || categoryFilter === categoryValue;

        cards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const matchesSearch = searchInput === '' || cardText.includes(searchInput);

            if (categoryMatches && matchesSearch) {
                card.style.display = 'block';
                categoryHasVisibleCards = true;
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide entire category based on whether it has visible cards
        if (categoryHasVisibleCards && categoryMatches) {
            category.style.display = 'block';
        } else {
            category.style.display = 'none';
        }
    });

    // Show message if no results
    showNoResultsMessage(visibleCount);
}

function showNoResultsMessage(count) {
    // Remove existing message if any
    const existingMessage = document.getElementById('noResultsMessage');
    if (existingMessage) {
        existingMessage.remove();
    }

    if (count === 0) {
        const resourcesSection = document.querySelector('.resources .container');
        const message = document.createElement('div');
        message.id = 'noResultsMessage';
        message.style.cssText = `
            text-align: center;
            padding: 3rem;
            background-color: #f8f9fa;
            border-radius: 8px;
            margin-top: 2rem;
        `;
        message.innerHTML = `
            <h3 style="color: #1a4d2e; margin-bottom: 1rem;">No Resources Found</h3>
            <p style="color: #6c757d; font-size: 1.1rem;">Try adjusting your search or filter criteria.</p>
            <p style="margin-top: 1rem;"><strong>In crisis?</strong> Call <a href="tel:988" style="color: #c41e3a; font-weight: 700;">988</a> and press 1</p>
        `;
        resourcesSection.appendChild(message);
    }
}

// ============================================
// QUICK ACCESS CARDS CLICK HANDLING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const quickCards = document.querySelectorAll('.quick-card');

    quickCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking the link directly
            if (e.target.classList.contains('quick-link')) {
                return;
            }

            const link = this.querySelector('.quick-link');
            if (link) {
                link.click();
            }
        });
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
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

// Observe all resource cards and sections
window.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.resource-card, .quick-card, .resource-category');

    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(el);
    });
});

// ============================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ============================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight) {
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

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        background-color: rgba(212, 175, 55, 0.2);
        color: #d4af37 !important;
    }
`;
document.head.appendChild(style);

// ============================================
// KEYBOARD ACCESSIBILITY
// ============================================
// Allow Enter key to trigger card clicks
document.addEventListener('DOMContentLoaded', () => {
    const clickableCards = document.querySelectorAll('.quick-card, .resource-card');

    clickableCards.forEach(card => {
        card.setAttribute('tabindex', '0');

        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const link = this.querySelector('a');
                if (link) {
                    link.click();
                }
            }
        });
    });
});

// ============================================
// BACK TO TOP BUTTON
// ============================================
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.id = 'backToTop';
    button.setAttribute('aria-label', 'Back to top');
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #1a4d2e;
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s, background-color 0.3s;
        z-index: 998;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#0f2819';
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#1a4d2e';
    });

    document.body.appendChild(button);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
}

window.addEventListener('DOMContentLoaded', createBackToTopButton);

// ============================================
// COPY PHONE NUMBER ON CLICK
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

    phoneLinks.forEach(link => {
        link.setAttribute('title', 'Click to call or tap to copy');

        // Add copy functionality on right-click
        link.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            const phoneNumber = this.textContent;

            navigator.clipboard.writeText(phoneNumber).then(() => {
                // Show copied message
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                this.style.color = '#2d6a3e';

                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.color = '';
                }, 2000);
            });
        });
    });
});

// ============================================
// RESOURCE COUNTER
// ============================================
function updateResourceCount() {
    const totalResources = document.querySelectorAll('.resource-card').length;
    const resourcesTitle = document.querySelector('.resources .section-title');

    if (resourcesTitle && totalResources > 0) {
        const countBadge = document.createElement('span');
        countBadge.style.cssText = `
            display: inline-block;
            background-color: #d4af37;
            color: #0f2819;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 1rem;
            font-weight: 700;
            margin-left: 1rem;
            vertical-align: middle;
        `;
        countBadge.textContent = `${totalResources} Resources`;
        resourcesTitle.appendChild(countBadge);
    }
}

window.addEventListener('DOMContentLoaded', updateResourceCount);

// ============================================
// EMERGENCY MODAL (optional enhancement)
// ============================================
function showEmergencyModal() {
    const modal = document.createElement('div');
    modal.id = 'emergencyModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 1rem;
    `;

    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; max-width: 500px; text-align: center;">
            <h2 style="color: #c41e3a; margin-bottom: 1rem;">Are you in crisis?</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem;">Help is available 24/7</p>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <a href="tel:988" style="background-color: #c41e3a; color: white; padding: 1rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 1.2rem;">Call 988 then press 1</a>
                <a href="sms:838255" style="background-color: #1a4d2e; color: white; padding: 1rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 700;">Text 838255</a>
                <button onclick="closeEmergencyModal()" style="background: none; border: 2px solid #6c757d; padding: 0.75rem; border-radius: 8px; cursor: pointer; color: #6c757d; font-weight: 600;">I'm not in crisis</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeEmergencyModal() {
    const modal = document.getElementById('emergencyModal');
    if (modal) {
        modal.remove();
    }
}

// Optional: Show emergency modal if user seems distressed (based on behavior)
// This is commented out by default - uncomment if you want this feature
/*
let rapidClicks = 0;
let clickTimer;

document.addEventListener('click', () => {
    rapidClicks++;
    clearTimeout(clickTimer);

    clickTimer = setTimeout(() => {
        rapidClicks = 0;
    }, 2000);

    if (rapidClicks > 10) {
        showEmergencyModal();
        rapidClicks = 0;
    }
});
*/

// ============================================
// PRINT FUNCTIONALITY
// ============================================
function printResource(resourceCard) {
    const printWindow = window.open('', '', 'width=800,height=600');
    const resourceHTML = resourceCard.outerHTML;

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Veteran Resource</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 2rem; }
                .resource-card { border: 1px solid #ccc; padding: 1rem; }
            </style>
        </head>
        <body>
            ${resourceHTML}
            <script>
                window.onload = function() {
                    window.print();
                    window.close();
                }
            </script>
        </body>
        </html>
    `);

    printWindow.document.close();
}

// ============================================
// ANALYTICS (for future enhancement)
// ============================================
function trackResourceClick(resourceName, resourceType) {
    // Placeholder for analytics tracking
    // Can be integrated with Google Analytics or other tracking systems
    console.log(`Resource clicked: ${resourceName} (${resourceType})`);
}

// Add tracking to all resource cards
document.addEventListener('DOMContentLoaded', () => {
    const resourceCards = document.querySelectorAll('.resource-card');

    resourceCards.forEach(card => {
        card.addEventListener('click', function() {
            const resourceName = this.querySelector('h4')?.textContent || 'Unknown';
            const resourceType = this.querySelector('.resource-type')?.textContent || 'Unknown';
            trackResourceClick(resourceName, resourceType);
        });
    });
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c🇺🇸 St. Louis Veteran Resource Hub 🇺🇸', 'font-size: 20px; font-weight: bold; color: #1a4d2e;');
console.log('%cBy Paul Moore, USMC Combat Veteran', 'font-size: 14px; color: #d4af37;');
console.log('%cStill Fighting. Still Healing. Still Here.', 'font-size: 14px; font-style: italic; color: #6c757d;');
console.log('%c\nIf you\'re in crisis, call 988 and press 1', 'font-size: 16px; font-weight: bold; color: #c41e3a;');

// ============================================
// SERVICE WORKER (for future PWA enhancement)
// ============================================
if ('serviceWorker' in navigator) {
    // Uncomment when you create a service worker file
    /*
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => console.log('ServiceWorker registered'))
            .catch(error => console.log('ServiceWorker registration failed:', error));
    });
    */
}