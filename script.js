// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .feature-card, .course-card, .instructor-card, .blog-card').forEach(el => {
    observer.observe(el);
});

const courses = [
    {
        title: 'Web Development Bootcamp',
        description: 'Master modern web development with HTML, CSS, and JavaScript',
        level: 'Beginner',
        duration: '12 Weeks',
        students: '1.2K',
        image: 'https://source.unsplash.com/random/400x300/?programming',
        category: 'Technology',
        price: '$299',
        instructor: 'AbdelRahman Hassanein',
        rating: 4.8
    },
    {
        title: 'Data Science Fundamentals',
        description: 'Learn data analysis, visualization, and machine learning basics',
        level: 'Intermediate',
        duration: '16 Weeks',
        students: '2.5K',
        image: 'https://source.unsplash.com/random/400x300/?data',
        category: 'Technology',
        price: '$399',
        instructor: 'Dr. Sarah Chen',
        rating: 4.9
    },
];

// Load Filtered Courses
function loadFilteredCourses(category = 'all') {
    const courseGrid = document.querySelector('.course-grid');
    if (!courseGrid) return;

    courseGrid.innerHTML = '';
    
    const filteredCourses = category === 'all' 
        ? courses 
        : courses.filter(course => course.category === category);

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}">
                <span class="course-level">${course.level}</span>
            </div>
            <div class="course-content">
                <div class="course-info">
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                </div>
                <div class="instructor-info">
                    <img src="https://source.unsplash.com/random/40x40/?portrait" alt="${course.instructor}">
                    <div class="instructor-details">
                        <div class="instructor-name">${course.instructor}</div>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <span>${course.rating} (${course.students} students)</span>
                        </div>
                    </div>
                </div>
                <div class="course-meta">
                    <div class="course-stats">
                        <span><i class="fas fa-clock"></i> ${course.duration}</span>
                        <span><i class="fas fa-users"></i> ${course.students}</span>
                    </div>
                    <div class="course-price">${course.price}</div>
                </div>
            </div>
        `;
        courseGrid.appendChild(courseCard);
    });
}

// Initialize Category Filter
function initializeCategoryFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            loadFilteredCourses(category);
        });
    });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    loadFilteredCourses();
    initializeCategoryFilter();
    loadInstructors();
    loadBlogPosts();
    loadTeacherDescriptions();
});

// Instructor Data
const instructors = [
    {
        name: 'AbdelRahman Hassanein',
        role: 'UI/UX Design Expert',
        image: 'assets/instructor1.jpg',
        twitter: '#',
        linkedin: '#'
    },
    {
        name: 'Sarah Chen',
        role: 'Product Designer',
        image: 'assets/instructor2.jpg',
        twitter: '#',
        linkedin: '#'
    },
    {
        name: 'Mike Johnson',
        role: 'Frontend Developer',
        image: 'assets/instructor3.jpg',
        twitter: '#',
        linkedin: '#'
    },
    
];

// Dynamically Load Instructors
function loadInstructors() {
    const instructorsGrid = document.querySelector('.instructors-grid');
    if (!instructorsGrid) return;

    instructors.forEach(instructor => {
        const instructorCard = document.createElement('div');
        instructorCard.className = 'instructor-card';
        instructorCard.innerHTML = `
            <img src="${instructor.image}" alt="${instructor.name}">
            <h3>${instructor.name}</h3>
            <p>${instructor.role}</p>
            <div class="social-links">
                <a href="${instructor.twitter}"><i class="fab fa-twitter"></i></a>
                <a href="${instructor.linkedin}"><i class="fab fa-linkedin"></i></a>
            </div>
        `;
        instructorsGrid.appendChild(instructorCard);
    });
}

// Blog Data
const blogPosts = [
    {
        title: 'Three Pillars of User Interface Design',
        category: 'Design',
        image: 'assets/blog1.jpg',
        excerpt: 'Learn the fundamentals of creating user-friendly interfaces...'
    },
    {
        title: 'The Future of Web Development',
        category: 'Development',
        image: 'assets/blog2.jpg',
        excerpt: 'Exploring upcoming trends in web development...'
    },
    {
        title: 'Mastering User Research',
        category: 'UX',
        image: 'assets/blog3.jpg',
        excerpt: 'Essential techniques for understanding your users...'
    }
];

// Dynamically Load Blog Posts
function loadBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="blog-content">
                <span class="blog-category">${post.category}</span>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        `;
        blogGrid.appendChild(blogCard);
    });
}

