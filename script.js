













//Our Future Innovative Solutions START


// Solution Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('solution-modal');
  const modalContent = document.querySelector('.modal-body');
  const closeBtn = document.querySelector('.close-modal');
  const learnMoreBtns = document.querySelectorAll('.learn-more-btn');


  
  
  // Solution content data
  const solutions = {
      blockchain: {
          title: "Blockchain Traceability",
          icon: "fa-qrcode",
          content: `
              <div class="solution-detail">
                  <div class="solution-header">
                      <div class="solution-icon">
                          <i class="fas fa-qrcode"></i>
                      </div>
                      <h2>Blockchain Traceability</h2>
                  </div>
                  <div class="solution-body">
                      <p>Our blockchain technology provides an immutable record of your product's journey from farm to consumer, ensuring complete transparency and trust in your supply chain.</p>
                      
                      <h3>Key Features:</h3>
                      <ul>
                          <li>End-to-end product journey tracking</li>
                          <li>Tamper-proof record keeping</li>
                          <li>Real-time access to product history</li>
                          <li>QR code scanning for consumers</li>
                          <li>Automated compliance reporting</li>
                      </ul>
                      
                      <div class="solution-stats">
                          <div class="stat-item">
                              <div class="stat-value">100%</div>
                              <div class="stat-label">Data Integrity</div>
                          </div>
                          <div class="stat-item">
                              <div class="stat-value">24/7</div>
                              <div class="stat-label">Accessibility</div>
                          </div>
                          <div class="stat-item">
                              <div class="stat-value">0</div>
                              <div class="stat-label">Tamper Incidents</div>
                          </div>
                      </div>
                  </div>
              </div>
          `
      },
      iot: {
          title: "IoT Monitoring",
          icon: "fa-satellite-dish",
          content: `
              <div class="solution-detail">
                  <div class="solution-header">
                      <div class="solution-icon">
                          <i class="fas fa-satellite-dish"></i>
                      </div>
                      <h2>IoT Monitoring System</h2>
                  </div>
                  <div class="solution-body">
                      <p>Our IoT sensors provide real-time monitoring of environmental conditions across your agricultural operations, enabling data-driven decisions for optimal growing conditions.</p>
                      
                      <h3>Key Features:</h3>
                      <ul>
                          <li>Real-time temperature and humidity monitoring</li>
                          <li>Soil moisture and nutrient tracking</li>
                          <li>Automated alerts for abnormal conditions</li>
                          <li>Energy and resource usage optimization</li>
                          <li>Historical data analysis</li>
                      </ul>
                    
   
    <div class="dashboard-container">
        <!-- Left Column - Sensors -->
        <div class="sensors-column">
            <div class="sensor-card">
                <div class="sensor-header">
                    <i class="fas fa-thermometer-half"></i>
                    <h3>Temperature</h3>
                </div>
                <div class="sensor-value">24.5°C</div>
                <div class="sensor-status normal">
                    <i class="fas fa-check-circle"></i> Normal
                </div>
            </div>

            <div class="sensor-card">
                <div class="sensor-header">
                    <i class="fas fa-tint"></i>
                    <h3>Humidity</h3>
                </div>
                <div class="sensor-value">68%</div>
                <div class="sensor-status normal">
                    <i class="fas fa-check-circle"></i> Optimal
                </div>
            </div>

            <div class="sensor-card">
                <div class="sensor-header">
                    <i class="fas fa-seedling"></i>
                    <h3>Soil Moisture</h3>
                </div>
                <div class="sensor-value">42%</div>
                <div class="sensor-status warning">
                    <i class="fas fa-exclamation-triangle"></i> Low
                </div>
            </div>
        </div>

        <!-- Right Column - Charts & Alerts -->
        <div class="data-column">
            <div class="mini-chart">
                <div class="chart-header">
                    <i class="fas fa-chart-line"></i>
                    <h3>Temp Trend</h3>
                </div>
                <div class="chart-bars">
                    <div class="bar" style="height: 30%;"></div>
                    <div class="bar" style="height: 50%;"></div>
                    <div class="bar" style="height: 70%;"></div>
                    <div class="bar" style="height: 40%;"></div>
                </div>
            </div>

            <div class="alerts-box">
                <div class="alerts-header">
                    <i class="fas fa-bell"></i>
                    <h3>Alerts</h3>
                </div>
                <div class="alert-item">
                    <i class="fas fa-exclamation-circle critical"></i>
                    <span>High temp in Zone 1</span>
                </div>
                <div class="alert-item">
                    <i class="fas fa-exclamation-triangle warning"></i>
                    <span>Low soil moisture</span>
                </div>
            </div>
        </div>
    </div>
                  </div>
              </div>
              </div>
          `
      },
      ai: {
          title: "AI Analytics",
          icon: "fa-robot",
          content: `
              <div class="solution-detail">
                  <div class="solution-header">
                      <div class="solution-icon">
                          <i class="fas fa-robot"></i>
                      </div>
                      <h2>AI Predictive Analytics</h2>
                  </div>
                  <div class="solution-body">
                      <p>Our AI-powered analytics platform provides predictive insights to optimize yields, prevent diseases, and maximize the efficiency of your agricultural operations.</p>
                      
                      <h3>Key Features:</h3>
                      <ul>
                          <li>Yield prediction models</li>
                          <li>Early disease detection</li>
                          <li>Optimal harvest timing</li>
                          <li>Resource allocation recommendations</li>
                          <li>Market trend analysis</li>
                      </ul>
                      
                      <div class="solution-stats">
                          <div class="stat-item">
                              <div class="stat-value">30%</div>
                              <div class="stat-label">Yield Increase</div>
                          </div>
                          <div class="stat-item">
                              <div class="stat-value">50%</div>
                              <div class="stat-label">Faster Detection</div>
                          </div>
                          <div class="stat-item">
                              <div class="stat-value">20%</div>
                              <div class="stat-label">Cost Reduction</div>
                          </div>
                      </div>
                  </div>
              </div>
          `
      }
  };

  // Open modal when Learn More is clicked
  learnMoreBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
          e.preventDefault();
          const card = this.closest('.solution-card');
          const solutionType = card.getAttribute('data-target');
          
          modalContent.innerHTML = solutions[solutionType].content;
          modal.style.display = "block";
          document.body.style.overflow = "hidden";
      });
  });

  // Close modal when X is clicked
  closeBtn.addEventListener('click', function() {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
  });

  // Close modal when clicking outside content
  window.addEventListener('click', function(e) {
      if (e.target === modal) {
          modal.style.display = "none";
          document.body.style.overflow = "auto";
      }
  });
});


