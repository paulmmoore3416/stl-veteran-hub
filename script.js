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
// ENHANCEMENT 1: EMERGENCY QUICK-DIAL WIDGET
// ============================================
function createQuickDialWidget() {
    const widget = document.createElement('div');
    widget.id = 'quickDialWidget';
    widget.innerHTML = `
        <button class="quick-dial-toggle" onclick="toggleQuickDial()" aria-label="Emergency contacts">
            <span class="pulse-ring"></span>
            🆘
        </button>
        <div class="quick-dial-menu" id="quickDialMenu">
            <div class="quick-dial-header">Emergency Contacts</div>
            <a href="tel:988" class="quick-dial-item crisis">
                <span class="dial-icon">📞</span>
                <div class="dial-info">
                    <strong>Veterans Crisis Line</strong>
                    <span>988, press 1</span>
                </div>
            </a>
            <a href="sms:838255" class="quick-dial-item">
                <span class="dial-icon">💬</span>
                <div class="dial-info">
                    <strong>Crisis Text Line</strong>
                    <span>Text 838255</span>
                </div>
            </a>
            <a href="tel:911" class="quick-dial-item emergency">
                <span class="dial-icon">🚨</span>
                <div class="dial-info">
                    <strong>Emergency 911</strong>
                    <span>Immediate danger</span>
                </div>
            </a>
            <a href="tel:800-662-4357" class="quick-dial-item">
                <span class="dial-icon">☎️</span>
                <div class="dial-info">
                    <strong>SAMHSA Helpline</strong>
                    <span>800-662-4357</span>
                </div>
            </a>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        #quickDialWidget {
            position: fixed;
            bottom: 2rem;
            left: 2rem;
            z-index: 999;
        }
        .quick-dial-toggle {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #c41e3a, #9d1730);
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(196, 30, 58, 0.4);
            transition: all 0.3s ease;
            position: relative;
            animation: gentlePulse 2s infinite;
        }
        @keyframes gentlePulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        .pulse-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            border: 2px solid #c41e3a;
            border-radius: 50%;
            animation: pulseRing 2s infinite;
        }
        @keyframes pulseRing {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        .quick-dial-toggle:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 16px rgba(196, 30, 58, 0.6);
        }
        .quick-dial-menu {
            position: absolute;
            bottom: 70px;
            left: 0;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            min-width: 280px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.3s ease;
        }
        .quick-dial-menu.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        .quick-dial-header {
            background: #1a4d2e;
            color: white;
            padding: 0.75rem 1rem;
            font-weight: 700;
            border-radius: 12px 12px 0 0;
            font-size: 0.9rem;
        }
        .quick-dial-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            text-decoration: none;
            color: #212529;
            border-bottom: 1px solid #e9ecef;
            transition: background 0.2s ease;
        }
        .quick-dial-item:last-child {
            border-bottom: none;
            border-radius: 0 0 12px 12px;
        }
        .quick-dial-item:hover {
            background: #f8f9fa;
        }
        .quick-dial-item.crisis {
            background: #fff5f5;
        }
        .quick-dial-item.crisis:hover {
            background: #ffe0e0;
        }
        .quick-dial-item.emergency {
            background: #fff8f0;
        }
        .dial-icon {
            font-size: 1.5rem;
        }
        .dial-info {
            display: flex;
            flex-direction: column;
        }
        .dial-info strong {
            color: #1a4d2e;
            font-size: 0.95rem;
        }
        .dial-info span {
            color: #6c757d;
            font-size: 0.85rem;
        }
        @media (max-width: 768px) {
            #quickDialWidget {
                bottom: 1rem;
                left: 1rem;
            }
            .quick-dial-toggle {
                width: 55px;
                height: 55px;
            }
            .quick-dial-menu {
                min-width: 260px;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(widget);
}

function toggleQuickDial() {
    const menu = document.getElementById('quickDialMenu');
    menu.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const widget = document.getElementById('quickDialWidget');
    const menu = document.getElementById('quickDialMenu');
    if (widget && menu && menu.classList.contains('active')) {
        if (!widget.contains(e.target)) {
            menu.classList.remove('active');
        }
    }
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c🇺🇸 St. Louis Veteran Resource Hub 🇺🇸', 'font-size: 20px; font-weight: bold; color: #1a4d2e;');
console.log('%cBy Paul Moore, USMC Combat Veteran', 'font-size: 14px; color: #d4af37;');
console.log('%cStill Fighting. Still Healing. Still Here.', 'font-size: 14px; font-style: italic; color: #6c757d;');
console.log('%c\nIf you\'re in crisis, call 988 and press 1', 'font-size: 16px; font-weight: bold; color: #c41e3a;');

// ============================================
// ENHANCEMENT 2: PRINTABLE RESOURCE CARDS
// ============================================
function createPrintButtons() {
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach(card => {
        const printBtn = document.createElement('button');
        printBtn.className = 'print-card-btn';
        printBtn.innerHTML = '🖨️ Print';
        printBtn.title = 'Print this resource card';
        printBtn.onclick = (e) => {
            e.stopPropagation();
            printResourceCard(card);
        };
        card.appendChild(printBtn);
    });

    const style = document.createElement('style');
    style.textContent = `
        .print-card-btn {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: white;
            border: 1px solid var(--light-gray);
            padding: 0.4rem 0.8rem;
            border-radius: var(--radius-sm);
            font-size: 0.85rem;
            cursor: pointer;
            opacity: 0;
            transition: all 0.2s ease;
            z-index: 10;
        }
        .resource-card {
            position: relative;
        }
        .resource-card:hover .print-card-btn {
            opacity: 1;
        }
        .print-card-btn:hover {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }
        @media print {
            body * {
                visibility: hidden;
            }
            .print-resource, .print-resource * {
                visibility: visible;
            }
            .print-resource {
                position: absolute;
                left: 0;
                top: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

function printResourceCard(card) {
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    const cardHTML = card.outerHTML;

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Veteran Resource Card</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 2rem;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .resource-card {
                    border: 2px solid #1a4d2e;
                    padding: 1.5rem;
                    page-break-inside: avoid;
                }
                .resource-card h4 {
                    color: #1a4d2e;
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                .resource-type {
                    color: #d4af37;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }
                .resource-contact {
                    margin-top: 1rem;
                    border-top: 2px solid #e9ecef;
                    padding-top: 1rem;
                }
                .print-card-btn { display: none; }
                @media print {
                    body { padding: 0; }
                }
            </style>
        </head>
        <body>
            <div style="text-align: center; margin-bottom: 2rem;">
                <h1 style="color: #1a4d2e;">St. Louis Veteran Resource Hub</h1>
                <p style="color: #6c757d;">paulmmoore3416.github.io/stl-veteran-hub</p>
            </div>
            ${cardHTML}
            <div style="margin-top: 2rem; text-align: center; color: #6c757d; font-size: 0.9rem;">
                <p><strong>Veterans Crisis Line:</strong> 988 press 1 | Text 838255</p>
                <p>Printed from St. Louis Veteran Resource Hub</p>
            </div>
        </body>
        </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();

    setTimeout(() => {
        printWindow.print();
    }, 250);
}

// ============================================
// ENHANCEMENT 3: SOCIAL MEDIA SHARE BUTTONS
// ============================================
function createShareButtons() {
    const shareSection = document.createElement('div');
    shareSection.className = 'share-section';
    shareSection.innerHTML = `
        <div class="share-container">
            <h3>Share This Resource Hub</h3>
            <p>Help other veterans find the support they need</p>
            <div class="share-buttons">
                <button onclick="shareToFacebook()" class="share-btn facebook">
                    <span>📘</span> Facebook
                </button>
                <button onclick="shareToTwitter()" class="share-btn twitter">
                    <span>🐦</span> Twitter/X
                </button>
                <button onclick="shareToLinkedIn()" class="share-btn linkedin">
                    <span>💼</span> LinkedIn
                </button>
                <button onclick="shareToEmail()" class="share-btn email">
                    <span>📧</span> Email
                </button>
                <button onclick="copyLink()" class="share-btn copy">
                    <span>🔗</span> Copy Link
                </button>
            </div>
            <div id="copyNotification" class="copy-notification">Link copied to clipboard!</div>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        .share-section {
            background: var(--off-white);
            padding: var(--spacing-lg) var(--spacing-md);
            text-align: center;
            border-top: 3px solid var(--accent-color);
        }
        .share-container h3 {
            color: var(--primary-dark);
            margin-bottom: 0.5rem;
        }
        .share-container p {
            color: var(--gray);
            margin-bottom: var(--spacing-md);
        }
        .share-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 600px;
            margin: 0 auto;
        }
        .share-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            border: 2px solid var(--primary-color);
            background: white;
            color: var(--primary-dark);
            border-radius: var(--radius-md);
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .share-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }
        .share-btn.facebook:hover {
            background: #1877f2;
            border-color: #1877f2;
            color: white;
        }
        .share-btn.twitter:hover {
            background: #000000;
            border-color: #000000;
            color: white;
        }
        .share-btn.linkedin:hover {
            background: #0077b5;
            border-color: #0077b5;
            color: white;
        }
        .share-btn.email:hover {
            background: var(--primary-color);
            border-color: var(--primary-color);
            color: white;
        }
        .share-btn.copy:hover {
            background: var(--accent-color);
            border-color: var(--accent-color);
            color: var(--near-black);
        }
        .copy-notification {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            background: var(--primary-dark);
            color: white;
            padding: 1rem 2rem;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-xl);
            z-index: 10000;
            font-weight: 700;
            opacity: 0;
            transition: all 0.3s ease;
        }
        .copy-notification.show {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        @media (max-width: 768px) {
            .share-buttons {
                flex-direction: column;
                align-items: stretch;
            }
            .share-btn {
                justify-content: center;
            }
        }
    `;
    document.head.appendChild(style);

    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        contactSection.parentNode.insertBefore(shareSection, contactSection);
    }
}

function shareToFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}

function shareToTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('St. Louis Veteran Resource Hub - Comprehensive resources for veterans in need. Crisis support, housing, mental health, employment & more. #Veterans #StLouis #PTSD #VeteranSupport');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
}

function shareToLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
}

function shareToEmail() {
    const subject = encodeURIComponent('St. Louis Veteran Resource Hub - Help for Veterans');
    const body = encodeURIComponent(`I wanted to share this valuable resource with you:

St. Louis Veteran Resource Hub
${window.location.href}

This comprehensive hub provides:
- 24/7 Crisis Support (Veterans Crisis Line: 988, press 1)
- Housing & Homelessness Services
- Mental Health & PTSD Treatment
- Employment & Career Assistance
- VA Benefits Help
- 80+ Verified Resources in St. Louis Area

Whether you're a veteran in need or know someone who is, this resource could save a life.

Still Fighting. Still Healing. Still Here.`);

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        const notification = document.getElementById('copyNotification');
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    });
}

