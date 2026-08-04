// ====== Burger Menu ======
const mobileIcon = document.getElementById("mobile-icon");
const mainNav = document.getElementById("main-nav");

mobileIcon.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

// ====== Scroll Effect ======
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// hero.js

document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  const scrollIndicator = document.querySelector(".scroll-down-indicator");

  // Animate hero content on load
  heroContent.style.opacity = "1";

  // Hide scroll indicator when user scrolls
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      scrollIndicator.style.opacity = "0";
    } else {
      scrollIndicator.style.opacity = "1";
    }
  });
});



// Animation on scroll for feature cards
const featureCards = document.querySelectorAll(".features-card");

const revealOnScroll = () => {
  featureCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "all 0.8s ease";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);




document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll("#skills-container .skill-card");

    cards.forEach((card, index) => {
        // ندي ستايل أولي للحركة
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.5s ease";

        // نخلي الكارت يظهر بانسيابية بالتتابع
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200);

        // Hover بسيط إضافي للماوس (اختياري لو عايز يزود الحركة)
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05) translateY(-5px)";
            card.style.boxShadow = "0 15px 25px rgba(0,0,0,0.3)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1) translateY(0)";
            card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        });
    });
});


// ------------------- Footer Animation -------------------
document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");
    
    if (footer) { // ✅ شرط علشان ميعملش error لو مفيش footer
        footer.style.opacity = "0";
        footer.style.transform = "translateY(30px)";
        footer.style.transition = "all 0.8s ease";

        window.addEventListener("scroll", function() {
            const footerTop = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (footerTop < windowHeight - 50) {
                footer.style.opacity = "1";
                footer.style.transform = "translateY(0)";
            }
        });
    }
});


// ------------------- Newsletter Form -------------------
const newsletterForm = document.querySelector("footer form");

if (newsletterForm) { // ✅ شرط علشان ميعملش error لو مفيش form
    newsletterForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const emailInput = newsletterForm.querySelector('input[name="email"]');
        const email = emailInput.value;

        if (email === "" || !email.includes("@")) {
            alert("Please enter a valid email address.");
        } else {
            alert(`Thank you for subscribing, ${email}!`); // ✅ استخدمنا backticks
            newsletterForm.reset();
        }
    });
}






// Function to handle smooth scrolling
function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Get the scroll-down button and add a click event listener
const scrollDownBtn = document.querySelector('.scroll-down-btn');
if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents the default jump behavior
        const targetId = scrollDownBtn.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
}






document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // هنا ستضيف كود التحقق من البيانات
            console.log('Form submitted!');
        });
    }
});
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // مؤقتًا لمنع الإرسال الفعلي
  alert('تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.');
});
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
inputs.forEach(input => {
  input.addEventListener('focus', () => input.style.borderColor = '#007BFF');
  input.addEventListener('blur', () => input.style.borderColor = '#ccc');
});











document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContentSections = document.querySelectorAll('.tab-content > div');

    function showTabContent(targetId) {
        tabContentSections.forEach(content => {
            content.style.display = 'none';
        });

        const targetContent = document.querySelector(targetId);
        if (targetContent) {
            const displayType = targetContent.classList.contains('skills-grid') || targetContent.classList.contains('portfolio-grid') ? 'grid' : 'block';
            targetContent.style.display = displayType;
        }
    }

    function setActiveTab(clickedLink) {
        tabLinks.forEach(link => {
            link.classList.remove('active');
        });
        clickedLink.classList.add('active');
    }

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            setActiveTab(link);
            showTabContent(targetId);
        });
    });

    const activeLink = document.querySelector('.tab-link.active');
    if (activeLink) {
        const targetId = activeLink.getAttribute('href');
        showTabContent(targetId);
    }

    // Follow button functionality
    const followBtn = document.querySelector('.profile-actions .btn.secondary-btn');
    if (followBtn) {
        followBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (followBtn.textContent.trim() === 'Follow') {
                followBtn.textContent = 'Following';
                followBtn.classList.add('following');
                console.log('User started following');
            } else {
                followBtn.textContent = 'Follow';
                followBtn.classList.remove('following');
                console.log('User unfollowed');
            }
        });
    }
});