//Our Future Innovative Solutions END

    
       

// Hamburger Toggle START

// Enhanced Mobile Menu Functionality
const hamburger = document.getElementById('hamburger-menu');
const navContainer = document.querySelector('.nav-container');
const darkModeToggle = document.getElementById('darkModeToggle');
const menuOverlay = document.createElement('div');
menuOverlay.className = 'menu-overlay';
document.body.appendChild(menuOverlay);

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navContainer.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

// Close menu when clicking overlay
menuOverlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navContainer.classList.remove('active');
  menuOverlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
});

// Close menu when clicking links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navContainer.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

// Make sure dark mode toggle is visible on mobile
function checkDarkModeButton() {
  if (window.innerWidth <= 768) {
    darkModeToggle.style.display = 'flex';
  } else {
    darkModeToggle.style.display = ''; // Reset to default
  }
}

// Run on load and resize
window.addEventListener('load', checkDarkModeButton);
window.addEventListener('resize', checkDarkModeButton);

// Prevent scrolling when menu is open
document.body.classList.add('no-scroll');


// Hamburger Toggle END



// Dark Mode Toggle

const darkModeIcon = document.getElementById('darkModeIcon');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeIcon.classList.replace('fa-moon', 'fa-sun');
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Animated Stats Counter
const statNumbers = document.querySelectorAll('.stat-number');

const animateStats = () => {
    statNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-count');
        const count = +stat.innerText;
        const increment = target / 50;
        
        if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(animateStats, 20);
        } else {
            stat.innerText = target;
        }
    });
};

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stat-number')) {
                animateStats();
            }
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.stat-number, .feature-card, .about-preview, .agtrace-preview').forEach(el => {
    observer.observe(el);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


