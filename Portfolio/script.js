document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#6366f1" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#4f46e5", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });

    // Set current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        this.classList.toggle('text-white');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-nav-link').forEach(item => {
        item.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.classList.remove('text-white');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.remove('opacity-0', 'invisible');
            scrollToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'invisible');
            scrollToTopBtn.classList.remove('opacity-100', 'visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would normally send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('section');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // Load content from resume data
    loadResumeData();
});

function loadResumeData() {
    // Summary
    document.getElementById('summaryText').textContent = 
        "Motivated and enthusiastic software development student in full stack development, eager to leverage my skills in a dynamic work environment. Seeking a job opportunity to gain experience, learn new technologies, and contribute to innovative projects while enhancing my technical and problem-solving abilities.";

    // Contact Info
    document.getElementById('location').textContent = "Jhansi, India";
    document.getElementById('email').textContent = "tanishq2200.tp@gmail.com";
    document.getElementById('phone').textContent = "0638 626 57 02";

    // Skills
    const skillsContainer = document.getElementById('skillsContainer');
    const skillsData = [
        {
            category: "Programming Languages",
            items: ["Java", "Python", "JavaScript", "SQL", "HTML/CSS"],
            icon: "fas fa-code",
            color: "primary"
        },
        {
            category: "Frameworks & Libraries",
            items: ["React.js", "Spring Boot", "MySQL", "Bootstrap", "Tailwind CSS"],
            icon: "fas fa-layer-group",
            color: "secondary"
        },
        {
            category: "Tools & Technologies",
            items: ["Git/GitHub", "VS Code", "SQL Workbench", "Mongoose", "OOP", "Data Structures & Algorithms"],
            icon: "fas fa-tools",
            color: "primary"
        }
    ];

    skillsData.forEach(skillCategory => {
        const skillItem = document.createElement('div');
        skillItem.className = `bg-dark-200 p-8 rounded-xl shadow-lg hover:shadow-${skillCategory.color}/10 transition-all duration-500 border border-dark-100 hover:border-${skillCategory.color} transform hover:-translate-y-2`;
        skillItem.innerHTML = `
            <div class="flex items-center mb-8">
                <div class="flex-shrink-0 bg-${skillCategory.color}/10 p-4 rounded-lg text-${skillCategory.color} text-2xl">
                    <i class="${skillCategory.icon}"></i>
                </div>
                <h3 class="text-2xl font-bold text-white ml-6">${skillCategory.category}</h3>
            </div>
            <ul class="space-y-4">
                ${skillCategory.items.map(item => `<li class="flex items-center">
                    <div class="flex-shrink-0 h-3 w-3 rounded-full bg-${skillCategory.color} mr-4"></div>
                    <span class="text-lg text-gray-300">${item}</span>
                </li>`).join('')}
            </ul>
        `;
        skillsContainer.appendChild(skillItem);
    });

    // Projects
    const projectsContainer = document.getElementById('projectsContainer');
    const projectsData = [
        {
            name: "Ritambhara Yoga Retreat",
            description: "A fully responsive landing page for a yoga retreat center with smooth animations and mobile-first design.",
            link: "https://github.com/TanIX-22/Yoga__Nishant",
            tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
            image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            color: "secondary"
        },
        {
            name: "Darwin X Platform",
            description: "Modern landing page for a tech startup with interactive elements and optimized performance.",
            link: "https://github.com/TanIX-22/TanIX-22",
            tags: ["Frontend Development", "UI/UX", "Performance Optimization"],
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            color: "primary"
        },
        {
            name: "TaskMaster Pro",
            description: "Dynamic to-do list application with drag-and-drop functionality and local storage.",
            link: "https://github.com/TanIX-22/TestProject",
            tags: ["JavaScript", "Task Management", "Web App"],
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1510&q=80",
            color: "secondary"
        }
    ];

    projectsData.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = `bg-dark-200 rounded-xl shadow-lg hover:shadow-${project.color}/10 transition-all duration-500 border border-dark-100 hover:border-${project.color} overflow-hidden transform hover:-translate-y-2 group`;
        projectItem.innerHTML = `
            <div class="h-64 overflow-hidden relative">
                <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-dark-400/90 via-transparent to-transparent"></div>
            </div>
            <div class="p-8">
                <h3 class="text-2xl font-bold text-white mb-4">${project.name}</h3>
                <p class="text-gray-400 mb-6">${project.description}</p>
                <div class="mb-6 flex flex-wrap gap-3">
                    ${project.tags.map(tag => `<span class="inline-block bg-dark-300 text-gray-300 text-sm px-4 py-2 rounded-full">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="inline-flex items-center text-${project.color} hover:text-${project.color}-light font-medium transition-colors duration-300 text-lg">
                    View Project <i class="fas fa-external-link-alt ml-3"></i>
                </a>
            </div>
        `;
        projectsContainer.appendChild(projectItem);
    });

    // Experience
    const experienceContainer = document.getElementById('experienceContainer');
    const experienceData = [
        {
            company: "Front End Developer Intern",
            companyName: "CryptoRave",
            duration: "Sep 2023 - Dec 2023",
            location: "Remote",
            details: [
                "Designed and developed the company's website using HTML, CSS, and JavaScript.",
                "Collaborated with the design team creating a user-friendly and visually appealing interface running 500+ users.",
                "Implemented responsive web designs to ensure the site worked well on various devices.",
                "Assisted in debugging and optimizing website performance for a better user experience."
            ],
            icon: "fas fa-code",
            color: "primary"
        },
        {
            company: "Business Development Associate",
            companyName: "Urban Company",
            duration: "Jul 2022 - Sep 2022",
            location: "Gurugram",
            details: [
                "Optimized SQL queries, improving data retrieval speed by 30%, enhancing operational efficiency.",
                "Developed and maintained database reports, supporting 3 teams with real-time insights for strategic planning.",
                "Collaborated with teams implementing data-driven solutions, reducing manual data processing time by 40%.",
                "Built interactive dashboards, increasing visibility into key metrics and improving reporting efficiency by 25%."
            ],
            icon: "fas fa-chart-line",
            color: "secondary"
        }
    ];

    experienceData.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = `bg-dark-200 p-8 rounded-xl shadow-lg hover:shadow-${exp.color}/10 transition-all duration-500 border border-dark-100 hover:border-${exp.color} transform hover:-translate-y-2`;
        expItem.innerHTML = `
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div class="flex items-start mb-4 md:mb-0">
                    <div class="flex-shrink-0 bg-${exp.color}/10 p-4 rounded-lg text-${exp.color} text-2xl">
                        <i class="${exp.icon}"></i>
                    </div>
                    <div class="ml-6">
                        <h3 class="text-2xl font-bold text-white">${exp.company}</h3>
                        <p class="text-${exp.color} text-lg">${exp.companyName}</p>
                    </div>
                </div>
                <div class="flex flex-col md:items-end">
                    <span class="inline-block bg-${exp.color}/10 text-${exp.color} text-sm px-4 py-2 rounded-full mb-2">${exp.duration}</span>
                    <span class="inline-flex items-center text-gray-400">
                        <i class="fas fa-map-marker-alt mr-2"></i>
                        ${exp.location}
                    </span>
                </div>
            </div>
            <ul class="space-y-4 text-gray-300">
                ${exp.details.map(detail => `<li class="flex items-start">
                    <div class="flex-shrink-0 mt-1.5">
                        <div class="h-2 w-2 rounded-full bg-${exp.color} mr-4"></div>
                    </div>
                    <span class="text-lg">${detail}</span>
                </li>`).join('')}
            </ul>
        `;
        experienceContainer.appendChild(expItem);
    });
}