document.addEventListener('DOMContentLoaded', () => {
    // Simulated data (you can replace this with real data from a server)
    const dashboardData = {
        totalUsers: 1543,
        publishedSkills: 78,
        activeWorkshops: 12
    };

    // Function to update the summary cards
    function updateSummary() {
        const usersCard = document.querySelector('.summary-card .summary-value');
        const skillsCard = document.querySelector('.summary-card:nth-child(2) .summary-value');
        const workshopsCard = document.querySelector('.summary-card:nth-child(3) .summary-value');

        if (usersCard) {
            usersCard.textContent = dashboardData.totalUsers;
        }
        if (skillsCard) {
            skillsCard.textContent = dashboardData.publishedSkills;
        }
        if (workshopsCard) {
            workshopsCard.textContent = dashboardData.activeWorkshops;
        }
    }

    // Run the functions when the page loads
    updateSummary();
    handleDisabledButtons();
});






document.querySelector('.main-search-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const query = document.querySelector('input[name="search_query"]').value;
  // نفذ فلترة أو ابعت للـ API
  console.log("بحث عن:", query);
});

document.querySelectorAll('.trending-tags a').forEach(tag => {
  tag.addEventListener('click', function(e) {
    e.preventDefault();
    const tagText = this.textContent.replace('#', '');
    console.log("فلترة حسب التريند:", tagText);
    // نفذ فلترة حسب التاج
  });
});


document.querySelectorAll('.filters select').forEach(select => {
  select.addEventListener('change', function() {
    const type = document.getElementById('skill-type').value;
    const category = document.getElementById('category').value;
    const level = document.getElementById('level').value;
    console.log("فلترة حسب:", { type, category, level });
    // نفذ فلترة بناءً على القيم
  });
});


document.querySelector('.clear-btn').addEventListener('click', function() {
  document.getElementById('skill-type').value = 'all';
  document.getElementById('category').value = 'all';
  document.getElementById('level').value = 'all';
  console.log("تم مسح الفلاتر");
  // أعد تحميل النتائج أو أظهر الكل
});


document.querySelectorAll('.sort-options a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.sort-options a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    const sortBy = this.textContent.toLowerCase();
    console.log("ترتيب حسب:", sortBy);
    // نفذ ترتيب النتائج
  });
});


document.querySelector('.primary-btn').addEventListener('click', function(e) {
  e.preventDefault();
  console.log("فتح نموذج طلب مهارة");
  // افتح modal أو انتقل لصفحة الطلب
});

document.querySelector('.secondary-btn').addEventListener('click', function(e) {
  e.preventDefault();
  console.log("فتح نموذج إضافة مهارة");
  // افتح modal أو انتقل لصفحة الإضافة
});




document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".form-step");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const progressBar = document.querySelector(".progress-bar");
  const form = document.getElementById("add-skill-form");
  const previewContainer = document.querySelector(".live-preview-card-container");
  const coverInput = document.getElementById("cover-image");

  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("current-step", i === index);
    });

    prevBtn.style.display = index === 0 ? "none" : "inline-block";
    nextBtn.textContent = index === steps.length - 1 ? "Submit" : "Next";

    const progress = ((index + 1) / steps.length) * 100;
    progressBar.style.width = `${progress}%`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    } else {
      form.submit();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });

  coverInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.style.maxWidth = "100%";
        img.style.borderRadius = "8px";
        previewContainer.innerHTML = "";
        previewContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });

  form.addEventListener("input", function () {
    const name = form.skill_name.value;
    const desc = form.short_description.value;
    const category = form.skill_category.value;
    const level = form.skill_level.value;

    previewContainer.innerHTML = `
      <div style="background:#fff; padding:20px; border-radius:8px; box-shadow:0 0 10px rgba(0,0,0,0.1)">
        <h3>${name || "Skill Name"}</h3>
        <p><strong>Category:</strong> ${category || "N/A"}</p>
        <p><strong>Level:</strong> ${level || "N/A"}</p>
        <p>${desc || "Short description will appear here."}</p>
      </div>
    `;
  });

  showStep(currentStep);
});