// Innovating Sustainability Since 2019 CSS START

// Animation triggers
document.addEventListener('DOMContentLoaded', function() {
  // Text reveal animation
  const revealElements = document.querySelectorAll('.reveal-text');
  
  const revealOnScroll = function() {
      revealElements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementPosition < windowHeight - 100) {
              element.classList.add('visible');
          }
      });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger on load
  
  // Mission/vision toggle
  const mvButtons = document.querySelectorAll('.mv-btn');
  
  mvButtons.forEach(button => {
      button.addEventListener('click', function() {
          const target = this.getAttribute('data-target');
          
          // Update active button
          mvButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
          
          // Update content
          document.querySelectorAll('.mv-text').forEach(text => {
              text.classList.remove('active');
          });
          document.getElementById(target).classList.add('active');
      });
  });
  
  // Animated stats counter
  const statValues = document.querySelectorAll('.stat-value');
  
  const animateStats = () => {
      statValues.forEach(stat => {
          const target = +stat.getAttribute('data-count');
          const count = +stat.innerText;
          const increment = target / 50;
          
          if (count < target) {
              stat.innerText = Math.ceil(count + increment);
              setTimeout(animateStats, 20);
          } else {
              stat.innerText = target;
          }
      });
  };
  
  // Trigger when stats are in view
  const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateStats();
              statsObserver.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });
  
  document.querySelector('.about-stats').querySelectorAll('.stat-value').forEach(stat => {
      statsObserver.observe(stat);
  });
});

// Innovating Sustainability Since 2019 CSS END


// 2025 Modern Hero Section START ===== */

// Initialize Particle.js
document.addEventListener('DOMContentLoaded', function() {
  // Load particles.js if available
  if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
          "particles": {
              "number": {
                  "value": 80,
                  "density": {
                      "enable": true,
                      "value_area": 800
                  }
              },
              "color": {
                  "value": "#c2db22"
              },
              "shape": {
                  "type": "circle",
                  "stroke": {
                      "width": 0,
                      "color": "#000000"
                  }
              },
              "opacity": {
                  "value": 0.5,
                  "random": true,
                  "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                  }
              },
              "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                      "enable": true,
                      "speed": 2,
                      "size_min": 0.1,
                      "sync": false
                  }
              },
              "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#c2db22",
                  "opacity": 0.2,
                  "width": 1
              },
              "move": {
                  "enable": true,
                  "speed": 1,
                  "direction": "none",
                  "random": true,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                  }
              }
          },
          "interactivity": {
              "detect_on": "canvas",
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "grab"
                  },
                  "onclick": {
                      "enable": true,
                      "mode": "push"
                  },
                  "resize": true
              },
              "modes": {
                  "grab": {
                      "distance": 140,
                      "line_linked": {
                          "opacity": 0.5
                      }
                  },
                  "push": {
                      "particles_nb": 4
                  }
              }
          },
          "retina_detect": true
      });
  }

  // Video fallback for mobile
  if (window.innerWidth < 768) {
      const videoBg = document.querySelector('.video-background video');
      if (videoBg) {
          videoBg.setAttribute('playsinline', '');
          videoBg.setAttribute('muted', '');
          videoBg.setAttribute('autoplay', '');
      }
  }
});


// 2025 Modern Hero Section END ===== */


//===== Responsive and Back2top CSS START ===== */

// Back to Top Button with 2025 Animation
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Add animation class
  backToTopButton.classList.add('clicked');
  
  // Scroll to top with smooth behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Remove animation class after animation completes
  setTimeout(() => {
    backToTopButton.classList.remove('clicked');
  }, 1000);
});

// Mobile Menu Toggle