// ============================================
// ENHANCEMENT 4: SAVE FAVORITE RESOURCES
// ============================================
function createFavoritesFeature() {
    const favoritesButton = document.createElement('button');
    favoritesButton.id = 'viewFavoritesBtn';
    favoritesButton.className = 'view-favorites-btn';
    favoritesButton.innerHTML = '⭐ My Saved Resources (<span id="favCount">0</span>)';
    favoritesButton.onclick = toggleFavoritesModal;

    const style = document.createElement('style');
    style.textContent = `
        .view-favorites-btn {
            position: fixed;
            top: 1rem;
            left: 50%;
            transform: translateX(-50%);
            background: var(--accent-color);
            color: var(--near-black);
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: var(--radius-md);
            font-weight: 700;
            cursor: pointer;
            box-shadow: var(--shadow-md);
            z-index: 998;
            transition: all 0.2s ease;
        }
        .view-favorites-btn:hover {
            background: var(--accent-dark);
            transform: translateX(-50%) translateY(-2px);
            box-shadow: var(--shadow-lg);
        }
        .favorite-btn {
            position: absolute;
            top: 0.5rem;
            right: 3rem;
            background: white;
            border: 1px solid var(--accent-color);
            padding: 0.4rem 0.8rem;
            border-radius: var(--radius-sm);
            font-size: 0.85rem;
            cursor: pointer;
            opacity: 0;
            transition: all 0.2s ease;
            z-index: 10;
        }
        .resource-card:hover .favorite-btn {
            opacity: 1;
        }
        .favorite-btn:hover, .favorite-btn.active {
            background: var(--accent-color);
            color: var(--near-black);
        }
        .favorites-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 9999;
            overflow-y: auto;
            padding: 2rem;
        }
        .favorites-modal.active {
            display: flex;
            align-items: flex-start;
            justify-content: center;
        }
        .favorites-content {
            background: white;
            border-radius: var(--radius-lg);
            padding: 2rem;
            max-width: 900px;
            width: 100%;
            margin: 2rem auto;
            position: relative;
        }
        .favorites-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 3px solid var(--accent-color);
        }
        .favorites-header h2 {
            color: var(--primary-dark);
            margin: 0;
        }
        .close-favorites {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: var(--gray);
            line-height: 1;
        }
        .close-favorites:hover {
            color: var(--primary-dark);
        }
        .favorites-grid {
            display: grid;
            gap: 1rem;
        }
        .favorite-item {
            background: var(--off-white);
            border: 1px solid var(--light-gray);
            border-left: 4px solid var(--accent-color);
            border-radius: var(--radius-md);
            padding: 1rem;
        }
        .no-favorites {
            text-align: center;
            padding: 3rem;
            color: var(--gray);
        }
        @media (max-width: 768px) {
            .view-favorites-btn {
                font-size: 0.85rem;
                padding: 0.6rem 1rem;
            }
            .favorites-content {
                padding: 1rem;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(favoritesButton);

    // Create favorites modal
    const modal = document.createElement('div');
    modal.id = 'favoritesModal';
    modal.className = 'favorites-modal';
    modal.innerHTML = `
        <div class="favorites-content">
            <div class="favorites-header">
                <h2>⭐ My Saved Resources</h2>
                <button class="close-favorites" onclick="toggleFavoritesModal()">&times;</button>
            </div>
            <div id="favoritesGrid" class="favorites-grid"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // Add favorite buttons to resource cards
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach((card, index) => {
        const favBtn = document.createElement('button');
        favBtn.className = 'favorite-btn';
        favBtn.setAttribute('data-index', index);
        favBtn.innerHTML = '⭐ Save';
        favBtn.onclick = (e) => {
            e.stopPropagation();
            toggleFavorite(index, card, favBtn);
        };
        card.appendChild(favBtn);
    });

    loadFavorites();
}