document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation items and content panels
    const navItems = document.querySelectorAll('.settings-nav .nav-item');
    const settingsPanels = document.querySelectorAll('.settings-panel');

    // Function to switch between panels
    function switchPanel(targetId) {
        // Remove 'active' class from all nav items and panels
        navItems.forEach(item => item.classList.remove('active'));
        settingsPanels.forEach(panel => panel.classList.remove('active'));

        // Add 'active' class to the clicked nav item and its corresponding panel
        const activeNav = document.querySelector(`settings-nav .nav-item[data-target="${targetId}"]`);
        const activePanel = document.getElementById(targetId);

        if (activeNav && activePanel) {
            activeNav.classList.add('active');
            activePanel.classList.add('active');
        }
    }

    // Add click event listeners to each nav item
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            switchPanel(targetId);
        });
    });

    // Handle form submissions (preventing default behavior)
    const profileForm = document.querySelector('.profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Profile changes saved successfully!');
            // Here you would add code to send data to the server
        });
    }

    const securityForm = document.querySelector('.security-form');
    if (securityForm) {
        securityForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Password changed successfully!');
            // Here you would add code to send data to the server
        });
    }

    const notificationsForm = document.querySelector('.notifications-form');
    if (notificationsForm) {
        notificationsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Notification preferences saved!');
            // Here you would add code to send data to the server
        });
    }

    // Handle "Delete Account" button
    const deleteAccountBtn = document.getElementById('delete-account-btn');
    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', () => {
            const isConfirmed = confirm('Are you sure you want to delete your account? This action is permanent and cannot be undone.');
            if (isConfirmed) {
                alert('Your account has been deleted.');
                // Here you would add code to send a deletion request to the server
                // and then redirect the user to the homepage or a confirmation page
            }
        });
    }
});





document.addEventListener('DOMContentLoaded', () => {

    // --- Simulated Blog Posts Data ---
    const allBlogPosts = [
        {
            title: "A Beginner's Guide to Git and GitHub",
            summary: "Learn the essential commands of Git and how to use GitHub for version control and collaboration.",
            category: "coding",
            author: "Ali Ahmed",
            readTime: "5 min read",
            image: "images/coding.jpg"
        },
        {
            title: "5 Tips for Creating a Professional Portfolio",
            summary: "Discover key strategies to showcase your design work effectively and land your dream job.",
            category: "design",
            author: "Mona Said",
            readTime: "7 min read",
            image: "images/design.jpg"
        },
        {
            title: "Marketing in the Digital Age",
            summary: "Explore the latest trends in digital marketing and how to grow your online presence.",
            category: "marketing",
            author: "Layla Karim",
            readTime: "10 min read",
            image: "images/marketing.jpg"
        },
        {
            title: "Advanced CSS Techniques",
            summary: "Take your styling skills to the next level with these advanced CSS techniques and properties.",
            category: "coding",
            author: "Ali Ahmed",
            readTime: "8 min read",
            image: "images/css.jpg"
        }
    ];

    const blogGrid = document.querySelector('.blog-posts-grid');
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-by');
    const noResultsMessage = document.querySelector('.empty-state-message');

    // --- Function to Render Blog Posts ---
    function renderBlogPosts(posts) {
        blogGrid.innerHTML = ''; // Clear previous posts

        if (posts.length === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
            posts.forEach(post => {
                const postCard = document.createElement('div');
                postCard.className = 'blog-post-card';
                postCard.innerHTML = `
                    <img src="${post.image}" alt="${post.title}">
                    <div class="card-content">
                        <span class="post-tag">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
                        <h4>${post.title}</h4>
                        <p class="post-summary">${post.summary}</p>
                        <div class="post-meta">
                            <span class="author-name">by ${post.author}</span>
                            <span class="read-time"><i class="far fa-clock"></i> ${post.readTime}</span>
                        </div>
                    </div>
                `;
                blogGrid.appendChild(postCard);
            });
        }
    }

    // --- Function to Filter and Sort Posts ---
    function filterAndSortPosts() {
        const selectedCategory = categoryFilter.value;
        const sortBy = sortFilter.value;

        // Filter
        let filteredPosts = allBlogPosts.filter(post => {
            return selectedCategory === 'all' || post.category === selectedCategory;
        });

        // Sort
        if (sortBy === 'newest') {
            filteredPosts.reverse(); // Simplified sort for demo
        } else if (sortBy === 'popular') {
            // Add a more complex sort logic here if needed
            // For now, it will just show the default order
        }

        renderBlogPosts(filteredPosts);
    }

    // --- Event Listeners for Filters ---
    categoryFilter.addEventListener('change', filterAndSortPosts);
    sortFilter.addEventListener('change', filterAndSortPosts);

    // --- Newsletter Form Functionality ---
    const newsletterForm = document.querySelector('.newsletter-form');
    const thankYouMessage = document.getElementById('thank-you-message');

if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            newsletterForm.style.display = 'none';
            thankYouMessage.style.display = 'block';

            // Here you would add code to send the form data to a server
        });
    }

    // --- Initial Render ---
    filterAndSortPosts();
});