const navLinks = document.querySelector('.nav-links');
const authLinks = document.querySelector('.auth-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  authLinks.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    authLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// Add this to handle responsive menu on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    authLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});
//===== Responsive and Back2top js END ===== */






//===== Contact page rdesign js START ===== */


document.addEventListener('DOMContentLoaded', function() {
    // Floating labels functionality (unchanged)
    const floatLabels = document.querySelectorAll('.input-group.floating input, .input-group.floating textarea, .input-group.floating select');
    floatLabels.forEach(input => {
        if (input.value) input.parentNode.classList.add('focused');
        input.addEventListener('focus', () => input.parentNode.classList.add('focused'));
        input.addEventListener('blur', () => !input.value && input.parentNode.classList.remove('focused'));
    });

    // Location switching - SIMPLIFIED AND GUARANTEED TO WORK
    function switchToLocation(location) {
        // Hide all maps first
        document.querySelectorAll('.map-iframe').forEach(iframe => {
            iframe.classList.remove('active');
        });
        
        // Show only the selected map
        document.querySelector(`.map-iframe[data-location="${location}"]`).classList.add('active');
        
        // Update active buttons
        document.querySelectorAll('.map-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.location === location);
        });
        
        // Update active location cards
        document.querySelectorAll('.location-card').forEach(card => {
            card.classList.toggle('active', card.dataset.location === location);
        });
    }

    // Set click handlers for location cards
    document.querySelectorAll('.location-card').forEach(card => {
        card.addEventListener('click', () => {
            switchToLocation(card.dataset.location);
        });
    });

    // Set click handlers for map buttons
    document.querySelectorAll('.map-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            switchToLocation(btn.dataset.location);
        });
    });

    // Initialize with Dhaka as default
    switchToLocation('dhaka');

    // Form submission (unchanged)
    const contactForm = document.getElementById('contact-form-2025');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
            floatLabels.forEach(input => input.parentNode.classList.remove('focused'));
        });
    }
});
    


//===== Contact page rdesign js END ===== */



// New JS START

// Animation on scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    // Observe all feature cards and modules
    document.querySelectorAll('.feature-card-2025, .detail-feature, .module-card').forEach(card => {
      observer.observe(card);
    });
  
    // Add hover effect to module cards
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.querySelector('.module-icon').style.transform = 'scale(1.1) rotate(5deg)';
      });
      card.addEventListener('mouseleave', () => {
        card.querySelector('.module-icon').style.transform = 'scale(1) rotate(0)';
      });
    });
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  
  // Optional: Add a simple animation for the hero text
  const agtraceTitle = document.querySelector('.agtrace-title');
  if (agtraceTitle) {
    agtraceTitle.style.opacity = '0';
    agtraceTitle.style.transform = 'translateY(20px)';
    agtraceTitle.style.transition = 'all 0.8s ease-out';
    
    setTimeout(() => {
      agtraceTitle.style.opacity = '1';
      agtraceTitle.style.transform = 'translateY(0)';
    }, 300);
  }


// New JS END


// Header is hidden when scroll it will be show START

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { // Adjust this value as needed
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Header is hidden when scroll it will be show END



// show less start

  
document.addEventListener('DOMContentLoaded', function() {
    const revealBtn = document.getElementById('revealContentBtn');
    const hiddenContent = document.getElementById('hiddenContent');
    
    // Create "Show less" button
    const showLessBtn = document.createElement('button');
    showLessBtn.innerHTML = '<span>Show less</span><i class="fas fa-long-arrow-alt-up"></i>';
    showLessBtn.className = 'video-cta neo-btn';
    showLessBtn.id = 'showLessBtn';
    showLessBtn.style.margin = '40px auto';
    showLessBtn.style.display = 'block';
    
    // Add button to hidden content
    hiddenContent.appendChild(showLessBtn);
    
    // Toggle functionality
    revealBtn.addEventListener('click', function() {
        hiddenContent.style.display = 'block';
        setTimeout(() => {
            hiddenContent.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    });
    
    showLessBtn.addEventListener('click', function() {
        hiddenContent.style.display = 'none';
        document.querySelector('.video-parallax').scrollIntoView({ behavior: 'smooth' });
    });
});

// show less End



// single page handling start

// SPA Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Update active link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            // Smooth scroll to section
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navContainer.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
});

// Set active link based on scroll position
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const id = section.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// single page handling end




// Underline while option click START

// particlesJS('particles-js', {
//     particles: {
//       color: "#3498db", // Changed from #c2db22
//       line_linked: {
//         color: "#3498db" // Changed from #c2db22
//       }
//     }
//   });