function toggleFavorite(index, card, button) {
    let favorites = JSON.parse(localStorage.getItem('veteranResourceFavorites') || '[]');

    const resourceData = {
        index: index,
        title: card.querySelector('h4')?.textContent,
        type: card.querySelector('.resource-type')?.textContent,
        description: card.querySelector('.resource-description')?.textContent,
        contact: card.querySelector('.resource-contact')?.innerHTML
    };

    const existingIndex = favorites.findIndex(f => f.index === index);

    if (existingIndex > -1) {
        favorites.splice(existingIndex, 1);
        button.innerHTML = '⭐ Save';
        button.classList.remove('active');
    } else {
        favorites.push(resourceData);
        button.innerHTML = '⭐ Saved';
        button.classList.add('active');
    }

    localStorage.setItem('veteranResourceFavorites', JSON.stringify(favorites));
    updateFavoriteCount();
    loadFavorites();
}

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('veteranResourceFavorites') || '[]');
    const favoritesGrid = document.getElementById('favoritesGrid');

    if (!favoritesGrid) return;

    if (favorites.length === 0) {
        favoritesGrid.innerHTML = `
            <div class="no-favorites">
                <p><strong>No saved resources yet</strong></p>
                <p>Click the ⭐ Save button on any resource card to save it for quick access later.</p>
            </div>
        `;
    } else {
        favoritesGrid.innerHTML = favorites.map(fav => `
            <div class="favorite-item">
                <h4 style="color: var(--primary-dark); margin-bottom: 0.5rem;">${fav.title}</h4>
                <p style="color: var(--accent-dark); font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem;">${fav.type}</p>
                <p style="color: var(--gray); margin-bottom: 1rem;">${fav.description}</p>
                <div style="border-top: 1px solid var(--light-gray); padding-top: 0.75rem;">
                    ${fav.contact}
                </div>
            </div>
        `).join('');
    }

    // Update button states
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach((card, index) => {
        const button = card.querySelector('.favorite-btn');
        if (button) {
            const isFavorited = favorites.some(f => f.index === index);
            if (isFavorited) {
                button.innerHTML = '⭐ Saved';
                button.classList.add('active');
            } else {
                button.innerHTML = '⭐ Save';
                button.classList.remove('active');
            }
        }
    });

    updateFavoriteCount();
}

function updateFavoriteCount() {
    const favorites = JSON.parse(localStorage.getItem('veteranResourceFavorites') || '[]');
    const countEl = document.getElementById('favCount');
    if (countEl) {
        countEl.textContent = favorites.length;
    }
}

function toggleFavoritesModal() {
    const modal = document.getElementById('favoritesModal');
    modal.classList.toggle('active');
    if (modal.classList.contains('active')) {
        loadFavorites();
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('favoritesModal');
    if (modal && e.target === modal) {
        modal.classList.remove('active');
    }
});

// ============================================
// INITIALIZE ALL ENHANCEMENTS
// ============================================
window.addEventListener('DOMContentLoaded', () => {
    createQuickDialWidget();
    createPrintButtons();
    createShareButtons();
    createFavoritesFeature();
});

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