document.addEventListener('DOMContentLoaded', () => {

    // --- Simulated Workshops Data ---
    const allWorkshops = [
        {
            title: "UX Research Fundamentals",
            instructor: "Jane Smith",
            category: "design",
            price: "free",
            status: "live",
            date: "August 25, 2025",
            image: "images/workshop-image.jpg"
        },
        {
            title: "Advanced CSS Animations",
            instructor: "Ali Hassan",
            category: "coding",
            price: "paid",
            status: "recorded",
            date: "Available On-demand",
            image: "images/workshop-image2.jpg"
        },
        {
            title: "Python for Data Science",
            instructor: "Mohamed Fathy",
            category: "coding",
            price: "paid",
            status: "recorded",
            date: "Available On-demand",
            image: "images/workshop-image3.jpg"
        },
        {
            title: "Principles of Graphic Design",
            instructor: "Sarah Mohamed",
            category: "design",
            price: "paid",
            status: "recorded",
            date: "Available On-demand",
            image: "images/workshop-image4.jpg"
        },
        {
            title: "Social Media Marketing 101",
            instructor: "Fatma Khaled",
            category: "marketing",
            price: "free",
            status: "live",
            date: "September 1, 2025",
            image: "images/workshop-image5.jpg"
        }
    ];

    const workshopsGrid = document.querySelector('.workshops-grid');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortFilter = document.getElementById('sort-by');
    const searchInput = document.querySelector('.interactive-search-bar input');
    const noResultsMessage = document.querySelector('.empty-state-message');

    // --- Function to Render Workshops ---
    function renderWorkshops(workshops) {
        workshopsGrid.innerHTML = ''; // Clear previous workshops

        if (workshops.length === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
            workshops.forEach(workshop => {
                const workshopCard = document.createElement('div');
                workshopCard.className = 'workshop-card';

                const badgeClass = workshop.status === 'live' ? 'live' : 'recorded';
                const priceClass = workshop.price === 'free' ? '' : 'paid';
                
                workshopCard.innerHTML = `
                    <span class="workshop-badge" ${badgeClass}">${workshop.status.toUpperCase()}</span>
                    <img src="${workshop.image}" alt="${workshop.title}">
                    <div class="card-content">
                        <div class="workshop-meta">
                            <img src="images/david.jpg" alt="Instructor Avatar">
                            <h5>by ${workshop.instructor}</h5>
                        </div>
                        <h4>${workshop.title}</h4>
                        <p class="workshop-details">
                            <i class="fas fa-calendar-alt"></i> ${workshop.date}
                        </p>
                        <div class="card-footer">
                            <span class="workshop-price ${priceClass}">${workshop.price === 'free' ? 'Free' : '$' + workshop.price}</span>
                            <a href="#" class="btn primary-btn">${workshop.status === 'live' ? 'Book Now' : 'View Details'}</a>
                        </div>
                    </div>
                `;
                workshopsGrid.appendChild(workshopCard);
            });
        }
    }

// --- Function to Filter and Sort Workshops ---
    function filterAndSortWorkshops() {
        const selectedCategory = categoryFilter.value;
        const selectedPrice = priceFilter.value;
        const sortBy = sortFilter.value;
        const searchQuery = searchInput.value.toLowerCase();

        // Filter
        let filteredWorkshops = allWorkshops.filter(workshop => {
            const matchesCategory = selectedCategory === 'all' || workshop.category === selectedCategory;
            const matchesPrice = selectedPrice === 'all' || workshop.price === selectedPrice;
            const matchesSearch = workshop.title.toLowerCase().includes(searchQuery) || workshop.instructor.toLowerCase().includes(searchQuery);
            
            return matchesCategory && matchesPrice && matchesSearch;
        });

        // Sort
        if (sortBy === 'price') {
            filteredWorkshops.sort((a, b) => {
                const priceA = a.price === 'free' ? 0 : parseFloat(a.price);
                const priceB = b.price === 'free' ? 0 : parseFloat(b.price);
                return priceA - priceB;
            });
        } else if (sortBy === 'newest') {
             // A more realistic sort would be by date, but this is a simple demo
            filteredWorkshops.reverse(); 
        }

        renderWorkshops(filteredWorkshops);
    }

    // --- Event Listeners for Filters and Search ---
    categoryFilter.addEventListener('change', filterAndSortWorkshops);
    priceFilter.addEventListener('change', filterAndSortWorkshops);
    sortFilter.addEventListener('change', filterAndSortWorkshops);
    searchInput.addEventListener('input', filterAndSortWorkshops); // 'input' is better for live search

    // --- Initial Render ---
    filterAndSortWorkshops();
});