// Teacher Description Data
const teacherDescriptions = [
    {
        name: 'AbdelRahman Hassanein',
        role: 'Web Developer Expert',
        image: 'images/Boody.png',
        experience: '5+ Years',
        description: 'Leading Web designer and Builder with over 5 years of experience in creating user-centered designs for global brands. Certified in advanced design principles and modern Build tools.',
        students: '2000+',
        rating: '5',
        courses: '3'
    },
    {
        name: 'Yara Ashraf',
        role: 'Data science Expert',
        image: 'images/yara.png',
        experience: '8+ Years',
        description: 'Expert product Data Scientist with expertise in data analysis, visualization, and machine learning.',
        students: '1500+',
        rating: '4.9',
        courses: '3'
    },
    {
        name: 'loujain Hossam El-Din',
        role: 'Database Mangement System Expert',
        image: 'images/lou.png',
        experience: '10+ Years',
        description: 'Senior Database Designer with expertise in database design, normalization, and database management systems.',
        students: '3000+',
        rating: '5',
        courses: '3'
    }
];

// Dynamically Load Teacher Descriptions
function loadTeacherDescriptions() {
    const teachersGrid = document.querySelector('.teachers-grid');
    if (!teachersGrid) return;

    teachersGrid.innerHTML = ''; // Clear existing content
    
    teacherDescriptions.forEach(teacher => {
        const teacherCard = document.createElement('div');
        teacherCard.className = 'teacher-description-card';
        teacherCard.innerHTML = `
            <div class="teacher-image">
                <img src="${teacher.image}" alt="${teacher.name}">
                <div class="experience-badge">${teacher.experience}</div>
            </div>
            <div class="teacher-info">
                <h3>${teacher.name}</h3>
                <span class="specialization">${teacher.role}</span>
                <p class="description">${teacher.description}</p>
                <div class="achievements">
                    <div class="achievement">
                        <i class="fas fa-users"></i>
                        <span>${teacher.students} Students</span>
                    </div>
                    <div class="achievement">
                        <i class="fas fa-star"></i>
                        <span>${teacher.rating} Rating</span>
                    </div>
                    <div class="achievement">
                        <i class="fas fa-certificate"></i>
                        <span>${teacher.courses} Courses</span>
                    </div>
                </div>
            </div>
        `;
        teachersGrid.appendChild(teacherCard);
    });
}

// Counter Animation

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.nav-container').appendChild(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.nav-actions').classList.toggle('active');
});

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: block;
            background: none;
            border: none;
            color: var(--text);
            font-size: 1.5rem;
            cursor: pointer;
        }

        .nav-links.active,
        .nav-actions.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--background);
            padding: 1rem;
            box-shadow: var(--shadow-md);
        }

        .nav-links.active {
            gap: 1rem;
        }

        .nav-actions.active {
            top: calc(100% + 200px);
        }
    }
`;
document.head.appendChild(style);

// Team Section View More
document.querySelectorAll('.team-card .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const teamName = this.closest('.team-card').querySelector('h3').textContent;
        alert(`Viewing more details about ${teamName}`);
        // Here you would typically navigate to a detailed team page
    });
});

// Dashboard Cards Interaction
document.querySelectorAll('.dashboard-card .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const action = this.textContent;
        switch(action) {
            case 'View Dashboard':
                alert('Loading your personalized learning dashboard...');
                break;
            case 'View Certificates':
                alert('Opening your certificates gallery...');
                break;
            case 'Start Chat':
                alert('Connecting you with a tutor...');
                break;
            case 'Change Language':
                alert('Opening language preferences...');
                break;
        }
    });
});

// Opportunities Section
document.querySelectorAll('.opportunity-card .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const type = this.closest('.opportunity-card').querySelector('h3').textContent;
        alert(`Exploring ${type} opportunities...`);
        // Here you would typically navigate to the opportunities page
    });
});

// Initialize Admin Dashboard
document.addEventListener('DOMContentLoaded', function() {
    toggleAdminDashboard();
});

// Animate elements when they come into view
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

// Apply animation to all cards and sections
document.querySelectorAll('.team-card, .feature-block, .dashboard-card, .opportunity-card, .admin-card').forEach(element => {
    animateOnScroll.observe(element);
});
